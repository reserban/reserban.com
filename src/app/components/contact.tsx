"use client";

import { CalendarDays, ChevronRight, Mail, PanelLeft } from "lucide-react";
import {
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
  MastodonLogo,
} from "@phosphor-icons/react";
import Image from "next/image";

import { useState } from "react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/reserban/",
    icon: LinkedinLogo,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/reserban",
    icon: XLogo,
    label: "X (formerly Twitter)",
  },
  {
    href: "https://fosstodon.org/@reserban",
    icon: MastodonLogo,
    label: "Mastodon",
  },
  {
    href: "https://www.youtube.com/@reserban",
    icon: YoutubeLogo,
    label: "YouTube",
  },
];

const contactLinks = [
  {
    href: "https://cal.com/unzetnow/talk",
    title: "Book a call with me directly",
    description: "Choose a date and set a google meet in a calcom calendar.",
    icon: CalendarDays,
  },
  {
    href: "mailto:alex@reserban.com?subject=Design%20Services%20Inquiry&body=%2F%2F%20Feel%20free%20to%20delete%20this%20template%20and%20write%20your%20own%20message%20below.%0D%0A%0D%0AHere%20are%20some%20details%20about%20my%20project%3A%0D%0A%0D%0A1.%20Project%20type%20(e.g.%2C%20web%20design%2C%20product%20design)%3A%20%0D%0A2.%20Project%20scope%20(e.g.%2C%20number%20of%20pages%20or%20features)%3A%20%0D%0A3.%20Deadline%3A%20%0D%0A4.%20Budget%3A%20%0D%0A5.%20Any%20specific%20requirements%20or%20references%3A%20%0D%0A%0D%0A",
    title: "Email me about design services",
    description: "Tell me which design needs you have in a short mail.",
    icon: Mail,
  },
  {
    href: "https://forms.gle/rdKaEjfYXkho8coZ7",
    title: "Fill a form with partner request",
    description: "Explain me your great startup idea in a google form.",
    icon: PanelLeft,
  },
];

export default function Contact() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <section className=" pb-8 sm:pt-4 sm:pb-6">
      <div className="max-w-screen-md px-4 mx-auto sm:px-6 lg:px-0 container-none">
        <div className="relative h-[220px] mb-6 sm:mb-6">
          <Image
            src="https://framerusercontent.com/images/Ki1TM0OO0hOIUG0IXZRKVHlUzng.png?scale-down-to=2048"
            alt="Contact Me Banner"
            layout="fill"
            objectFit="cover"
            className="z-10"
          />
        </div>
        <div className="flex flex-col h-full">
          <div className="flex flex-col justify-between flex-1 h-full gap-4">
            <div>
              <h1 className="mb-1 text-2xl font-medium sm:text-3xl">
                Let&apos;s build together
              </h1>
              <p className="leading-normal text-md sm:text-xl text-black/50">
                Thanks for reaching out! I offer a wide range of products and
                services - take a look at the options below. I can’t wait to
                work together!
              </p>
            </div>
            <div className="flex flex-col justify-between gap-4">
              <div className="flex flex-col items-start justify-between gap-3 px-3 py-3 sm:px-2 sm:flex-row sm:items-center bg-background">
                <div className="flex flex-col justify-start flex-1 ">
                  <h2
                    className={`font-medium relative inline-block w-fit ${
                      hoveredSocial ? "after:w-full" : "after:w-0"
                    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-current after:transition-all after:duration-700 text-lg`}
                  >
                    Find me on social media
                  </h2>
                  <p className="text-md text-black/50">
                    See a live version of what I am up to.
                  </p>
                </div>
                <ul className="flex items-center mt-2 mr-1.5 space-x-6 text-primary sm:mt-0">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <li
                      key={href}
                      className="font-medium transition-all duration-500"
                    >
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="block p-1 transition-all duration-500 translate-x-0 hover:translate-x-0.5 hover:text-primary hover:opacity-70"
                        onMouseEnter={() => {
                          setHoveredSocial(null);
                          setHoveredSocial(href);
                        }}
                        onMouseLeave={() => setHoveredSocial(null)}
                      >
                        <Icon className="size-6 sm:size-7" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {contactLinks.map(({ href, title, description, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="flex flex-col items-start justify-between gap-3 px-3 py-3 sm:px-2 group sm:flex-row sm:items-center bg-background"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col justify-start flex-1">
                    <h2 className="font-medium transition-all text-lg duration-700 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-current after:transition-all after:duration-700 after:w-0 group-hover:after:w-full w-fit">
                      {title}
                    </h2>
                    <p className="text-md text-black/50">{description}</p>
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <Icon className="mr-2 sm:mr-1.5 size-5 sm:size-6 group-hover:text-primary group-hover:opacity-70 transition-all duration-500" />
                    <ChevronRight
                      className="transition-all size-5 sm:size-6 duration-500 group-hover:text-primary group-hover:opacity-70 translate-x-0 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
