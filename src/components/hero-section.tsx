import { Search } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="text-center">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-card px-5.5 py-2 text-2xl font-semibold">
        <Search className="size-5.5 text-white/80" />
        re<span className=" text-accent -ml-1.5 -mr-1.5">://</span>serban
      </div>
      
      <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-7xl">
        <span className="text-accent">
          Serban Alex
        </span>
      </h1>
      
      <p className="mx-auto mb-10 max-w-3xl text-md md:text-xl">
        A hardware prototype of efficiency: does more with less. Runs on curiosity and selective focus. 
        Optimized for high-output bursts, minimal effort, and maximum creativity.
      </p>
    </section>
  );
};
