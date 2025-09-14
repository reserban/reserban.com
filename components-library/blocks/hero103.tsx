"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero103 = () => {
  return (
    <section className="bg-background dark bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/noise.png')] py-12 font-sans md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center gap-12 lg:grid-cols-[minmax(33.75rem,1fr)_1.5fr] lg:gap-8">
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="text-foreground text-4xl leading-tight md:text-5xl lg:text-[3.5rem]">
                Anticipate greater value from your billing
              </h1>
              <p className="text-foreground mb-5 text-lg">
                Our service is a usage-based billing platform designed to
                accelerate your product launches. Effortlessly shape your
                pricing today and refine it with confidence tomorrow.
              </p>
              <div>
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  <div className="shrink-0">
                    <Button
                      asChild
                      className="block h-fit w-fit rounded-full px-6 py-3.5 font-mono text-[0.8125rem] font-medium uppercase leading-4 tracking-widest"
                    >
                      <a href="#">Get a Demo</a>
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    asChild
                    className="group flex h-fit items-center gap-2"
                  >
                    <a href="#">
                      <p className="text-foreground font-mono text-sm font-medium uppercase">
                        GUIDE TO EMBRACING USAGE-BASED PRICING
                      </p>
                      <ChevronRight className="stroke-foreground h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative ml-auto mr-auto aspect-[1.28581291/1] w-full max-w-[37.25rem] lg:ml-auto lg:mr-0">
              <div className="relative mx-auto aspect-[1.020365896/1] h-full w-[79.35%] max-w-[29.5625rem] overflow-hidden rounded-3xl">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt=""
                  className="relative z-10 w-full object-cover"
                />
              </div>
              <div className="absolute -left-[-2%] top-[19.84%] z-30 aspect-[1.765043789/1] w-[30.49%] max-w-[11.875rem] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute left-[0%] top-[55%] z-30 aspect-[1.776555024/1] w-[43.6%] max-w-[16.375rem] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute right-[0%] top-[40%] z-30 aspect-[1.170212766/1] w-[26.48%] max-w-[10.3125rem] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 pt-28">
        <p className="text-foreground px-5 text-center font-mono text-sm font-medium uppercase">
          Trusted by the FASTEST-GROWING STARTUPS AND ENTERPRISES
        </p>
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[
            AutoScroll({
              speed: 1,
            }),
            Autoplay({
              playOnInit: true,
              delay: 1000,
            }),
          ]}
          className="max-w-(--breakpoint-2xl) relative w-full overflow-hidden"
        >
          <CarouselContent className="items-center">
            <CarouselItem className="w-fit basis-auto px-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark-white.svg"
                alt=""
                className="h-8 w-full object-fill"
              />
            </CarouselItem>
            <CarouselItem className="w-fit basis-auto px-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark-white.svg"
                alt=""
                className="h-8 w-full object-fill"
              />
            </CarouselItem>
            <CarouselItem className="w-fit basis-auto px-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark-white.svg"
                alt=""
                className="h-8 w-full object-fill"
              />
            </CarouselItem>
            <CarouselItem className="w-fit basis-auto px-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-white.svg"
                alt=""
                className="h-6 w-full object-fill"
              />
            </CarouselItem>
            <CarouselItem className="w-fit basis-auto px-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark-white.svg"
                alt=""
                className="h-6 w-full object-fill"
              />
            </CarouselItem>
            <CarouselItem className="w-fit basis-auto px-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark-white.svg"
                alt=""
                className="h-8 w-full object-fill"
              />
            </CarouselItem>
            <CarouselItem className="w-fit basis-auto px-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark-white.svg"
                alt=""
                className="h-8 w-full object-fill"
              />
            </CarouselItem>
            <CarouselItem className="w-fit basis-auto px-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark-white.svg"
                alt=""
                className="h-8 w-full object-fill"
              />
            </CarouselItem>
            <CarouselItem className="w-fit basis-auto px-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-white.svg"
                alt=""
                className="h-6 w-full object-fill"
              />
            </CarouselItem>
            <CarouselItem className="w-fit basis-auto px-7">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark-white.svg"
                alt=""
                className="h-6 w-full object-fill"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Hero103 };
