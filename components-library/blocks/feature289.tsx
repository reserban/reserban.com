import { ArrowRightIcon } from "lucide-react";
import React from "react";

import { LinkPreview } from "@/components/aceternity/link-preview";

const Feature289 = () => {
  return (
    <section className="overflow-hidden py-32">
      <div className="container relative z-20 flex w-full flex-col items-center justify-between gap-10 md:flex-row">
        <div>
          <h1 className="justify-center text-5xl font-semibold tracking-tighter md:text-6xl lg:text-8xl">
            Explore <br /> ShadcnBlocks
          </h1>

          <div className="mt-18 max-w-md">
            <div className="bg-foreground mb-2 h-[1px] w-full" />
            <div className="flex items-center justify-between">
              <p className="text-foreground text-lg">Learn More</p>
              <ArrowRightIcon className="size-5 stroke-1" />
            </div>
          </div>
        </div>
        <div className="flex gap-5 text-lg lg:gap-10">
          <p className="font-semibold">[06] Tech Stack:</p>
          <ul>
            <li>
              <LinkPreview
                url="https://shadcnblocks.com"
                className="opacity-40 hover:opacity-100"
              >
                ShadcnBlocks
              </LinkPreview>
            </li>
            <li>
              <LinkPreview
                url="https://ui.shadcn.com"
                className="opacity-40 hover:opacity-100"
              >
                ShadcnUI
              </LinkPreview>
            </li>
            <li>
              <LinkPreview
                url="https://tailwindcss.com"
                className="opacity-40 hover:opacity-100"
              >
                TailwindCSS
              </LinkPreview>
            </li>
            <li>
              <LinkPreview
                url="https://www.framer.com/motion"
                className="opacity-40 hover:opacity-100"
              >
                FramerMotion
              </LinkPreview>
            </li>
            <li>
              <LinkPreview
                url="https://nextjs.org"
                className="opacity-40 hover:opacity-100"
              >
                NextJS
              </LinkPreview>
            </li>
            <li>
              <LinkPreview
                url="https://www.typescriptlang.org"
                className="opacity-40 hover:opacity-100"
              >
                TypeScript
              </LinkPreview>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Feature289 };
