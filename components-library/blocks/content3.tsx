"use client";

import { Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

const Content3 = () => {
  const [activeHeadings, setActiveHeadings] = useState<string[]>([]);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.id;

        if (entry.isIntersecting) {
          setActiveHeadings((prev) =>
            prev.includes(id) ? prev : [...prev, id],
          );
        } else {
          setActiveHeadings((prev) => prev.filter((heading) => heading !== id));
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };
  return (
    <section className="py-32">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Urban Gardening</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
          Mastering sustainable urban gardening in small spaces.
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-xl font-medium">
          Transform your apartment balcony or tiny yard into a thriving green
          oasis with our proven techniques.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Gardening Guide
          </Button>
        </div>
        <div className="relative mt-16 grid gap-10 lg:mt-28 lg:grid-cols-5">
          <aside className="top-10 flex h-fit w-full max-w-56 flex-col gap-5 lg:sticky">
            <div>
              <h2 className="font-semibold">Topics</h2>
              <ul className="mt-2 flex flex-col gap-2">
                <li>
                  <p className="text-muted-foreground text-sm">
                    Container Gardens
                  </p>
                </li>
                <li>
                  <p className="text-muted-foreground text-sm">
                    Vertical Systems
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold">Last Updated</h2>
              <time className="text-muted-foreground text-sm">
                April 15, 2024
              </time>
            </div>
          </aside>
          <div className="gap-6 lg:col-span-3">
            <div className="max-w-prose lg:mx-auto">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder"
                className="border-border aspect-video rounded-2xl border object-cover"
              />
              <div className="prose dark:prose-invert prose-h3:mt-14 prose-h3:scroll-mt-14 prose-h3:text-lg mt-12">
                <h2 className="text-4xl font-semibold">Beginner's Guide</h2>
                <h3
                  id="heading1"
                  ref={(ref) => addSectionRef("heading1", ref)}
                  className="text-2xl font-semibold"
                >
                  Overview
                </h3>
                <p>
                  This guide will help you create a thriving garden even in the
                  smallest urban spaces. With strategic planning and the right
                  plant selection, anyone can enjoy homegrown herbs, vegetables,
                  and flowers, regardless of square footage.
                </p>
                <h3 id="heading2" ref={(ref) => addSectionRef("heading2", ref)}>
                  Getting Started
                </h3>
                <p>
                  Before diving into urban gardening, consider these essential
                  requirements for success. This checklist will help you avoid
                  common beginner mistakes and set up your garden for optimal
                  growth.
                </p>
                <ul>
                  <li>
                    Basic supplies for your starter garden:
                    <ul>
                      <li>
                        <code>Containers</code> with proper drainage holes
                      </li>
                      <li>
                        <code>Soil</code> specially formulated for containers
                      </li>
                    </ul>
                  </li>
                  <li>
                    Proper lighting conditions{" "}
                    <a href="#">View lighting guide</a>
                  </li>
                  <li>Regular watering schedule and techniques</li>
                  <li>Quality potting mix with balanced nutrients</li>
                </ul>

                <h3 id="heading3" ref={(ref) => addSectionRef("heading3", ref)}>
                  Choosing Your Plants
                </h3>
                <p>
                  Once you've set up, you'll need to select appropriate plants
                  for your space.
                </p>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Light Conditions</th>
                        <th>Recommended Plants</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Full Sun</td>
                        <td>Tomatoes, Peppers, Basil</td>
                      </tr>
                      <tr className="even:bg-muted m-0 border-t p-0">
                        <td>Partial Sun</td>
                        <td>Lettuce, Kale, Mint</td>
                      </tr>
                      <tr className="even:bg-muted m-0 border-t p-0">
                        <td>Shade</td>
                        <td>Ferns, Hostas, Impatiens</td>
                      </tr>
                      <tr className="even:bg-muted m-0 border-t p-0">
                        <td>Indirect Light</td>
                        <td>Orchids, Peace Lily</td>
                      </tr>
                      <tr className="even:bg-muted m-0 border-t p-0">
                        <td>Low Light</td>
                        <td>Snake Plants, Prayer Plants</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  By matching plants to your light conditions, you'll see
                  dramatic improvements in growth and yield. Remember that even
                  in challenging spaces, there's always something that can
                  thrive.
                </p>
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertTitle>Pro Tip!</AlertTitle>
                  <AlertDescription>
                    Always group plants with similar water needs together to
                    simplify maintenance and prevent overwatering
                  </AlertDescription>
                </Alert>

                <h3 id="heading4" ref={(ref) => addSectionRef("heading4", ref)}>
                  Vertical Solutions
                </h3>
                <p>
                  When floor space is limited, the answer is to go up!{" "}
                  <a href="#">Vertical gardening techniques</a> can double or
                  triple your growing capacity.
                </p>
                <blockquote>
                  &ldquo;The greatest limitation in urban gardening isn't
                  space—it's imagination,&rdquo; says renowned urban farmer
                  Maria Chen.
                </blockquote>
                <p>
                  Consider these vertical options based on your available space:
                </p>
                <ul>
                  <li>Wall-mounted pocket planters: Perfect for herbs</li>
                  <li>Tiered plant stands: Ideal for small potted plants</li>
                  <li>
                    Trellises for climbers: Great for beans, peas, and cucumbers
                  </li>
                </ul>
                <p>
                  With these strategies, even a tiny balcony can produce an
                  impressive harvest throughout the growing season, bringing
                  both beauty and bounty to your urban dwelling.
                </p>
              </div>
            </div>
          </div>
          <nav className="sticky top-10 hidden h-fit lg:block">
            <p className="text-muted-foreground text-sm">ON THIS PAGE</p>
            <ul className="text-muted-foreground mt-1.5 text-xs">
              <li>
                <a
                  className={cn(
                    "border-border block border-l py-1 pl-2.5 transition-colors duration-200",
                    activeHeadings.includes("heading1")
                      ? "border-primary text-primary font-medium"
                      : "text-muted-foreground hover:text-primary",
                  )}
                  href="#heading1"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    "border-border block border-l py-1 pl-2.5 transition-colors duration-200",
                    activeHeadings.includes("heading2")
                      ? "border-primary text-primary font-medium"
                      : "text-muted-foreground hover:text-primary",
                  )}
                  href="#heading2"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    "border-border block border-l py-1 pl-2.5 transition-colors duration-200",
                    activeHeadings.includes("heading3")
                      ? "border-primary text-primary font-medium"
                      : "text-muted-foreground hover:text-primary",
                  )}
                  href="#heading3"
                >
                  Choosing Your Plants
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    "border-border block border-l py-1 pl-2.5 transition-colors duration-200",
                    activeHeadings.includes("heading4")
                      ? "border-primary text-primary font-medium"
                      : "text-muted-foreground hover:text-primary",
                  )}
                  href="#heading4"
                >
                  Vertical Solutions
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export { Content3 };
