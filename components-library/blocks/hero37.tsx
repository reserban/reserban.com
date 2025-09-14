import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero37 = () => {
  return (
    <section className="overflow-hidden py-32">
      <div className="container flex flex-col items-center text-center">
        <p className="text-xs uppercase">New Release</p>
        <h1 className="my-3 text-2xl font-bold text-pretty sm:text-4xl md:my-6 lg:text-5xl">
          Welcome to Our Website
        </h1>
        <p className="mb-6 max-w-xl text-muted-foreground md:mb-12 lg:text-xl">
          Elig doloremque mollitia fugiat omnis! Porro facilis quo animi
          consequatur.
        </p>
        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
          <Button className="w-full sm:w-auto">
            <ArrowRight className="mr-2 size-4" />
            Primary
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            Secondary
          </Button>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center lg:mt-32">
        <div className="b relative mx-auto aspect-square w-[95%] max-w-[31.25rem] sm:w-full">
          <div className="absolute inset-x-1/2 top-full z-0 flex w-[120rem] -translate-x-1/2 -translate-y-[4rem] md:-translate-y-[2rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 800 800"
              className="h-full w-full text-muted-foreground opacity-20"
            >
              {Array.from(Array(4000).keys()).map((dot, index, array) => {
                const angle = 0.2 * index;
                const scalar = 300 + index * (100 / array.length);
                const x = Math.round(Math.cos(angle) * scalar);
                const y = Math.round(Math.sin(angle) * scalar);
                return (
                  <circle
                    key={index}
                    r={1}
                    cx={400 + x}
                    cy={400 + y}
                    fill="currentColor"
                    opacity={(array.length - index) / array.length}
                  />
                );
              })}
            </svg>
          </div>
          <div className="absolute inset-0 z-5 m-auto flex aspect-29/36 w-4/5 max-w-[16rem] translate-x-[-75%] translate-y-[10%] scale-[0.85] rotate-[-15deg] justify-center rounded-lg border border-border bg-accent opacity-60 md:w-[21.25rem] md:max-w-[21.25rem]"></div>
          <div className="absolute inset-0 z-10 m-auto flex aspect-29/36 w-4/5 max-w-[16rem] justify-center rounded-lg border border-border bg-accent md:w-[21.25rem] md:max-w-[21.25rem]"></div>
          <div className="absolute inset-0 z-5 m-auto flex aspect-29/36 w-4/5 max-w-[16rem] translate-x-[75%] translate-y-[10%] scale-[0.85] rotate-[15deg] justify-center rounded-lg border border-border bg-accent opacity-60 md:w-[21.25rem] md:max-w-[21.25rem]"></div>
        </div>
      </div>
    </section>
  );
};

export { Hero37 };
