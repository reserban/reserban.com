"use client";

import { Palette, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";

import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface DataItem {
  src: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DATA: DataItem[] = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    title: "Elegant Design",
    description:
      "Discover our beautifully crafted designs that blend style and functionality.",
    icon: Palette,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    title: "Premium Quality",
    description:
      "Experience the finest materials and craftsmanship in every piece.",
    icon: Star,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    title: "Modern Aesthetics",
    description:
      "Stay ahead of the curve with our contemporary and trendy collections.",
    icon: Sparkles,
  },
];

const Gallery13 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setActiveIndex(api.selectedScrollSnap());
    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const ActiveIcon = DATA[activeIndex].icon;

  return (
    <section className="py-32">
      <div className="container">
        <Carousel setApi={setApi} className="w-full">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {/* Left Side */}
            <div className="md:col-span-2">
              <div className="bg-muted flex h-full flex-col gap-8 rounded-lg px-8 py-16">
                <div className="bg-background flex h-12 w-12 items-center justify-center rounded-lg shadow-lg ring-1 ring-gray-200">
                  <ActiveIcon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-medium">
                    {DATA[activeIndex].title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-base">
                    {DATA[activeIndex].description}
                  </p>
                  <div className="flex items-center gap-4">
                    <CarouselPrevious className="relative left-0 right-0 top-0 translate-x-0 translate-y-0 p-5 transition-all duration-200 hover:bg-black hover:text-white" />
                    <CarouselNext className="relative left-0 right-0 top-0 translate-x-0 translate-y-0 p-5 transition-all duration-200 hover:bg-black hover:text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="h-full md:col-span-3">
              <CarouselContent>
                {DATA.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="aspect-2/1 h-full w-full">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="h-full w-full rounded-lg object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery13 };
