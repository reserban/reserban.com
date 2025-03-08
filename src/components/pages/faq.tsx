"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Category = "Support" | "Account" | "Features" | "Security" | "Other";

interface FAQItem {
  question: string;
  answer: string;
  category: Category;
}

const faqItems: FAQItem[] = [
  // Features Questions
  {
    category: "Features",
    question: "What exactly is a 'Startup Sidekick'?",
    answer:
      "Think of me as your startup's best friend who actually knows what they're doing. I provide hands-on help with design, strategy, research, and general problem-solving to navigate the wild startup journey with you.",
  },
  {
    category: "Features",
    question: "How do you bridge development and design?",
    answer:
      "I speak both languages fluently - developer and designer. I translate requirements, expectations, and constraints between teams to ensure your ideas become functional, beautiful products without the usual communication breakdowns.",
  },
  {
    category: "Features",
    question: "What does your MESS process involve?",
    answer:
      "MESS stands for Map, Execute, Shape, and Scale. I map out your challenges, execute on solutions, shape your offering until it resonates with your audience, and scale what works. It's a structured approach to tackling the inherently messy startup journey.",
  },
  // Other Questions
  {
    category: "Other",
    question: "Can I just book a coffee call to chat?",
    answer:
      "Absolutely! The 'Coffee Call - Bring Your Own' option is perfect for this. It's a no-pressure way to discuss your challenges, get some quick advice, or just connect with someone who understands the startup ecosystem.",
  },
];

const categories: Category[] = [
  "Support",
  "Account",
  "Features",
  "Security",
  "Other",
];

const TOP_PADDING = 300;

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Support");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isScrollingRef = useRef(false);
  const categoryRefs = useRef<Record<Category, HTMLDivElement | null>>({
    Support: null,
    Account: null,
    Features: null,
    Security: null,
    Other: null,
  });

  const setupObserver = useCallback(() => {
    observerRef.current?.disconnect();

    let debounceTimeout: NodeJS.Timeout;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Skip if we're programmatically scrolling
        if (isScrollingRef.current) return;

        // Clear any pending timeout
        if (debounceTimeout) {
          clearTimeout(debounceTimeout);
        }

        // Debounce the category update
        debounceTimeout = setTimeout(() => {
          const intersectingEntries = entries.filter(
            (entry) => entry.isIntersecting
          );

          // Find the entry that's closest to being 100px from the top
          const entry = intersectingEntries.reduce((closest, current) => {
            const rect = current.boundingClientRect;
            const distanceFromThreshold = Math.abs(rect.top - TOP_PADDING);
            const closestDistance = closest
              ? Math.abs(closest.boundingClientRect.top - TOP_PADDING)
              : Infinity;

            return distanceFromThreshold < closestDistance ? current : closest;
          }, null as IntersectionObserverEntry | null);

          if (entry) {
            const category = entry.target.getAttribute(
              "data-category"
            ) as Category;
            if (category) {
              setActiveCategory(category);
            }
          }
        }, 150);
      },
      {
        root: null,
        rootMargin: `-${TOP_PADDING}px 0px -100% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    Object.entries(categoryRefs.current).forEach(([category, element]) => {
      if (element) {
        element.setAttribute("data-category", category);
        observerRef.current?.observe(element);
      }
    });

    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = setupObserver();
    return () => {
      cleanup();
      observerRef.current?.disconnect();
    };
  }, [setupObserver]);

  return (
    <section className="py-4 pb-28">
      <div className="container-none mx-auto max-w-[56rem] px-6 lg:px-0">
        <div className="md:text-center text-left">
          <h1 className="mx-auto text-left md:text-center max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl text-res-500">
            Answers do not require 3 business days
          </h1>
          <div className="flex justify-start md:justify-center mt-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="block h-fit w-fit rounded-full text-sm px-6 py-2 font-semibold leading-loose border-res-500 text-res-500 hover:bg-res-50 hover:text-res-600"
            >
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0fM_19AnjyTezARAud4h0n96blUyRv5XPe2uUCDxuxU6wx-IVJVWB-aUDn2iYL1DaYfQmVIvPz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Answers?
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-2 grid max-w-5xl gap-8 md:mt-12  md:gap-12 lg:mt-8">
          <div className="space-y-6">
            {categories.map((category) => {
              const categoryItems = faqItems.filter(
                (item) => item.category === category
              );

              return (
                <div
                  key={category}
                  id={`faq-${category.toLowerCase()}`}
                  ref={(el) => {
                    categoryRefs.current[category] = el;
                  }}
                  className={cn(
                    `rounded-xl`,
                    activeCategory === category
                      ? "bg-background"
                      : "bg-background/40"
                  )}
                  style={{
                    scrollMargin: `${TOP_PADDING}px`,
                  }}
                >
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue={`${categories[0]}-0`}
                    className="w-full"
                  >
                    {categoryItems.map((item, i) => (
                      <AccordionItem
                        key={i}
                        value={`${category}-${i}`}
                        className="border-b border-muted last:border-0"
                      >
                        <AccordionTrigger className="text-base font-medium hover:no-underline text-left justify-between">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-medium text-black/50">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
