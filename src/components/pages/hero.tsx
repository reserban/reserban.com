"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative pt-2 pb-8 sm:pt-6 lg:pt-4 sm:pb-20 lg:pb-24">
      <div className="relative flex flex-col items-center px-2 text-center container-none">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 mx-auto mb-5 opacity-75 sm:mb-4 group"
        >
          <Badge variant="outline" className="py-2">
            Open For Work{" "}
            <ChevronRight className="-mr-1 group-hover:translate-x-0.5 translate-x-0 transition-all duration-500 size-4" />
          </Badge>
        </Link>
        <h1 className="max-w-3xl mx-3 mb-3 text-2xl font-medium leading-normal text-gray-900 lg:mb-5 lg:text-3xl sm:text-2xl">
          I&apos;m Șerban
          <Image
            src="https://framerusercontent.com/images/gNuoh3a55uuwTgMsuPufqJqBDc.png?scale-down-to=2048"
            alt="Serban"
            width={120}
            height={120}
            className="inline-block align-text-bottom -translate-y-1 sm:-translate-y-1.5 lg:-translate-y-2 ml-1 mr-0.5 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 transition-transform hover:scale-125 origin-bottom duration-500"
            priority
          />
          a visual & product designer with a real passion for technology and
          startups.
        </h1>
        <div>
          <Link
            href="/about"
            className="relative font-medium text-black/60 text-md lg:text-lg after:content-[''] after:absolute after:left-0 after:bottom-[1px] after:h-[1px] after:bg-current after:transition-all after:duration-500 after:w-0 hover:after:w-full"
          >
            more about me...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
