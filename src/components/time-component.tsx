"use client";

import { useEffect, useState, forwardRef, useImperativeHandle } from "react";

export interface TimeComponentRef {
  refresh: () => void;
}

export const TimeComponent = forwardRef<TimeComponentRef>((props, ref) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const updateTime = () => {
    const now = new Date();
    const bucharestTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Bucharest"}));
    setCurrentTime(bucharestTime);
  };

  const refresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      updateTime();
      setIsLoading(false);
    }, 500); // Simulate loading for 500ms
  };

  useImperativeHandle(ref, () => ({
    refresh
  }));

  useEffect(() => {
    setIsClient(true);
    updateTime();
    setIsLoading(false);
    
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const timeString = date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit'
    });
    
    // Split time and AM/PM
    const parts = timeString.split(' ');
    return {
      time: parts[0],
      period: parts[1]
    };
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="border border-border bg-card p-4 md:p-6">
        <div className="space-y-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-7 bg-muted rounded mb-3 mx-auto w-24"></div>
              <div className="h-6 bg-muted rounded mb-2 mx-auto w-20"></div>
              <div className="h-4 bg-muted rounded mx-auto w-32"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-border bg-card p-4 md:p-6">
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-xl font-semibold text-foreground">
            {isClient ? (
              <>
                {formatTime(currentTime).time}{' '}
                <span className="text-accent">{formatTime(currentTime).period}</span>
              </>
            ) : (
              '--:-- --'
            )}
          </div>
          <div className="space-y-1 mt-2">
            <div className="text-lg font-semibold text-foreground">
              {isClient ? formatDate(currentTime).split(',')[0] : 'Loading...'}
            </div>
            <div className="text-sm text-muted-foreground">
              {isClient ? formatDate(currentTime).split(',').slice(1).join(',').trim() : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

TimeComponent.displayName = "TimeComponent";
