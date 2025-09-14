"use client";

import { useEffect, useState } from "react";

export const AnalyticsSection = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
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
        } else {
          // Fallback: just get the current count
          const getResponse = await fetch('/api/visitors');
          if (getResponse.ok) {
            const data = await getResponse.json();
            setVisitorCount(data.count);
          }
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
        // Fallback to localStorage for development
        const storedCount = localStorage.getItem('reserban-visitor-count');
        const lastVisit = localStorage.getItem('reserban-last-visit');
        
        const now = Date.now();
        const oneDayAgo = now - (24 * 60 * 60 * 1000);
        
        let currentCount = storedCount ? parseInt(storedCount) : 1;
        
        if (!lastVisit || parseInt(lastVisit) < oneDayAgo) {
          currentCount += 1;
          localStorage.setItem('reserban-visitor-count', currentCount.toString());
          localStorage.setItem('reserban-last-visit', now.toString());
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
                {isLoading ? '----' : visitorCount.toString().padStart(4, '0')}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <p className="text-sm text-white font-medium leading-tight text-left">
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
              {isLoading ? '----' : visitorCount.toString().padStart(4, '0')}
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
