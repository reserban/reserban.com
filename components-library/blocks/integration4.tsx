"use client";

import { Cable } from "lucide-react";

const Integration4 = () => {
  return (
    <section className="py-32">
      <div className="container relative z-10 flex flex-col items-center gap-5">
        <div className="relative my-4 flex flex-row gap-14 md:gap-20 lg:gap-28">
          {/* Connection Lines SVG */}
          <svg
            className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 200 50"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Grid pattern in background */}
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="200" height="50" fill="url(#grid)" opacity="0.7" />

            {/* Single connecting line */}
            <path
              d="M 40 25 L 160 25"
              stroke="black"
              strokeWidth="1"
              strokeOpacity="0.2"
              fill="none"
            />

            {/* Connection dots */}
            <circle cx="40" cy="25" r="3" fill="black" fillOpacity="0.3" />
            <circle cx="80" cy="25" r="2" fill="black" fillOpacity="0.3" />
            <circle cx="120" cy="25" r="2" fill="black" fillOpacity="0.3" />
            <circle cx="160" cy="25" r="3" fill="black" fillOpacity="0.3" />

            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="200" y2="0">
                <stop offset="0%" stopColor="black" stopOpacity="0.3" />
                <stop offset="50%" stopColor="black" stopOpacity="0.6" />
                <stop offset="100%" stopColor="black" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          <div className="bg-background relative mb-3 flex h-16 w-16 rounded-xl border shadow-md md:h-20 md:w-20">
            <Cable
              strokeWidth={1.5}
              className="m-auto h-6 w-6 md:h-10 md:w-10"
            />
          </div>

          <div className="bg-background relative mb-3 flex h-16 w-16 rounded-xl border p-4 shadow-md md:h-20 md:w-20">
            <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg" alt="Sparkles" />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-foreground mb-4 max-w-2xl text-3xl font-medium md:text-4xl lg:text-5xl">
            Seamless Global Connectivity
          </h1>

          <p className="text-muted-foreground max-w-2xl text-sm md:text-base lg:text-lg">
            Our platform ensures that your data is always in sync across the
            globe. Whether you're working locally or internationally, your
            information is updated in real-time, providing you with the most
            accurate and up-to-date insights.
          </p>
        </div>

        <div className="aspect-3/1 relative mt-8 w-[90%] md:mt-10 md:w-[80%]">
          <img
            className="h-full w-full rounded-xl object-cover"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-8-wide.svg"
            alt="Global Connectivity"
          />
        </div>
      </div>
    </section>
  );
};

export { Integration4 };
