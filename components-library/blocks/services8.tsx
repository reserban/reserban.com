"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services8 = () => {
  const services = [
    {
      icon: <Cog className="h-5 w-5" />,
      title: "Product Strategy",
      shortDescription: "Strategic planning and market positioning",
      description:
        "From market research to user personas, we help you build products that matter. Our strategic approach ensures your product meets real user needs.",
      items: [
        "Market Research",
        "User Personas",
        "Competitive Analysis",
        "Product Roadmaps",
      ],
      deliverables: [
        "Strategy Document",
        "User Persona Profiles",
        "Market Analysis Report",
      ],
    },
    {
      icon: <PenTool className="h-5 w-5" />,
      title: "Design",
      shortDescription: "User-centered design solutions",
      description:
        "Beautiful, functional designs that create memorable user experiences. We focus on both aesthetics and usability to create designs that convert.",
      items: [
        "UI/UX Design",
        "Prototyping",
        "Interaction Design",
        "Design Systems",
      ],
      deliverables: [
        "Design System",
        "Interactive Prototypes",
        "UI/UX Mockups",
      ],
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Web Development",
      shortDescription: "Modern, scalable applications",
      description:
        "Robust, scalable applications built with modern technologies and frameworks. We ensure your application is fast, secure, and maintainable.",
      items: [
        "Frontend Dev",
        "Backend Dev",
        "API Integration",
        "Performance Optimization",
      ],
      deliverables: ["Source Code", "Documentation", "Deployment Guide"],
    },
    {
      icon: <Shrub className="h-5 w-5" />,
      title: "Marketing",
      shortDescription: "Growth and optimization strategies",
      description:
        "Strategic growth initiatives to scale your product and maximize impact. We use data-driven approaches to optimize your marketing efforts.",
      items: [
        "SEO Strategy",
        "Analytics & Data",
        "A/B Testing",
        "Content Marketing",
      ],
      deliverables: [
        "Marketing Plan",
        "Analytics Setup",
        "Performance Reports",
      ],
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Services
            </h2>
            <p className="text-muted-foreground text-lg tracking-tight md:text-xl">
              Click to learn more about each service we offer.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="space-y-4"
          >
            {services.map((service, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border rounded-lg border last:border-b"
              >
                <AccordionTrigger className="hover:bg-muted/50 px-6 py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="border-border bg-muted/20 space-y-6 border-b border-t p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-medium">Services Include:</h4>
                      <ul className="space-y-1">
                        {service.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="bg-foreground h-1 w-1 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 font-medium">Deliverables:</h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((deliverable, delivIndex) => (
                          <li
                            key={delivIndex}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="bg-foreground h-1 w-1 rounded-full" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Services8 };
