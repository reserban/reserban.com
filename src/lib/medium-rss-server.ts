import Parser from 'rss-parser';

export interface MediumPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  guid: string;
  content: string;
}

export async function fetchMediumPostsServer(): Promise<MediumPost[]> {
  try {
    console.log('Server: Fetching RSS data directly');
    
    const parser = new Parser({
      customFields: {
        item: ['content:encoded', 'content']
      }
    });
    
    const rssUrl = 'https://shl.medium.com/feed';
    const feed = await parser.parseURL(rssUrl);
    
    console.log(`Server: Successfully parsed RSS feed with ${feed.items.length} items`);
    
    // Transform the data to match our expected format
    const items = feed.items.slice(0, 10).map((item, index) => {
      // Get the full content - try multiple fields
      const fullContent = item['content:encoded'] || item.content || item.contentSnippet || item.summary || '';
      const description = item.contentSnippet || item.summary || '';
      
      // Extract excerpt from content (remove HTML tags and limit length)
      const excerpt = description
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/&[^;]+;/g, ' ') // Remove HTML entities
        .trim()
        .substring(0, 150) + '...';
      
      // Estimate read time based on content length (rough estimate)
      const wordCount = fullContent?.split(' ').length || excerpt.split(' ').length;
      const readTime = Math.max(1, Math.ceil(wordCount / 200)) + ' min read';
      
      return {
        id: item.guid || `medium-post-${index}`,
        title: item.title || '',
        excerpt,
        date: item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : '',
        readTime,
        link: item.link || '',
        guid: item.guid || `medium-post-${index}`,
        content: fullContent
      };
    });
    
    console.log(`Server: Processed ${items.length} posts`);
    return items;
  } catch (error) {
    console.error('Server: Error fetching Medium posts:', error);
    return [];
  }
}
