import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero29 = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex h-full flex-col items-center justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1400 900"
            className="h-full w-full"
          >
            <defs>
              <filter id="blur1" x="-20%" y="-20%" width="140%" height="140%">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <pattern
                id="innerGrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="hsl(var(--color-background))"
                  strokeWidth="0.5"
                  strokeOpacity={0.6}
                />
              </pattern>
              <pattern
                id="grid"
                width="160"
                height="160"
                patternUnits="userSpaceOnUse"
              >
                <rect width="160" height="160" fill="url(#innerGrid)" />
                <path
                  d="M 70 80 H 90 M 80 70 V 90"
                  fill="none"
                  stroke="hsl(var(--color-background))"
                  strokeWidth="1"
                  strokeOpacity={0.3}
                />
              </pattern>
            </defs>
            <g filter="url(#blur1)">
              <rect width="1400" height="900" fill="var(--color-background)" />
              <circle cx="400" cy="740" fill="var(--color-primary)" r="300" />
              <circle cx="1100" cy="600" fill="var(--color-primary)" r="240" />
            </g>
            <rect width="1400" height="900" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      <div className="relative container flex flex-col items-center text-center">
        <h1 className="my-3 text-2xl font-bold text-pretty sm:text-4xl md:my-6 lg:text-5xl">
          Welcome to Our Website
        </h1>
        <p className="mb-6 max-w-xl text-muted-foreground md:mb-12 lg:text-xl">
          Elig doloremque mollitia fugiat omnis! Porro facilis quo animi
          consequatur.
        </p>
        <div className="mb-16 space-y-8">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button variant="outline">Try our product for free</Button>
              <p className="text-xs text-muted-foreground">
                No credit card required
              </p>
            </div>
            <Button>Book a demo</Button>
          </div>
          <div className="flex w-full items-center justify-between rounded-full bg-background px-4 py-2 shadow">
            <div className="flex items-center">
              <span className="flex items-center gap-x-0.5">
                <Star className="size-3 fill-accent-foreground stroke-accent-foreground" />
                <Star className="size-3 fill-accent-foreground stroke-accent-foreground" />
                <Star className="size-3 fill-accent-foreground stroke-accent-foreground" />
                <Star className="size-3 fill-accent-foreground stroke-accent-foreground" />
                <Star className="size-3 fill-accent-foreground stroke-accent-foreground" />
              </span>
              <span className="ml-2 text-xs">4.8 starts</span>
            </div>
            <div className="text-xs">207 Reviews</div>
          </div>
        </div>
      </div>
      <div className="relative container -mb-48 overflow-hidden">
        <div className="mx-auto aspect-4/3 max-w-3xl rounded-xl border border-background/40 bg-background/20 p-4">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder hero"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero29 };
