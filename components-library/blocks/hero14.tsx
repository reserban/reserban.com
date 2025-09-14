"use client";

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const technologies = [
  {
    name: "Next",
    command: "npx create-next-app my-app",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg",
  },
  {
    name: "Vite",
    command: "npm create vite@latest",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vite-icon.svg",
  },
  {
    name: "Remix",
    command: "npx create-remix@latest my-app",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/remix-icon.svg",
  },
  {
    name: "Gatsby",
    command: "npm init gatsby",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon.svg",
  },
  {
    name: "Astro",
    command: "npm create astro@latest",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
  },

  {
    name: "Laravel",
    command: "laravel new my-app ",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/laravel-icon.svg",
  },
  {
    name: "React",
    command: "npx create-react-app my-app",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg",
  },
];

const Hero14 = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    if (!api) return;

    // Set initial selection
    setCurrent(api.selectedScrollSnap());

    // Create a reusable update function
    const updateCurrent = () => {
      // Trigger fade out and then update with fade in
      setFadeIn(false);
      setTimeout(() => {
        setCurrent(api.selectedScrollSnap());
        setFadeIn(true);
      }, 200); // Short delay for the fade effect
    };

    // Add event listeners for both 'select' and 'settle'
    api.on("select", updateCurrent);
    api.on("settle", updateCurrent);

    // Clean up event listeners when component unmounts
    return () => {
      api.off("select", updateCurrent);
      api.off("settle", updateCurrent);
    };
  }, [api]);

  // Function to manually select a technology
  const selectTechnology = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col justify-center">
          <h1 className="mx-auto mb-4 max-w-2xl text-center text-4xl font-bold md:text-6xl">
            Install with one Command
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-muted-foreground">
            Our library is compatible with all popular frameworks, download our
            SDK and get started in minutes.
          </p>
          <div className="mx-auto mt-8 mb-12 flex h-[60px] w-fit items-center gap-2 rounded-md bg-muted px-4 py-2 text-center">
            <div
              className={cn(
                "flex items-center gap-2 transition-opacity duration-300",
                fadeIn ? "opacity-100" : "opacity-0",
              )}
            >
              <img
                src={technologies[current]?.image}
                alt={technologies[current]?.name}
                className="h-4 md:h-7"
              />

              <p className="border-l px-2 font-mono text-sm">
                {technologies[current]?.command}
              </p>
            </div>
          </div>
        </div>
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            loop: true,
          }}
          className="relative mx-auto w-full max-w-3xl before:absolute before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-36 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-36 after:bg-linear-to-l after:from-background after:to-transparent"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {technologies.map((technology, idx) => (
              <CarouselItem
                key={idx}
                className="basis-1/3 select-none sm:basis-1/4 md:basis-1/6"
              >
                <div
                  className={cn(
                    "flex cursor-pointer items-center justify-center gap-2 rounded-md border p-6",
                    idx === current ? "border-input" : "border-transparent",
                  )}
                  onClick={() => selectTechnology(idx)}
                >
                  <img
                    className="h-4 shrink-0 md:h-7"
                    src={technology.image}
                    alt={technology.name}
                  />
                  <p>{technology.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Hero14 };
