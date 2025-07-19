"use client";

import { MenuIcon, ExternalLink, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  useEffect(() => {
    setIsSheetOpen(false);
    setIsProjectsOpen(false);
  }, []);

  return (
    <>
      <div className="bg-res-500 text-white py-3">
        <div className="px-6 container-none mx-auto">
          <p className="text-sm font-medium text-center">
            Sidekick at <b>The Conqueror</b> & Building <b>Sitcom</b>
            <span className="hidden sm:inline"></span>
          </p>
        </div>
      </div>
      <section className="pb-4 pt-2 sm:py-4">
        <div className="px-6 container-none  mx-auto">
          <nav className="flex items-center justify-between">
            <div className="flex justify-between flex-grow">
              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  className="flex items-center relative w-36 sm:w-48 h-8 sm:h-8"
                >
                  <Image
                    src="/logo1.svg"
                    alt="Logo"
                    className="absolute"
                    fill
                    priority
                  />
                </Link>
              </div>
              <div className="flex justify-center flex-grow lg:justify-end">
                <NavigationMenu className="hidden mr-4 lg:block">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4">
                          <li>
                            <a
                              href="https://logofork.com"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="flex items-center">
                                Logofork
                                <ExternalLink className="w-3.5 h-3.5 ml-1" />
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://rundevelop.com"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="flex items-center">
                                Run Develop
                                <ExternalLink className="w-3.5 h-3.5 ml-1" />
                              </div>
                            </a>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link
                        href="/works"
                        className={navigationMenuTriggerStyle()}
                      >
                        Works
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="link" className="p-1">
                  <MenuIcon className="w-4 h-4 text-black" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="max-h-screen overflow-scroll">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-res-500">
                        ://
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col text-black/80">
                  <div className="flex flex-col gap-6 pt-5">
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        className="flex items-center justify-between font-medium text-black/80 hover:text-black transition-colors"
                      >
                        Projects
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isProjectsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isProjectsOpen && (
                        <div className="flex flex-col gap-4 pl-4 mt-2">
                          <a
                            href="https://logofork.com"
                            className="font-medium flex items-center text-black/80 hover:text-black transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Logofork
                            <ExternalLink className="w-3.5 h-3.5 ml-1" />
                          </a>
                          <a
                            href="https://rundevelop.com"
                            className="font-medium flex items-center text-black/80 hover:text-black transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Run Develop
                            <ExternalLink className="w-3.5 h-3.5 ml-1" />
                          </a>
                        </div>
                      )}
                    </div>
                    <Link href="/works" className="font-medium">
                      Works
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
