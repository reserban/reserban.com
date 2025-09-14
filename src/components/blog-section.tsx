"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Clock, RefreshCw, ArrowUpRight } from "lucide-react";
import { fetchMediumPosts, type MediumPost } from "@/lib/medium-rss";

export const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<MediumPost[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = async (forceRefresh = false) => {
    setIsLoadingPosts(true);
    setError(null);
    try {
      console.log('Loading Medium posts...', forceRefresh ? '(force refresh)' : '');
      const posts = await fetchMediumPosts(forceRefresh);
      console.log('Loaded posts:', posts);
      setBlogPosts(posts);
    } catch (error) {
      console.error('Failed to load Medium posts:', error);
      setError(error instanceof Error ? error.message : 'Failed to load posts');
    } finally {
      setIsLoadingPosts(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  // Create URL-friendly slug from title
  const createSlug = (title: string, guid: string) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    // Use last part of guid as unique identifier
    const id = guid.split('/').pop() || Date.now().toString();
    return `${slug}-${id}`;
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-xl font-semibold">Post It</h2>
        <button
          onClick={() => loadPosts(true)}
          disabled={isLoadingPosts}
          className="flex items-center gap-2 px-3 py-1.5 text-sm border border-border rounded-sm transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`size-4 ${isLoadingPosts ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>
      {isLoadingPosts ? (
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-sm border border-border bg-card p-4 md:p-6">
              <div className="mb-3 h-6 bg-muted animate-pulse rounded"></div>
              <div className="mb-4 space-y-2">
                <div className="h-4 bg-muted animate-pulse rounded"></div>
                <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-3 bg-muted animate-pulse rounded w-20"></div>
                <div className="h-3 bg-muted animate-pulse rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      ) : blogPosts.length > 0 ? (
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-sm border border-border bg-card p-4 md:p-6 transition-all hover:shadow-lg hover:shadow-accent/5 hover:border-accent"
            > 
              <Link href={`/blog/${createSlug(post.title, post.guid)}`} className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4 flex-1">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors flex-1">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-accent transition-colors ml-2 flex-shrink-0" />
                </div>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                  <div className="flex items-center gap-1">
                    <Calendar className="size-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="size-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          {error ? (
            <>
              <p className="text-muted-foreground mb-4">
                Error loading posts: {error}
              </p>
              <button
                onClick={() => loadPosts(true)}
                className="px-4 py-2 text-sm border border-border rounded-md hover:bg-accent/10 transition-colors"
              >
                Try Again
              </button>
            </>
          ) : (
            <div className="space-y-2">
              <p className="text-muted-foreground">
                No blog posts available at the moment.
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
