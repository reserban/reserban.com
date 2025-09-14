import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { BlogSection } from "@/components/blog-section";

export default function Home() {
  return (
    <div className="min-h-screen py-8 md:py-12 bg-background">
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-6 md:space-y-8">
          <HeroSection />
          <AboutSection />
          <NewsletterSection />
          <BlogSection />
        </div>
      </div>
    </div>
  );
}
