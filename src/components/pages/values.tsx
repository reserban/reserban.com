"use client";

import Image from "next/image";
import Link from "next/link";

const integrations = [
  {
    title: "Startup Sidekick",
    description:
      "Whether it's design, strategy, research or just figuring stuff out, I've got your back trough the startup wild ride and founder mode.",
    buttonTitle: "Learn More",
  },
  {
    title: "Bridging Dev & Design",
    description:
      "I translate stuff between devs and designers, smoothing out the process so ideas come to life as functional, beautiful products.",
    buttonTitle: "Get Started",
  },
];

const Values = () => {
  return (
    <section className="py-8 md:py-16 px-6 md:px-0">
      <div className="grid py-4 md:py-0 container-none pl-6 rotate-[-0.2deg] shadow-lg border border-res-100 rounded-3xl mx-auto max-w-[56rem] grid-cols-1 md:grid-cols-2 relative">
        {integrations.map((item, index) => (
          <div
            key={index}
            className={`relative flex ${
              index === 0 ? "lg:justify-center" : "lg:justify-start"
            } items-center justify-start py-5 md:py-10 px-2 pr-8 md:pr-0`}
          >
            <div className="flex max-w-sm flex-col items-start justify-center gap-5 md:gap-10">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium text-res-500">
                  {item.title}
                </h1>
                <p className="text-md font-medium -mt-0.5 text-black/50">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-0 right-0 w-20 h-20 -mb-4 md:mb-0 md:-mr-10 md:w-24 md:h-24 rotate-12 transform translate-x-4 translate-y-4 hover:scale-105 transition-all duration-500">
          <Link
            href="https://earlyraven.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/earlyraven.png"
              alt="Early Raven Sticker"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Values;
