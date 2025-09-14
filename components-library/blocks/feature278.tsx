"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaCog,
  FaDollarSign,
  FaPalette,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import { cn } from "@/lib/utils";

const Feature278 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Fast Performance",
      description: "Lightning quick loading times and smooth interactions",
      icon: FaRocket,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      title: "Easy Setup",
      description: "Simple configuration with minimal code required",
      icon: FaCog,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Beautiful Design",
      description: "Modern aesthetics with stunning visual appeal",
      icon: FaPalette,
      color: "text-sky-500",
      bgColor: "bg-sky-500/10",
    },
    {
      title: "Great Value",
      description: "Affordable pricing with premium features included",
      icon: FaDollarSign,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Secure",
      description: "Enterprise-grade security with data protection",
      icon: FaShieldAlt,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Team Support",
      description: "Dedicated support team available around the clock",
      icon: FaUsers,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <section className="bg-muted min-h-screen overflow-hidden py-32">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <div className="max-w-5xl">
          <h2 className="relative z-20 py-2 font-sans text-5xl font-semibold text-center tracking-tighter md:py-7">
            Features That speak for <br className="hidden lg:block" />{" "}
            <span className="opacity-50">Themselves</span>
          </h2>

          <div className="relative grid w-full max-w-3xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                        "absolute inset-0 block h-full w-full rounded-2xl",
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
                  bgColor={item.bgColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature278 };

const Card = ({
  className,
  title,
  description,
  bgColor,
  icon: Icon,
  color,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  color: string;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative z-20 flex h-full flex-col items-start justify-start gap-2 rounded-3xl p-5",
        className,
      )}
    >
      <div
        className={cn(
          "bg-background size-15 mb-12 flex items-center justify-center rounded-2xl",
          color,
          bgColor,
        )}
      >
        <Icon className="size-5" />
      </div>
      <h1 className="text-xl font-medium tracking-tight">{title}</h1>
      <p className="text-muted-foreground/50 text-sm">{description}</p>
    </div>
  );
};
