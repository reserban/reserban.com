"use client";

import { MenuIcon, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
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

  useEffect(() => {
    setIsSheetOpen(false);
  }, []);

  return (
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
                    <Link
                      href="https://logofork.com"
                      className={`${navigationMenuTriggerStyle()} flex items-center`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Logofork
                      <ExternalLink className="w-3.5 h-3.5 ml-1 hidden hover:inline-block" />
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href="https://drive.google.com/file/d/1oIcpO2xojkqtmzBFQQmnz3U0VRT0lVPy/view?usp=sharing"
                      className={`${navigationMenuTriggerStyle()} flex items-center`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                      <ExternalLink className="w-3.5 h-3.5 ml-1 hidden hover:inline-block" />
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
                    <span className=" text-xl font-bold">re://</span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col text-black/50">
                <div className="flex flex-col gap-6 pt-5">
                  <a
                    href="https://logofork.com"
                    className="font-medium flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Logofork
                    <ExternalLink className="w-3.5 h-3.5 ml-1 hidden hover:inline-block" />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1oIcpO2xojkqtmzBFQQmnz3U0VRT0lVPy/view?usp=sharing"
                    className="font-medium flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                    <ExternalLink className="w-3.5 h-3.5 ml-1 hidden hover:inline-block" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
