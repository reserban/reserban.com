import { ArrowRight } from "lucide-react";
import React from "react";

import { PointerHighlight } from "@/components/aceternity/pointer-highlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Feature292 = () => {
  return (
    <section className="relative grid w-screen overflow-hidden py-32">
      <div className="container relative z-10 h-full grid-cols-1 items-center justify-center gap-6 lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <div className="bg-muted-foreground/5 text-muted-foreground mb-12 flex items-center justify-center gap-3 rounded-full p-1 pr-4 text-sm font-medium tracking-tight">
            <div className="bg-muted-foreground/10 flex items-center gap-3 rounded-full px-4 py-1.5">
              <span className="inline-block size-2 rounded-full bg-blue-500" />
              <span>We're Hiring</span>
            </div>
            <div className="flex items-center gap-2">
              Join Our Team <ArrowRight className="size-4" />
            </div>
          </div>
          <h1 className="text-5xl font-semibold tracking-tighter lg:text-6xl">
            Elevate Your Next Project With,
            <PointerHighlight containerClassName="inline-block">
              <span>Production-Ready</span>
            </PointerHighlight>
            Shadcnblocks
          </h1>
          <p className="text-muted-foreground mt-10 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sed
            voluptate sequi molestias nam exercitationem.
          </p>

          <div className="mt-10 flex w-full max-w-lg gap-2">
            <Input
              className="h-13 w-full rounded-full"
              placeholder="Enter your email"
            />
            <Button className="h-13 rounded-full">
              Get Started <ArrowRight className="-rotate-45" />
            </Button>
          </div>
        </div>
        <div className="rounded-4xl relative mt-10 flex h-[80vh] w-full items-center justify-center overflow-hidden border lg:mt-0 lg:h-[70vh]">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg"
            alt=""
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Feature292 };
