export interface MediumPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  guid: string;
}

interface RSSItem {
  title: string;
  description: string;
  content?: string;
  pubDate: string;
  link: string;
  guid?: string;
}

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
    
    return items.map((item, index) => {
      // Extract excerpt from content (remove HTML tags and limit length)
      const excerpt = item.description
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/&[^;]+;/g, ' ') // Remove HTML entities
        .trim()
        .substring(0, 150) + '...';
      
      // Estimate read time based on content length (rough estimate)
      const wordCount = item.content?.split(' ').length || excerpt.split(' ').length;
      const readTime = Math.max(1, Math.ceil(wordCount / 200)) + ' min read';
      
      return {
        id: item.guid || `medium-post-${index}`,
        title: item.title,
        excerpt,
        date: new Date(item.pubDate).toISOString().split('T')[0],
        readTime,
        link: item.link,
        guid: item.guid || `medium-post-${index}`
      };
    }).slice(0, 6); // Limit to 6 most recent posts
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    // Return empty array if RSS fails
    return [];
  }
}
