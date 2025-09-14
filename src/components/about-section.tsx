"use client";

import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export const AboutSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section>
      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-6 md:gap-8 h-full">
          <div className="rounded-sm border border-border bg-card p-4 md:p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-full bg-accent overflow-hidden">
                <Image 
                  src="/profile-unzet.png" 
                  alt="Unzet Profile" 
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Founder</h3>
                <p className="text-sm text-muted-foreground">Unzet</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>Apr 2022 - Present · 3 yrs 6 mos</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-sm border border-border bg-card p-4 md:p-4 flex-1">
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <div className="text-xl md:text-2xl font-mono font-bold text-foreground">
                  {formatTime(currentTime)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatDate(currentTime)}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-sm border border-border bg-card p-4 md:p-6">
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Efficiency over effort:</strong> Why work harder when you can work smarter? 
              Every system should be optimized for maximum output with minimal input.
            </p>
            <p>
              <strong className="text-foreground">Curiosity as fuel:</strong> The best solutions come from asking &ldquo;why&rdquo; 
              and &ldquo;what if&rdquo; until you find something that doesn&apos;t exist yet.
            </p>
            <p>
              <strong className="text-foreground">Selective focus:</strong> Not everything deserves your attention. 
              The art is knowing what to ignore so you can excel at what matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
