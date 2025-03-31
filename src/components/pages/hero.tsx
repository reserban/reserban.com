import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-6 pb-12 px-6 md:px-0 font-sans">
      <div className="container-none mx-auto max-w-[56rem] relative justify-center">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          <div className="flex flex-col gap-4 -mt-6 sm:mx-auto sm:max-w-[32rem] md:max-w-[40rem] lg:mx-0 lg:max-w-none">
            <h1 className="text-5xl font-semibold xl:text-6xl">
              Solving Startup Problems While{" "}
              <span className="text-res-500"> Chewing Gum</span>
            </h1>
            <p className="text-xl ml-1 mb-2 font-medium leading-snug text-black/50">
              I help founders cut through the noise, stay focused, and move with
              purpose: early-stage growth, product clarity, and founder
              momentum.
            </p>
            <Button
              asChild
              variant="default"
              size="sm"
              className="block h-fit w-fit rounded-full text-sm px-6 py-2 font-semibold leading-loose "
            >
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0fM_19AnjyTezARAud4h0n96blUyRv5XPe2uUCDxuxU6wx-IVJVWB-aUDn2iYL1DaYfQmVIvPz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virtual Coffee Call?
              </a>
            </Button>
          </div>
          <div className="justify-self-center lg:justify-self-end">
            <div className="relative flex aspect-[0.955145119_/_1] sm:-mr-36 lg:mr-0 mt-10 lg:mt-0 flex-col rounded-2xl border border-res-100 bg-white p-3 shadow-lg w-[90vw] sm:w-[22.625rem] rotate-[0.5deg] md:rotate-[0.8deg]">
              <div className="absolute -top-7 right-4 w-18 h-18 z-10">
                <Image
                  src="/hand.svg"
                  alt="Hand cursor"
                  width={64}
                  height={64}
                  className="transform rotate-12"
                />
              </div>
              <AspectRatio
                ratio={1 / 1}
                className="w-full overflow-hidden rounded-xl bg-muted group"
              >
                <Image
                  src="/reserban-photo.png"
                  alt="Reserban Photo"
                  fill
                  className="block object-cover object-center transition-opacity duration-300 md:group-hover:opacity-0"
                  sizes="(max-width: 768px) 100vw, 362px"
                />
                <Image
                  src="/reserban-photo-mask.png"
                  alt="Reserban Photo with Balaclava"
                  fill
                  className="hidden object-cover object-center opacity-0 transition-opacity duration-300 md:block md:group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 362px"
                />
              </AspectRatio>
              <div className="m-auto flex w-full items-center justify-center">
                <div className="flex items-center gap-1 mt-3 rounded-md px-2">
                  <p className="text-sm z-20 font-medium text-center text-black/40 sm:text-sm">
                    &quot;Yea this is me, but vectorized&quot;
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

export default Hero;
