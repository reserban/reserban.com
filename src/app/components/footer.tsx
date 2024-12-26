"use client";

import {
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
  MastodonLogo,
} from "@phosphor-icons/react";

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

const Footer = () => {
  return (
    <footer className="bg-background pt-2 sm:pt-0">
      <div className="container-none mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center">
          <div className="text-[2rem] sm:text-[6rem] xl:text-[11rem] xl:-mb-10 xl:-mt-4">
            reserban.com
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pb-4 text-lg md:flex-row">
          <a
            className="relative transition-all duration-500 text-md hover:text-primary hover:opacity-70 after:content-[''] after:absolute after:left-0 after:bottom-[1px] after:h-[1px] after:bg-current after:transition-all after:duration-500 after:w-0 hover:after:w-full"
            href="mailto:alex@reserban.com"
          >
            alex@reserban.com
          </a>

          <ul className="flex items-center space-x-6 text-primary">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <li
                key={href}
                className="font-medium transition-all duration-500 translate-x-0 hover:translate-x-0.5 hover:text-primary hover:opacity-70"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <div className="text-md">
            built by alex serban © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
