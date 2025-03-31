import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="relative">
      <div className="absolute -top-12 right-0 hover:scale-105 lg:mr-60 lg:mt-24 mt-60 mr-4 rotate-12 transition-all duration-500 w-20 h-20 md:w-28 md:h-28 z-10">
        <Link
          href="https://logofork.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logofork.png"
            alt="Logo Fork Sticker"
            width={96}
            height={96}
            className="w-full h-full object-contain"
          />
        </Link>
      </div>
      <section className="bg-res-500 md:rounded-full px-8 py-12 sm:py-16 lg:py-24 mb-12 md:mb-20 md:mt-12 md:mx-28">
        <div className="container-none mx-auto max-w-[56rem]">
          <div className="flex flex-col items-center text-center px-4 sm:px-6">
            <div className="mb-4 flex items-center rounded-full bg-white px-2 py-1.5 shadow-md">
              <Avatar className="size-8 sm:size-10 bg-res-50 shadow-sm">
                <AvatarImage src="/avatar3.png" alt="Avatar 3" />
                <AvatarFallback>SU</AvatarFallback>
              </Avatar>
              <Avatar className="-ml-3 size-8 sm:size-10 bg-res-50 shadow-sm">
                <AvatarImage src="/avatar2.png" alt="Avatar 2" />
                <AvatarFallback>SU</AvatarFallback>
              </Avatar>
              <Avatar className="-ml-3 size-8 sm:size-10 bg-res-50 shadow-sm">
                <AvatarImage src="/avatar1.png" alt="Avatar 1" />
                <AvatarFallback>SU</AvatarFallback>
              </Avatar>
              <div className="mx-2 text-sm sm:text-md text-black/60 font-medium">
                Trusted by cool founders
              </div>
            </div>
            <p className="max-w-4xl text-lg sm:text-xl lg:text-3xl font-medium text-white">
              &ldquo;Serban just gets it. Helped us cut through the noise and
              focus. No corporate BS, just practical advice.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
