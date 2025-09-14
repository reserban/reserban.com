"use client";

import {
  ArrowRight,
  CheckCircle,
  Code,
  Cog,
  PenTool,
  Shrub,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Services10 = () => {
  const services = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Product Strategy",
      description:
        "From market research to user personas, we help you build products that matter. Our strategic approach ensures your product meets real user needs.",
      items: [
        "Market Research & Analysis",
        "User Personas & Journey Mapping",
        "Competitive Analysis",
        "Product Roadmap Development",
      ],
      deliverables: [
        "Strategy Document",
        "User Research Report",
        "Roadmap & Timeline",
      ],
      duration: "2-4 weeks",
      price: "Starting at $5,000",
      featured: false,
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Design",
      description:
        "Beautiful, functional designs that create memorable user experiences. We focus on both aesthetics and usability to create designs that convert.",
      items: [
        "UI/UX Design",
        "Interactive Prototyping",
        "Design System Creation",
        "Usability Testing",
      ],
      deliverables: [
        "Design System",
        "Interactive Prototypes",
        "Design Specifications",
      ],
      duration: "3-6 weeks",
      price: "Starting at $8,000",
      featured: true,
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description:
        "Robust, scalable applications built with modern technologies and frameworks. We ensure your application is fast, secure, and maintainable.",
      items: [
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Performance Optimization",
      ],
      deliverables: [
        "Source Code",
        "Technical Documentation",
        "Deployment Guide",
      ],
      duration: "6-12 weeks",
      price: "Starting at $15,000",
      featured: true,
    },
    {
      icon: <Shrub className="h-6 w-6" />,
      title: "Marketing",
      description:
        "Strategic growth initiatives to scale your product and maximize impact. We use data-driven approaches to optimize your marketing efforts.",
      items: [
        "SEO Strategy & Implementation",
        "Analytics & Performance Tracking",
        "A/B Testing & Optimization",
        "Content Marketing Strategy",
      ],
      deliverables: [
        "Marketing Plan",
        "Analytics Dashboard",
        "Performance Reports",
      ],
      duration: "Ongoing",
      price: "Starting at $3,000/mo",
      featured: false,
    },
  ];

  return (
    <section className="bg-muted/30 py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="space-y-4 text-center">
            <Badge variant="outline" className="bg-background">
              Our Services
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              Transparent pricing for world-class digital solutions tailored to
              your specific business needs and growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.featured
                    ? "border-primary/20 bg-background shadow-lg"
                    : "border-border bg-background/80 hover:bg-background backdrop-blur-sm"
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`rounded-lg p-3 ${
                          service.featured
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {service.title}
                        </h3>
                        <div className="text-muted-foreground mt-1 text-sm">
                          {service.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="mb-3 text-sm font-medium">
                        What's included:
                      </h4>
                      <ul className="space-y-2">
                        {service.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center gap-3 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="mb-2 text-sm font-medium">
                        Deliverables:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((deliverable, delivIndex) => (
                          <Badge
                            key={delivIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-border mt-8 border-t pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-semibold">
                          {service.price}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Custom quotes available
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={service.featured ? "default" : "outline"}
                        className="transition-all group-hover:shadow-md"
                      >
                        Get Started
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-xl border p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer tailored packages combining multiple services for
              comprehensive digital transformation.
            </p>
            <Button
              size="lg"
              className="from-primary to-primary/80 bg-gradient-to-r"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services10 };
