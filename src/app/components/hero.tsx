"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative pt-2 pb-8 lg:pt-8 lg:pb-24">
      <div className="absolute inset-x-0 top-0 hidden h-full px-4 overflow-hidden container-none lg:block">
        <div className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1400 540"
            className="-mx-[theme(container.padding)] w-[calc(100%+2*theme(container.padding))]"
          >
            <defs>
              <radialGradient id="text-backgroud" cx="50%" cy="50%" r={0.6}>
                <stop stopColor="black" offset={0.4} />
                <stop stopColor="black" offset={1} stopOpacity={0} />
              </radialGradient>
              <linearGradient id="icon-backgroud" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="hsl(var(--accent))" offset={0} />
                <stop stopColor="hsl(var(--background))" offset={0.6} />
              </linearGradient>
              <mask id="mask">
                <rect
                  x="80"
                  y="40"
                  width="1260"
                  height="276"
                  rx="140"
                  stroke="none"
                  filter="url(#blur)"
                  fill="white"
                />
                <rect
                  x="40"
                  y="-120"
                  width="1320"
                  height="440"
                  stroke="none"
                  fill="url(#text-backgroud)"
                />
              </mask>
              <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="120" />
              </filter>
            </defs>
            <path
              stroke="hsl(var(--border))"
              strokeWidth={1}
              d="M0,40H1400M0,120H1400M0,200H1400M0,280H1400M0,0V360M60,0V360M140,0V360M220,0V360M300,0V360M380,0V360M460,0V360M540,0V360M620,0V360M700,0V360M780,0V360M860,0V360M940,0V360M1020,0V360M1100,0V360M1180,0V360M1260,0V360M1340,0V360"
              mask="url(#mask)"
            />
            <rect
              x={140}
              y={120}
              width={80}
              height={80}
              stroke="hsl(var(--border)/0.5)"
              fill="url(#icon-backgroud)"
            />
            <image
              className="opacity-75"
              href="https://framerusercontent.com/images/JHD3OZwYogTBqE77h91cpj8j6Q.svg"
              x={160}
              y={140}
              width={40}
              height={40}
            />
            <rect
              x={1180}
              y={40}
              width={80}
              height={80}
              stroke="hsl(var(--border)/0.5)"
              fill="url(#icon-backgroud)"
            />
            <image
              className="opacity-75"
              href="https://framerusercontent.com/images/AnsurbbbDLlNs2SN2leVS0Dog4A.svg"
              x={1200}
              y={60}
              width={40}
              height={40}
            />
          </svg>
        </div>
      </div>
      <div className="relative flex flex-col items-center px-2 text-center container-none">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 mx-auto mb-5 opacity-75 sm:mb-4 group"
        >
          <Badge variant="outline">
            Open For Work{" "}
            <ChevronRight className="-mr-1 group-hover:translate-x-0.5 translate-x-0 transition-all duration-500 size-4" />
          </Badge>
        </Link>
        <h1 className="max-w-3xl mx-3 mb-3 text-2xl font-medium leading-normal text-gray-900 lg:mb-5 lg:text-3xl sm:text-2xl">
          I&apos;m Șerban
          <Image
            src="https://framerusercontent.com/images/XFiD9AIBn4G5s8XbsVCZAEcK0Sw.png?scale-down-to=2048"
            alt="Serban"
            width={120}
            height={120}
            className="inline-block align-text-bottom -translate-y-1 sm:-translate-y-1.5 lg:-translate-y-2 ml-1.5 mr-0.5 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 transition-transform hover:scale-125 origin-bottom duration-500"
            priority
          />
          a visual & product designer with a real passion for technology and
          startups.
        </h1>
        <div>
          <Button
            variant="link"
            asChild
            size="small"
            className="relative text-black/60 text-md lg:text-lg after:content-[''] after:absolute after:left-0 after:bottom-[1px] after:h-[1px] after:bg-current after:transition-all after:duration-500 after:w-0 hover:after:w-full"
          >
            <Link href="/about">more about me...</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
