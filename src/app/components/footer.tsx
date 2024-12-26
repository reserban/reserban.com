"use client";

import {
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
  MastodonLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <section>
      <div className="px-4 sm:px-6 container-none">
        <footer>
          <div className="flex items-center justify-center">
            <div className="text-[2rem] sm:text-[6rem] xl:text-[11rem] xl:-mb-8 mb-1 mt-4 sm:mt-0">
              reserban.com
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 pb-4 text-lg md:flex-row">
            <a
              className="transition-all duration-500 text-md hover:text-primary hover:opacity-70"
              href="mailto:alex@reserban.com"
            >
              alex@reserban.com
            </a>

            <ul className="flex items-center space-x-6 text-primary">
              <li className="font-medium transition-all duration-500 translate-x-0 hover:translate-x-0.5 hover:text-primary hover:opacity-70 ">
                <a
                  href="https://www.linkedin.com/in/reserban/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinLogo className="w-6 h-6" />
                </a>
              </li>
              <li className="font-medium transition-all duration-500 translate-x-0 hover:translate-x-0.5 hover:text-primary hover:opacity-70 ">
                <a
                  href="https://x.com/reserban"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XLogo className="w-6 h-6" />
                </a>
              </li>
              <li className="font-medium transition-all duration-500 translate-x-0 hover:translate-x-0.5 hover:text-primary hover:opacity-70 ">
                <a
                  href="https://fosstodon.org/@reserban"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MastodonLogo className="w-6 h-6" />
                </a>
              </li>
              <li className="font-medium transition-all duration-500 translate-x-0 hover:translate-x-0.5 hover:text-primary hover:opacity-70 ">
                <a
                  href="https://www.youtube.com/@reserban"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeLogo className="w-6 h-6" />
                </a>
              </li>
            </ul>
            <div className="text-md">
              built by alex serban © {new Date().getFullYear()}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
