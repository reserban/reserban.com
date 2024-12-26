"use client";

import { MenuIcon } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
  const features = [
    {
      title: "Unzet",
      description: "New-wave venture studio",
      href: "https://unzet.com",
    },
    {
      title: "Logofork",
      description: "Logo package tool",
      href: "https://logofork.com",
    },
    {
      title: "GPT Privacy",
      description: "AI Anonymization Extension",
      href: "https://l.unzet.com/gptprivacy",
    },
  ];

  const [dropdownPosition, setDropdownPosition] = useState("translate-y-1");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleDropdownPosition = () => {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        if (rect.bottom > window.innerHeight) {
          setDropdownPosition("-translate-y-full");
        } else {
          setDropdownPosition("translate-y-1");
        }
      }
    };

    window.addEventListener("resize", handleDropdownPosition);
    handleDropdownPosition();

    return () => {
      window.removeEventListener("resize", handleDropdownPosition);
    };
  }, []);

  const handleTalkButtonClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <section className="py-4">
      <div className="px-4 sm:px-6 container-none">
        <nav className="flex items-center justify-between">
          <div className="flex justify-between flex-grow">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold md:text-3xl">
                  re://serban
                </span>
              </Link>
            </div>
            <div className="flex justify-center flex-grow lg:justify-end">
              <NavigationMenu className="hidden mr-4 lg:block">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                    <NavigationMenuContent
                      ref={dropdownRef}
                      className={`absolute z-10 ${dropdownPosition}`}
                    >
                      <div className="grid grid-cols-1 px-2 pt-1 pb-3 w-max">
                        {features.map((feature, index) => (
                          <NavigationMenuLink
                            href={feature.href}
                            key={index}
                            className="p-3 transition-colors rounded-md hover:bg-muted/70"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div key={feature.title}>
                              <p className="mb-1 font-semibold">
                                {feature.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/about"
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="https://drive.google.com/file/d/1oIcpO2xojkqtmzBFQQmnz3U0VRT0lVPy/view?usp=sharing"
                      className={navigationMenuTriggerStyle()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CV
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem></NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="items-center hidden gap-4 lg:flex">
            <Link
              onClick={handleTalkButtonClick}
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
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
                    <span className="-mt-1 text-lg font-bold">re://</span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="hover:no-underline">
                      Projects
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {features.map((feature, index) => (
                          <a
                            href={feature.href}
                            key={index}
                            className="px-1 py-3 transition-colors rounded-md hover:bg-muted/70"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div key={feature.title}>
                              <p className="mb-1 font-medium">
                                {feature.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6">
                  <a href="/about" className="font-medium">
                    About
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1oIcpO2xojkqtmzBFQQmnz3U0VRT0lVPy/view?usp=sharing"
                    className="font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CV
                  </a>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                  <Link
                    onClick={handleTalkButtonClick}
                    href="/contact"
                    className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
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
