"use client";

import { Dice6, MapPin, Power } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="pb-8 sm:pt-4">
      <div className="container-none mx-auto max-w-screen-md px-4 sm:px-0">
        <div className="relative grid-cols-1 gap-20 lg:grid">
          <div className="lg:col-span-1">
            <div className="relative h-[220px] mb-6 sm:mb-6">
              <Image
                src="https://framerusercontent.com/images/eLJQffQcNp8Y3Mf9OnAGSkvCM.png?scale-down-to=2048"
                alt="Contact Me Banner"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover z-10"
              />
            </div>
            <div className="mb-6">
              <h1 className="mb-1 text-2xl font-medium sm:text-3xl">
                From 0 to 1
              </h1>
              <p className="leading-normal text-md sm:text-xl text-black/50">
                I began my pro design career in 2020 and have been through a lot
                of phases since. These days, I’m all about the tech world,
                designing and building useful products. I’m passionate about
                flat design and the impact of minimalist work.
              </p>
            </div>

            <div className="ml-3.5">
              <div className="relative flex items-start pb-7">
                <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                <div className="absolute ml-[-14px] py-2">
                  <div className="flex items-center justify-center size-7 shrink-0">
                    <Power className="size-6" />
                  </div>
                </div>
                <div className="pl-8">
                  <h3 className="mt-2 text-lg font-medium">
                    2024 - Power of Launching
                  </h3>
                  <p className="text-black/50">
                    After working with a bunch of founders, I decided to dive
                    into building products myself. That&apos;s how I started
                    creating{" "}
                    <a
                      href="https://logofork.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/60 relative after:content-[''] after:absolute after:left-0 after:bottom-[1px] after:h-[1px] after:bg-current after:transition-all after:duration-500 after:w-0 hover:after:w-full"
                    >
                      Logofork
                    </a>{" "}
                    and other tools to tackle problems, all under Unzet venture
                    studio.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start pb-7">
                <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                <div className="absolute ml-[-14px] py-2">
                  <div className="flex items-center justify-center size-7 shrink-0">
                    <Dice6 className="size-5" />
                  </div>
                </div>
                <div className="pl-8">
                  <h3 className="mt-2 text-lg font-medium">
                    2022 - Name in the Game
                  </h3>
                  <p className="text-black/50">
                    I launched my first business Takameru, an agency centered on
                    design storytelling and branding. It later evolved into
                    Blureo, which I exited a year later.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start pb-2">
                <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                <div className="absolute ml-[-14px] py-2">
                  <div className="flex items-center justify-center size-7 shrink-0">
                    <MapPin className="size-5" />
                  </div>
                </div>
                <div className="pl-8">
                  <h3 className="mt-2 text-lg font-medium">
                    2020 - Jack of all Design
                  </h3>
                  <p className="text-black/50">
                    Early on, I took on every project I could find, which gave
                    me tons of hands-on experience in industries beyond tech -
                    like consulting, fashion, nutrition, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
