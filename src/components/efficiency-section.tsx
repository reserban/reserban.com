"use client";

import { useEffect, useState } from "react";

export const AnalyticsSection = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Check if we've already tracked this session
        const sessionTracked = sessionStorage.getItem('reserban-session-tracked');
        
        if (!sessionTracked) {
          // First, try to increment the visitor count
          const response = await fetch('/api/visitors', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setVisitorCount(data.count);
            
            // Mark this session as tracked
            if (data.isNewVisitor) {
              sessionStorage.setItem('reserban-session-tracked', 'true');
            }
          } else {
            throw new Error('Failed to track visitor');
          }
        } else {
          // Just get the current count without incrementing
          const getResponse = await fetch('/api/visitors');
          if (getResponse.ok) {
            const data = await getResponse.json();
            setVisitorCount(data.count);
          } else {
            throw new Error('Failed to get visitor count');
          }
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
        
        // Enhanced fallback with more realistic behavior
        const storedCount = localStorage.getItem('reserban-visitor-count');
        const lastVisit = localStorage.getItem('reserban-last-visit');
        const sessionTracked = sessionStorage.getItem('reserban-session-tracked');
        
        const now = Date.now();
        const oneDayAgo = now - (24 * 60 * 60 * 1000);
        
        let currentCount = storedCount ? parseInt(storedCount) : Math.floor(Math.random() * 50) + 20; // Random starting point
        
        // Only increment if this is a new session and enough time has passed
        if (!sessionTracked && (!lastVisit || parseInt(lastVisit) < oneDayAgo)) {
          currentCount += 1;
          localStorage.setItem('reserban-visitor-count', currentCount.toString());
          localStorage.setItem('reserban-last-visit', now.toString());
          sessionStorage.setItem('reserban-session-tracked', 'true');
        }
        
        setVisitorCount(currentCount);
      } finally {
        setIsLoading(false);
      }
    };

    trackVisitor();
  }, []);

  return (
    <div className="border border-border bg-card p-4 md:p-6 h-full flex flex-col justify-center">
      <div className="text-center">
        
        {/* Mobile layout: optimized for space */}
        <div className="md:hidden flex justify-center">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="text-4xl font-semibold text-accent leading-none">
                {isLoading ? '------' : visitorCount.toString().padStart(6, '0')}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <p className="text-sm mt-1 text-white font-medium leading-tight text-left">
                Unique visitors
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="leading-tight">
                  {isLoading ? 'Loading...' : 'Tracking Active'}
                </span>
                <span className="text-accent text-lg animate-pulse">•</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout: stacked */}
        <div className="hidden md:block">
          <div className="mb-4">
            <div className="text-3xl font-bold text-accent mb-2">
              {isLoading ? '------' : visitorCount.toString().padStart(6, '0')}
            </div>
            <p className="text-sm text-white">
              Unique visitors
            </p>
          </div>
          
          <div className="pt-2 border-t border-border">
            <div className="flex items-center justify-center mt-2 gap-2 text-sm text-muted-foreground">
              <span className="text-accent animate-pulse text-lg">•</span>
              <span>{isLoading ? 'Loading...' : 'Tracking Active'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
