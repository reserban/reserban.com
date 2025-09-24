import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for the current session
// This will reset on each deployment, but that's acceptable for a simple visitor counter
let visitorCount = 4; // Starting from your current count
const visitedIPs = new Set<string>();

// For production, we'll use a simple approach that works with serverless functions

function getClientIdentifier(request: NextRequest): string {
  // Try to get real IP address from various headers
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip'); // Cloudflare
  const xClientIp = request.headers.get('x-client-ip');
  
  // Get the first IP from forwarded header or use direct IP
  const ip = forwarded?.split(',')[0]?.trim() || 
            realIp || 
            cfConnectingIp || 
            xClientIp;
  
  // In development or if no IP, create a unique identifier
  if (!ip || ip === '127.0.0.1' || ip === '::1' || ip === 'localhost') {
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const timestamp = Date.now();
    return `dev-${userAgent.substring(0, 20)}-${timestamp}`;
  }
  
  return ip;
}

export async function GET() {
  try {
    return NextResponse.json({ count: visitorCount });
  } catch (error) {
    console.error('Error in GET /api/visitors:', error);
    return NextResponse.json({ error: 'Failed to get visitor count' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientId = getClientIdentifier(request);
    
    // Simple check: if we haven't seen this IP in this session, count it as a new visitor
    if (!visitedIPs.has(clientId)) {
      visitedIPs.add(clientId);
      visitorCount += 1;
      
      console.log(`New visitor: ${clientId}, Total count: ${visitorCount}`);
      
      return NextResponse.json({ 
        count: visitorCount, 
        isNewVisitor: true 
      });
    }
    
    return NextResponse.json({ 
      count: visitorCount, 
      isNewVisitor: false 
    });
  } catch (error) {
    console.error('Error in POST /api/visitors:', error);
    return NextResponse.json({ error: 'Failed to track visitor' }, { status: 500 });
  }
}
