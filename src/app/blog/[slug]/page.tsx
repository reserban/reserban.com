import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import { fetchMediumPostsServer } from '@/lib/medium-rss';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Helper function to extract ID from slug
function extractIdFromSlug(slug: string): string {
  const parts = slug.split('-');
  return parts[parts.length - 1];
}

// Helper function to create slug from title and guid
function createSlug(title: string, guid: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  const id = guid.split('/').pop() || Date.now().toString();
  return `${slug}-${id}`;
}

// Helper function to clean HTML content
function cleanHtmlContent(html: string): string {
  if (!html) return '';
  
  // Remove Medium's tracking pixels and other unwanted elements
  const cleaned = html
    .replace(/<img[^>]*medium\/_\/stat[^>]*>/g, '') // Remove tracking pixels
    .replace(/<img[^>]*width="1"[^>]*height="1"[^>]*>/g, '') // Remove 1x1 tracking images
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&lsquo;/g, "'")
    .replace(/&rsquo;/g, "'");
  
  // If content is very short, it might be just a snippet
  if (cleaned.length < 100) {
    console.log('Warning: Content seems too short:', cleaned.length, 'characters');
  }
  
  return cleaned;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const posts = await fetchMediumPostsServer();
    const postId = extractIdFromSlug(params.slug);
    const post = posts.find(p => {
      const id = p.guid.split('/').pop();
      return id === postId || createSlug(p.title, p.guid) === params.slug;
    });

    if (!post) {
      return {
        title: 'Post Not Found - Serban Alex Blog',
        description: 'The requested blog post could not be found. Explore more insights on strategic support, product translation, and embracing chaos.',
        openGraph: {
          title: 'Post Not Found - Serban Alex Blog',
          description: 'The requested blog post could not be found. Explore more insights on strategic support, product translation, and embracing chaos.',
          type: 'article',
          url: `https://reserban.com/blog/${params.slug}`,
        },
      };
    }

    const cleanExcerpt = post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || 'Insights on strategic support, product translation, and embracing chaos from Serban Alex.';
    
    return {
      title: `${post.title} - Serban Alex Blog`,
      description: cleanExcerpt,
      keywords: ["Medium", "blog", "strategic support", "leadership", "product translation", "automation", "research", "growth", "complexity", "chaos", "management"],
      authors: [{ name: "Serban Alex", url: "https://reserban.com" }],
      creator: "Serban Alex",
      publisher: "Serban Alex",
      openGraph: {
        title: post.title,
        description: cleanExcerpt,
        type: 'article',
        url: `https://reserban.com/blog/${params.slug}`,
        siteName: 'Serban Alex Blog',
        publishedTime: post.date,
        authors: ['Serban Alex'],
        section: 'Strategic Insights',
        tags: ['Medium', 'Strategic Support', 'Product Translation', 'Leadership', 'Automation'],
        images: [
          {
            url: '/profile-reserban.png',
            width: 1200,
            height: 630,
            alt: `${post.title} - Serban Alex Blog`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: cleanExcerpt,
        images: ['/profile-reserban.png'],
        creator: '@reserban',
      },
      alternates: {
        canonical: `https://reserban.com/blog/${params.slug}`,
        types: {
          'application/rss+xml': [
            {
              url: 'https://reserban.com/api/medium-rss',
              title: 'Serban Alex Blog RSS Feed',
            },
          ],
        },
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } catch {
    return {
      title: 'Blog Post - Serban Alex',
      description: 'Insights on strategic support, product translation, and embracing chaos from Medium.',
      openGraph: {
        title: 'Blog Post - Serban Alex',
        description: 'Insights on strategic support, product translation, and embracing chaos from Medium.',
        type: 'article',
      },
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const posts = await fetchMediumPostsServer();
    
    // If no posts are available, show not found
    if (!posts || posts.length === 0) {
      notFound();
    }
    
    const postId = extractIdFromSlug(params.slug);
    
    const post = posts.find(p => {
      const id = p.guid.split('/').pop();
      return id === postId || createSlug(p.title, p.guid) === params.slug;
    });

    if (!post) {
      notFound();
    }

    const cleanContent = cleanHtmlContent(post.content || post.excerpt);
    
    console.log(`Blog Post Debug:`, {
      title: post.title,
      contentLength: post.content?.length || 0,
      excerptLength: post.excerpt?.length || 0,
      cleanContentLength: cleanContent.length,
      hasContent: !!post.content,
      hasExcerpt: !!post.excerpt
    });

    return (
      <div className="min-h-screen py-6 md:py-12 bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || 'Insights on strategic support and product translation',
              "image": "https://reserban.com/profile-reserban.png",
              "author": {
                "@type": "Person",
                "name": "Serban Alex",
                "url": "https://reserban.com"
              },
              "publisher": {
                "@type": "Person",
                "name": "Serban Alex",
                "url": "https://reserban.com"
              },
              "datePublished": post.date,
              "dateModified": post.date,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://reserban.com/blog/${params.slug}`
              },
              "url": `https://reserban.com/blog/${params.slug}`,
              "isPartOf": {
                "@type": "Blog",
                "name": "Serban Alex Blog",
                "url": "https://reserban.com"
              },
              "about": [
                "Strategic Support",
                "Product Translation",
                "Leadership",
                "Medium"
              ],
              "keywords": "Medium, strategic support, leadership, product translation, automation, research, growth, complexity, chaos, management"
            })
          }}
        />
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {/* Navigation header */}
            <div className="flex items-center justify-between mb-8">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="size-4" />
                Back to Home
              </Link>
              
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                <ExternalLink className="size-4" />
                View on Medium
              </a>
            </div>

            {/* Post header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="size-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="size-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            {/* Post content */}
            <article className="prose prose-neutral dark:prose-invert max-w-none blog-content">
              {cleanContent ? (
                <div 
                  dangerouslySetInnerHTML={{ __html: cleanContent }}
                  className="[&>p]:mb-4 [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mb-4 [&>h1]:mt-8 [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mb-3 [&>h2]:mt-6 [&>h3]:text-lg [&>h3]:font-medium [&>h3]:mb-2 [&>h3]:mt-4 [&>ul]:mb-4 [&>ol]:mb-4 [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:mb-4 [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:mb-4 [&>pre]:overflow-x-auto [&>code]:bg-muted [&>code]:px-1 [&>code]:py-0.5 [&>img]:my-6 [&>img]:mx-auto [&>img]:block [&>img]:w-full [&>img]:max-w-full [&>img]:h-auto [&>img]:object-contain [&>figure]:my-6 [&>figure>img]:mx-auto [&>figure>img]:block [&>figure>img]:w-full [&>figure>img]:max-w-full [&>figure>img]:h-auto [&>figure>img]:object-contain [&>iframe]:w-full [&>iframe]:max-w-full [&>iframe]:my-6 [&>video]:w-full [&>video]:max-w-full [&>video]:h-auto [&>video]:my-6 [&>embed]:w-full [&>embed]:max-w-full [&>embed]:my-6 [&>object]:w-full [&>object]:max-w-full [&>object]:my-6"
                />
              ) : (
                <div className="text-center py-12 border border-border bg-muted/20">
                  <p className="text-muted-foreground mb-4">
                    Content not available in RSS feed.
                  </p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    <ExternalLink className="size-4" />
                    Read Full Article on Medium
                  </a>
                </div>
              )}
            </article>

          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading blog post:', error);
    notFound();
  }
}
