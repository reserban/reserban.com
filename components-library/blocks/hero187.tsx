"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const features = [
  {
    title: "Tailored workflows",
    description: "Track progress across custom issue flows for your team.",
    icon: CircleDot,
  },
  {
    title: "Milestones",
    description: "Break projects down into concrete phases.",
    icon: Diamond,
  },
  {
    title: "Cross-team projects",
    description: "Collaborate across teams and departments.",
    icon: Blend,
  },
  {
    title: "Progress insights",
    description: "Track scope, velocity, and progress over time.",
    icon: ChartNoAxesColumn,
  },
];

const SLIDES = [
  { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", label: "Kanban" },
  { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg", label: "Issues" },
  { image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg", label: "Add Issues" },
];

const Hero187 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative overflow-hidden py-32 dark:bg-gray-900">
      {/* Gradient border */}
      <div className="container relative grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="bg-linear-to-r via-border to-border absolute inset-x-0 bottom-0 z-10 h-px from-transparent" />
        {/* Left side - Content */}
        <div className="space-y-8 lg:space-y-12">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Shadcnblocks components for your next project
            </h1>

            <p className="text-muted-foreground mt-6 text-2xl font-medium">
              Streamline is the fit-for-purpose tool for planning and building
              modern software products.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                  <Icon className="mt-1 size-4 shrink-0 lg:size-5" />
                  <div>
                    <h2 className="font-semibold">{feature.title}</h2>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button aria-label="Get started">Get started</Button>
            <a href="#">
              <Button
                aria-label="Streamline raises $12M from Roba Ventures"
                variant="outline"
                className="max-sm:hidden"
              >
                <span className="flex items-center gap-2 whitespace-pre-wrap text-start">
                  Documentation
                  <ArrowRight className="size-4" />
                </span>
              </Button>
            </a>
          </div>

          <SlideIndicator
            currentSlide={currentSlide}
            slides={SLIDES}
            className="mb-4! max-lg:hidden"
            api={api}
          />
        </div>

        {/* Right side - Carousel */}
        <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+2rem))] max-lg:translate-x-10">
          <Carousel
            className="size-full [&>div]:size-full"
            setApi={setApi}
            opts={{
              loop: true,
            }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          >
            <CarouselContent className="size-full">
              {SLIDES.map((slide, index) => (
                <CarouselItem key={index}>
                  <img
                    src={slide.image}
                    alt={`Streamline product interface showing ${slide.label}`}
                    className="size-full min-h-[30rem] overflow-hidden rounded-t-xl object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <SlideIndicator
        currentSlide={currentSlide}
        slides={SLIDES}
        className="mb-8 mt-6 lg:hidden"
        api={api}
      />
    </section>
  );
};

interface SlideIndicatorProps {
  currentSlide: number;
  slides: Array<{ label: string }>;
  className?: string;
  api: CarouselApi | null;
}

const SlideIndicator = ({
  currentSlide,
  slides,
  className,
  api,
}: SlideIndicatorProps) => {
  return (
    <div
      className={cn("flex flex-col items-center gap-2 font-medium", className)}
    >
      <div className="">
        <span className="text-foreground-700">{currentSlide + 1} of 3 — </span>
        <span className="text-primary">{slides[currentSlide].label}</span>
      </div>
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-0.5 w-6 rounded-full transition-colors",
              index === currentSlide
                ? "bg-primary"
                : "bg-primary/20 hover:bg-primary/40",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export { Hero187 };
