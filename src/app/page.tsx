"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { AnalyticsSection } from "@/components/efficiency-section";
import { BlogSection } from "@/components/blog-section";

export default function Home() {
  const [refreshFn, setRefreshFn] = useState<(() => void) | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshChange = (refreshFunction: () => void, isLoading: boolean) => {
    setRefreshFn(() => refreshFunction);
    setIsRefreshing(isLoading);
  };

  return (
    <div className="min-h-screen py-4 md:py-12 bg-background relative">
      {/* TE-style accent bar */}
      <div className="fixed left-0 top-0 bottom-0 w-0.5 md:w-2 bg-accent z-10"></div>
      
      
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-6 md:space-y-8">
          <HeroSection onRefresh={refreshFn || undefined} isLoading={isRefreshing} />
          <AboutSection />
          <div className="md:grid md:grid-cols-3 md:gap-8">
            <div className="md:col-span-2">
              <NewsletterSection />
            </div>
            <div className="mt-6 md:mt-0">
              <AnalyticsSection />
            </div>
          </div>
          <BlogSection onRefreshChange={handleRefreshChange} />
        </div>
      </div>
    </div>
  );
}
