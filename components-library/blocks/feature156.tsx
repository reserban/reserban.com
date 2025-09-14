"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const integrations = [
  {
    id: "1",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    title: "Modern Development Workflow",
    description:
      "Streamline your development process with integrated tools for code review, continuous integration, and automated testing. Built for modern engineering teams.",
  },
  {
    id: "2",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
    title: "Component-Driven Architecture",
    description:
      "Build scalable applications with reusable components. Our component system helps maintain consistency while reducing development time and technical debt.",
  },
  {
    id: "3",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
    title: "Real-Time Collaboration",
    description:
      "Work together seamlessly with built-in version control, live previews, and collaborative editing features. Perfect for distributed teams and pair programming.",
  },
];

const Feature156 = () => {
  const [cardNumber, setCardNumber] = useState(0);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Grid Pattern with Radial Mask */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,white)]" />
      </div>

      <div className="container relative">
        <div className="mb-16 flex flex-col items-center gap-8">
          <h1 className="max-w-3xl text-center text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Build better software with shadcn/ui blocks
          </h1>
        </div>
        <Tabs defaultValue={cardNumber.toString()} className="space-y-16">
          <div className="bg-muted relative flex h-[480px] items-center justify-center overflow-hidden rounded-2xl backdrop-blur-sm">
            {integrations.map((item, index) => (
              <TabsContent
                value={index.toString()}
                key={index}
                className="absolute inset-0 h-full w-full"
              >
                <div className="flex h-full w-full items-center justify-center p-8">
                  <img
                    src={item.image}
                    alt={`${item.title} visualization`}
                    className="h-auto max-h-full w-auto max-w-full object-contain"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
          <TabsList className="grid h-full w-full grid-cols-1 gap-8 bg-transparent p-0 lg:grid-cols-3 lg:gap-14">
            {integrations.map((item, index) => (
              <TabsTrigger
                value={index.toString()}
                key={index}
                className="border-muted hover:bg-muted/50 data-[state=active]:border-primary/20 data-[state=active]:bg-muted/50 bg-background/50 group flex flex-col items-start rounded-xl border p-8 shadow-sm transition-all hover:shadow-md data-[state=active]:shadow-md"
                onClick={() => setCardNumber(index)}
              >
                <div className="bg-primary/10 text-primary group-hover:bg-primary/20 group-data-[state=active]:bg-primary/20 mb-4 flex h-10 w-10 items-center justify-center rounded-full font-mono">
                  {index + 1}
                </div>
                <h3 className="text-foreground/90 group-hover:text-foreground group-data-[state=active]:text-foreground mb-3 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground/80 group-hover:text-muted-foreground group-data-[state=active]:text-muted-foreground text-pretty text-start text-sm">
                  {item.description}
                </p>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature156 };
