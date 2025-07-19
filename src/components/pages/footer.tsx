import { Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: () => <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/reserban/",
  },
  {
    icon: () => <Mail size={20} />,
    href: "mailto:alexreserban@gmail.com",
  },
];

const Footer = () => {
  return (
    <section className="bg-res-500 pb-4 pt-6 md:pt-4 px-6 md:px-0 -mt-12 md:mt-0 rounded-t-[5rem] sm:rounded-t-[8rem] xl:rounded-t-[20rem] text-primary-foreground">
      <div className="container-none mx-auto max-w-[56rem]">
        <footer>
          <div className="flex flex-col items-center pt-10 pb-12 text-center md:py-12 lg:pt-16 lg:pb-12">
            <div className="relative flex justify-center">
              <Avatar className="absolute left-1/2 shadow-md -translate-x-[160%] p-0.5 bg-res-50 mb-4 h-16 w-16 origin-bottom scale-[80%] md:mb-5">
                <AvatarImage src="/avatar1.png" alt="Avatar 1" />
                <AvatarFallback>Fd</AvatarFallback>
              </Avatar>
              <Avatar className="relative shadow-md mb-4 h-16 w-16 md:mb-5 p-0.5 bg-res-50">
                <AvatarImage src="/avatar2.png" alt="Avatar 2" />
                <AvatarFallback>FD</AvatarFallback>
              </Avatar>
              <Avatar className="absolute left-1/2 shadow-md translate-x-[60%] p-0.5 bg-res-50 mb-4 h-16 w-16 origin-bottom scale-[80%] md:mb-5">
                <AvatarImage src="/avatar3.png" alt="Avatar 3" />
                <AvatarFallback>FD</AvatarFallback>
              </Avatar>
              <div className="absolute right-7 top-10 translate-x-[120%] w-10 h-10 z-10">
                <Image
                  src="/copy.svg"
                  alt="Copy icon"
                  width={64}
                  height={64}
                  className="transform"
                />
              </div>
            </div>
            <h2 className="max-w-[48rem] text-4xl mt-4 md:mt-2 font-semibold lg:text-6xl">
              I know the struggle, I&apos;m also a builder!
            </h2>
            <div className="flex flex-col items-center gap-4 mt-8 relative">
              <div className="absolute bottom-0 mb-72 md:mb-64 -rotate-12 md:mr-64 mr-40 right-0 hover:scale-105 transition-all duration-500 w-20 h-20 md:w-24 md:h-24 transform translate-x-4 translate-y-4">
                <Link
                  href="https://rundevelop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/rundevelop.png"
                    alt="Rundevelop logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </Link>
              </div>
              <Button
                asChild
                variant="secondary"
                size="xl"
                className="rounded-full -mt-1"
              >
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0fM_19AnjyTezARAud4h0n96blUyRv5XPe2uUCDxuxU6wx-IVJVWB-aUDn2iYL1DaYfQmVIvPz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Need a Sidekick?
                </a>
              </Button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mx-auto pt-6 pb-4 sm:py-6">
            <div className="flex flex-wrap items-center justify-between gap-1.5">
              <p className="font-medium text-res-100">
                © {new Date().getFullYear()} I reserban
              </p>
              <div className="flex items-center gap-6">
                {socialLinks.map((link) => (
                  <a
                    aria-label={link.href}
                    key={link.href}
                    href={link.href}
                    className="hover:text-black text-res-100"
                  >
                    {link.icon()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
