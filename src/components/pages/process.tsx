"use client";

import { MapPin, Hammer, Paintbrush, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const integrations = [
  {
    image: "/step1.png",
    mobileImage: "/step1-m.png",
    logo: <MapPin className="h-5 w-5" />,
    title: "Map",
    description:
      "Figure out what makes your startup tick and where you're hitting walls. Spot the hidden opportunities that others miss and chart a path that feels right for you.",
  },
  {
    image: "/step2.png",
    mobileImage: "/step2-m.png",
    logo: <Hammer className="h-5 w-5" />,
    title: "Execute",
    description:
      "Roll up my sleeves with you and turn those roadblocks into clear milestones to keep momentum going even when things get tough.",
  },
  {
    image: "/step3.png",
    mobileImage: "/step3-m.png",
    logo: <Paintbrush className="h-5 w-5" />,
    title: "Shape",
    description:
      "Help you craft your offering until it resonates deeply with the people who need it most. Polish your product, messaging, and user experience until they shine with purpose.",
  },
  {
    image: "/step4.png",
    mobileImage: "/step4-m.png",
    logo: <BarChart3 className="h-5 w-5" />,
    title: "Scale",
    description:
      "I've been down this road before and can help you dodge the typical growth pains. Whether it's finding cash, building your crew, or keeping your sanity - I've got your back.",
  },
];

const Process = () => {
  const [cardNumber, setCardNumber] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <section className="pt-12 pb-20">
      <div className="container-none mx-auto max-w-[56rem] px-6 md:px-0">
        <div className="mb-6 max-w-lg md:mx-auto md:text-center">
          <h1 className="mb-2 md:text-4xl text-3xl text-res-500 font-bold">
            My Process is a MESS!
          </h1>
          <h3 className="text-lg text-black/50 font-medium">
            I tackle startup challenges head-on, I&apos;m here to help you
            navigate the messy parts.
          </h3>
        </div>
        <Tabs className="relative" defaultValue="0">
          <TabsList className="mb-10 md:mb-4 grid md:mx-4  grid-cols-2 gap-x-2.5 gap-y-3 md:gap-y-2 bg-transparent p-0 lg:grid-cols-4">
            {integrations.map((item, index) => (
              <TabsTrigger
                key={index}
                value={index.toString()}
                onClick={() => setCardNumber(index)}
                className={`${
                  index === cardNumber
                    ? "bg-res-100 text-res-500"
                    : "bg-gray-50 text-gray-400"
                } block cursor-pointer whitespace-normal border rounded-full border-res-100 px-3 py-2 text-center transition-all duration-300 hover:bg-res-50 data-[state=active]:shadow-sm`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span
                    className={`${
                      index === cardNumber ? "text-res-500" : "text-gray-400"
                    }`}
                  >
                    {item.logo}
                  </span>
                  <h4
                    className={`text-lg font-semibold leading-tight ${
                      index === cardNumber ? "text-black/80" : "text-gray-400"
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="rounded-3xl rotate-[0.25deg] border border-res-100 shadow-lg border-opacity-100 px-4 pt-8 sm:px-2 sm:pt-6 relative mt-20 lg:mt-2">
            <div className="absolute -bottom-7 -left-7 w-14 h-14 z-10 rounded-3xl">
              <Image
                src="/shot.svg"
                alt="Shot icon"
                width={64}
                height={64}
                className="transform"
              />
            </div>

            <div className="mx-2 md:mx-4 px-4 py-3 mb-4 -mt-1 bg-res-50 rounded-xl">
              <p className="text-md font-medium text-black/50">
                {integrations[cardNumber].description}
              </p>
            </div>

            <div className="p-1 pb-5 md:pb-4">
              {integrations.map((item, index) => (
                <TabsContent
                  value={index.toString()}
                  key={index}
                  className="m-0"
                >
                  <div
                    className="overflow-hidden -mt-1 rounded-2xl relative w-full"
                    style={{
                      aspectRatio: isMobile ? "4/3" : "16/9",
                      minHeight: isMobile ? "250px" : "auto",
                    }}
                  >
                    <Image
                      src={isMobile ? item.mobileImage : item.image}
                      alt={`${item.title} illustration`}
                      fill
                      className="object-cover rounded-xl md:rounded-2xl mt-1 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 56rem"
                      priority={index === 0}
                    />
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Process;
