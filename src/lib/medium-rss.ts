import Parser from 'rss-parser';

export interface MediumPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  guid: string;
  content?: string; // Optional for client-side usage
}

interface RSSItem {
  title: string;
  description: string;
  content?: string;
  pubDate: string;
  link: string;
  guid?: string;
}

interface ParsedRSSItem {
  title?: string;
  description?: string;
  content?: string;
  contentSnippet?: string;
  summary?: string;
  pubDate?: string;
  link?: string;
  guid?: string;
  'content:encoded'?: string;
  [key: string]: string | undefined;
}

// Shared function to process RSS items
function processRSSItems(items: ParsedRSSItem[], includeContent = false): MediumPost[] {
  return items.slice(0, 10).map((item: ParsedRSSItem, index) => {
    // Get the full content - try multiple fields (for server-side)
    const fullContent = item['content:encoded'] || item.content || item.contentSnippet || item.summary || '';
    const description = item.description || item.contentSnippet || item.summary || '';
    
    // Extract excerpt from content (remove HTML tags and limit length)
    const excerpt = description
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&[^;]+;/g, ' ') // Remove HTML entities
      .trim()
      .substring(0, 150) + '...';
    
    // Estimate read time based on content length (rough estimate)
    const wordCount = fullContent?.split(' ').length || excerpt.split(' ').length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200)) + ' min read';
    
    const post: MediumPost = {
      id: item.guid || `medium-post-${index}`,
      title: item.title || '',
      excerpt,
      date: item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : '',
      readTime,
      link: item.link || '',
      guid: item.guid || `medium-post-${index}`
    };

    // Include content only when requested (server-side)
    if (includeContent) {
      post.content = fullContent;
    }

    return post;
  });
}

// Server-side function for direct RSS parsing (includes full content)
export async function fetchMediumPostsServer(): Promise<MediumPost[]> {
  try {
    console.log('Server: Fetching RSS data directly');
    
    const parser = new Parser({
      customFields: {
        item: ['content:encoded', 'content']
      }
    });
    
    const rssUrl = 'https://medium.com/@reserban/feed';
    const feed = await parser.parseURL(rssUrl);
    
    console.log(`Server: Successfully parsed RSS feed with ${feed.items.length} items`);
    
    const posts = processRSSItems(feed.items as ParsedRSSItem[], true); // Include content for server-side
    
    console.log(`Server: Processed ${posts.length} posts`);
    return posts;
  } catch (error) {
    console.error('Server: Error fetching Medium posts:', error);
    return [];
  }
}

// Client-side function that uses the API route (no full content)
export async function fetchMediumPosts(forceRefresh = false): Promise<MediumPost[]> {
  try {
    const cacheBuster = Date.now();
    
    // Use our Next.js API route to avoid CORS issues
    const apiUrl = `/api/medium-rss?_cb=${cacheBuster}${forceRefresh ? '&force=true' : ''}`;
    
    console.log('Fetching RSS from API:', apiUrl, forceRefresh ? '(force refresh)' : '');
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    });
    
    console.log('API Response status:', response.status, response.statusText);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`API fetch failed: ${response.status} ${response.statusText} - ${errorData.details || 'Unknown error'}`);
    }
    
    const data = await response.json();
    console.log('API data:', data);
    
    // Check if there's an error from our API
    if (data.error) {
      throw new Error(`API error: ${data.error} - ${data.details || ''}`);
    }
    
    if (data.status !== 'ok') {
      throw new Error(`RSS parsing failed: ${data.message || 'Unknown error'}`);
    }
    
    if (!data.items || data.items.length === 0) {
      console.log('API: No RSS items found - feed is empty');
      return []; // Return empty array instead of throwing error
    }
    
    const items: RSSItem[] = data.items;
    
    return processRSSItems(items as ParsedRSSItem[], false).slice(0, 6); // Limit to 6 most recent posts for client-side
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    // Return empty array if RSS fails
    return [];
  }
}