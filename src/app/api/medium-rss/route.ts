import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

// In-memory cache to store RSS data
interface RSSData {
  status: string;
  items: Array<{
    title: string;
    link: string;
    pubDate: string;
    guid: string;
    description: string;
    content: string;
  }>;
  source: string;
  feedTitle?: string;
  feedDescription?: string;
  lastBuildDate?: string;
  warning?: string;
}

let rssCache: { data: RSSData; timestamp: number; } | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const forceRefresh = searchParams.get('force') === 'true';
    
    // Return cached data if it's fresh and not forcing refresh
    if (!forceRefresh && rssCache && (Date.now() - rssCache.timestamp) < CACHE_DURATION) {
      console.log('Server: Returning cached RSS data');
      return NextResponse.json(rssCache.data);
    }
    
    console.log('Server: Fetching fresh RSS data from Medium');
    
    const parser = new Parser({
      customFields: {
        item: ['content:encoded', 'content']
      }
    });
    
    const rssUrl = 'https://medium.com/@reserban/feed';
    const feed = await parser.parseURL(rssUrl);
    
    console.log(`Server: Successfully parsed RSS feed with ${feed.items.length} items`);
    
    // Transform the data to match our expected format
    const items = feed.items.slice(0, 10).map((item, index) => {
      // Get the full content - try multiple fields
      const fullContent = item['content:encoded'] || item.content || item.contentSnippet || item.summary || '';
      const description = item.contentSnippet || item.summary || '';
      
      console.log(`Server: Post "${item.title}" - Content length: ${fullContent.length}, Description length: ${description.length}`);
      
      return {
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate ? new Date(item.pubDate).toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, '') : '',
        guid: item.guid || `medium-post-${index}`,
        description: description,
        content: fullContent
      };
    });
    
    const result = {
      status: 'ok',
      items,
      source: 'rss-parser',
      feedTitle: feed.title,
      feedDescription: feed.description,
      lastBuildDate: feed.lastBuildDate
    };
    
    // Cache the result
    rssCache = {
      data: result,
      timestamp: Date.now()
    };
    
    console.log(`Server: Cached RSS data with ${items.length} items, most recent: "${items[0]?.title}"`);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Server: RSS fetch error:', error);
    
    // Return cached data as fallback if available
    if (rssCache) {
      console.log('Server: Returning stale cached data as fallback');
      return NextResponse.json({
        ...rssCache.data,
        warning: 'Using cached data due to fetch error'
      });
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch RSS feed', 
        details: error instanceof Error ? error.message : 'Unknown error',
        status: 'error'
      },
      { status: 500 }
    );
  }
}
