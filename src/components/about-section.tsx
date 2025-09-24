"use client";

import Image from "next/image";
import { TimeComponent } from "./time-component";
import { WeatherComponent } from "./weather-component";

export const AboutSection = () => {

  return (
    <section>
      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-6 md:gap-8 h-full">
          <div className="border border-border bg-card p-4 md:p-6">
            <div className="flex items-start gap-4">
              <div className="relative mr-3 flex-shrink-0">
                <div className="size-18 overflow-hidden border border-border bg-muted">
                  <Image 
                    src="/profile-reserban.png" 
                    alt="Serban Alex" 
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <a 
                  href="https://unzet.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute -bottom-2.5 -right-2 size-8bg-black border border-border overflow-hidden cursor-pointer"
                >
                  <Image 
                    src="/profile-unzet.png" 
                    alt="Unzet Logo" 
                    width={32}
                    height={32}
                    className="object-cover w-full h-full"
                  />
                </a>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg text-foreground mb-1">Serban Alex</h3>
                <p className="text-sm text-muted-foreground">Founder, Unzet & Head of Martech/Sidekick, The Conqueror</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <TimeComponent />
            <WeatherComponent />
          </div>
        </div>
        
        <div className="border border-border bg-card p-4 md:p-6">
          <div className="space-y-5 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Strategic Support:</strong> I work side-by-side with teams to cut through the noise and keep things moving. Whether it’s automation, research, or just clearing roadblocks, I&apos;ll do my best.
            </p>
            <p>
              <strong className="text-foreground">Product Translation:</strong> I speak “management” “dev” and “design” making sure everyone’s talking the same language so good ideas actually ship faster.
            </p>
            <p>
              <strong className="text-foreground">Embracing Chaos:</strong> The best answers usually come out of messy problems. I’m comfortable in the uncertainty and help turn that chaos into clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
