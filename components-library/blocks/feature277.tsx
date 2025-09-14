"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  CodeXml,
  Plug2,
  Snowflake,
} from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature277 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Realtime tracking",
      description:
        "Track your users' activity in real-time with our advanced analytics",
      icon: Plug2,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      title: "Customizable",
      description:
        "Fully customizable components with clean, maintainable code structure.",
      icon: CodeXml,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Design Control",
      description:
        "Complete control over styling and animations with modern  patterns",
      icon: Snowflake,
      color: "text-sky-500",
      bgColor: "bg-sky-500/10",
    },
    {
      title: "Affordable Pricing",
      description:
        "Affordable pricing for all businesses, with a free tier available",
      icon: BadgeDollarSign,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ];

  return (
    <section className="overflow-hidden py-32">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <p className="bg-muted rounded-full px-4 py-1 text-xs uppercase">
          Examples
        </p>
        <h2 className="relative z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-7 lg:text-6xl">
          The Ultimate Block Toolkit
        </h2>
        <p className="text-md text-muted-foreground mx-auto max-w-xl text-center lg:text-lg">
          Perfectly balanced between performance and customization.
        </p>

        <div className="relative mt-10 grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative block h-full w-full p-2"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {hoveredIndex === idx && (
                  <motion.span
                    className={cn(
                      "bg-muted-foreground/20 absolute inset-0 block h-full w-full rounded-2xl",
                      item.bgColor,
                    )}
                    layoutId="hoverBackground"
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
                color={item.color}
                className="flex flex-col items-center justify-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature277 };

const Card = ({
  className,
  title,
  description,
  icon: Icon,
  color,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}) => {
  return (
    <div
      className={cn(
        "bg-muted relative z-20 flex h-full flex-col items-center justify-center gap-2 rounded-3xl p-5 text-center",
        className,
      )}
    >
      <div
        className={cn(
          "bg-background size-15 mb-4 mt-4 flex items-center justify-center rounded-full p-2",
          color,
        )}
      >
        <Icon />
      </div>
      <h1 className="text-xl font-medium tracking-tight">{title}</h1>
      <p className="text-muted-foreground text-center text-sm">{description}</p>

      <Button
        variant="ghost"
        className="group/btn mt-8 w-full hover:opacity-50"
        asChild
      >
        <a href="#">
          Read More{" "}
          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      </Button>
    </div>
  );
};
