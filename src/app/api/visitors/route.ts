import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface VisitorData {
  count: number;
  lastVisits: Record<string, number>;
}

const VISITOR_DATA_PATH = path.join(process.cwd(), 'visitor-data.json');
const VISIT_COOLDOWN = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

function getClientIdentifier(request: NextRequest): string {
  // Try to get real IP address, fallback to user agent for development
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || realIp;
  
  // In development or if no IP, use user agent as fallback
  if (!ip || ip === '127.0.0.1' || ip === '::1') {
    const userAgent = request.headers.get('user-agent') || 'unknown';
    return `dev-${userAgent.substring(0, 20)}`;
  }
  
  return ip;
}

function readVisitorData(): VisitorData {
  try {
    if (fs.existsSync(VISITOR_DATA_PATH)) {
      const data = fs.readFileSync(VISITOR_DATA_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading visitor data:', error);
  }
  
  return { count: 0, lastVisits: {} };
}

function writeVisitorData(data: VisitorData): void {
  try {
    fs.writeFileSync(VISITOR_DATA_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing visitor data:', error);
  }
}

export async function GET() {
  try {
    const visitorData = readVisitorData();
    return NextResponse.json({ count: visitorData.count });
  } catch (error) {
    console.error('Error in GET /api/visitors:', error);
    return NextResponse.json({ error: 'Failed to get visitor count' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientId = getClientIdentifier(request);
    const now = Date.now();
    
    const visitorData = readVisitorData();
    const lastVisit = visitorData.lastVisits[clientId];
    
    // Check if this is a new visitor or if enough time has passed
    if (!lastVisit || (now - lastVisit) > VISIT_COOLDOWN) {
      visitorData.count += 1;
      visitorData.lastVisits[clientId] = now;
      
      // Clean up old entries (older than 30 days)
      const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);
      Object.keys(visitorData.lastVisits).forEach(key => {
        if (visitorData.lastVisits[key] < thirtyDaysAgo) {
          delete visitorData.lastVisits[key];
        }
      });
      
      writeVisitorData(visitorData);
      
      return NextResponse.json({ 
        count: visitorData.count, 
        isNewVisitor: true 
      });
    }
    
    return NextResponse.json({ 
      count: visitorData.count, 
      isNewVisitor: false 
    });
  } catch (error) {
    console.error('Error in POST /api/visitors:', error);
    return NextResponse.json({ error: 'Failed to track visitor' }, { status: 500 });
  }
}
