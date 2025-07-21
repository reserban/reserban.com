import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonial = () => {
  return (
    <div className="relative">
      <div className="absolute -top-12 right-0 hover:scale-105 lg:mr-60 lg:mt-24 mt-60 mr-4 rotate-12 transition-all duration-500 w-20 h-20 md:w-28 md:h-28 z-10"></div>
      <section className="bg-res-500 md:rounded-full px-8 py-16 sm:py-16 lg:py-16 mb-12 md:mb-20 md:mt-12 md:mx-60">
        <div className="container-none mx-auto max-w-[56rem]">
          <div className="flex flex-col items-center text-center px-4 sm:px-6">
            <div className="mb-4 flex items-center rounded-full bg-white px-3 py-2 shadow-md">
              <Avatar className="size-8 sm:size-10 bg-res-50 shadow-sm">
                <AvatarImage src="/avatar3.png" alt="Avatar 3" />
                <AvatarFallback>FD</AvatarFallback>
              </Avatar>
              <Avatar className="-ml-3 size-8 sm:size-10 bg-res-50 shadow-sm">
                <AvatarImage src="/avatar2.png" alt="Avatar 2" />
                <AvatarFallback>FD</AvatarFallback>
              </Avatar>
              <Avatar className="-ml-3 size-8 sm:size-10 bg-res-50 shadow-sm">
                <AvatarImage src="/avatar1.png" alt="Avatar 1" />
                <AvatarFallback>FD</AvatarFallback>
              </Avatar>
              <div className="mx-2 text-sm sm:text-md text-black/60 font-medium">
                Trusted by C(ool) Suites
              </div>
            </div>
            <p className="max-w-4xl text-lg sm:text-xl mt-2 lg:text-3xl font-medium text-white">
              &ldquo;Serban just gets it. He helped us focus and roll up his
              sleeves - no corporate BS, just hands-on support.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
