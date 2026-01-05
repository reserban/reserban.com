"use client";

import { MenuIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
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
import { buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    setIsSheetOpen(false);
  }, []);

  return (
    <section className="pb-4 pt-2 sm:py-4">
      <div className="px-4 sm:px-6 container-none">
        <nav className="flex items-center justify-between">
          <div className="flex justify-between flex-grow">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://framerusercontent.com/images/mnIaigd2sSxvh0WkH5GGslIXII4.svg"
                  alt="Logo"
                  className="h-6 w-32 sm:h-8 sm:w-40"
                  width={400}
                  height={72}
                />
              </Link>
            </div>
            <div className="flex justify-center flex-grow lg:justify-end">
              <NavigationMenu className="hidden mr-4 lg:block">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="https://logofork.com"
                      className={navigationMenuTriggerStyle()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Logofork
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/about"
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="items-center hidden gap-4 lg:flex">
            <Link
              href="/contact"
              className={buttonVariants({ variant: "default" })}
            >
              Contact
            </Link>
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
              <div className="flex flex-col">
                <div className="flex flex-col gap-6 pt-5">
                  <a
                    href="https://logofork.com"
                    className="font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Logofork
                  </a>
                  <Link href="/about" className="font-medium">
                    About
                  </Link>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                  <Link
                    href="/contact"
                    className={buttonVariants({ variant: "default" })}
                  >
                    Contact
                  </Link>
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
