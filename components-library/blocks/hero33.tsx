import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero33 = () => {
  return (
    <section>
      <div className="lg:container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="container flex flex-col items-center py-12 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
            <p>New Release</p>
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
              Welcome to Our Website
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="mb-24 flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto">
                Primary
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Secondary
              </Button>
            </div>
            <div className="rounded border border-border px-8 py-6">
              <p className="mb-2 text-xl font-medium">Now starting at</p>
              <div className="mb-4 flex items-baseline justify-center lg:justify-start">
                <div className="text-4xl font-bold lg:text-6xl">$99</div>
                <div className="text-xl leading-none font-bold lg:text-2xl lg:leading-none">
                  /user
                </div>
              </div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero33 };
