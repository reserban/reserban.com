import { BarChart3, Briefcase, Cloud, Shield } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    icon: <Shield strokeWidth={2} />,
    category: "Security",
    description:
      "Enterprise security solution providing advanced threat protection and monitoring",
    year: 2024,
    offer: "Free",
    segment: "Business",
  },
  {
    icon: <Cloud strokeWidth={2} />,
    category: "Technology",
    description:
      "Cloud-based platform offering scalable solutions for modern businesses",
    year: 2023,
    offer: "Professional",
    segment: "Business",
  },
  {
    icon: <Briefcase strokeWidth={2} />,
    category: "Services",
    description:
      "Comprehensive business management suite for growing organizations",
    year: 2022,
    offer: "Enterprise",
    segment: "Enterprise",
  },
  {
    icon: <BarChart3 strokeWidth={2} />,
    category: "Analytics",
    description:
      "Real-time data analytics platform with customizable dashboards and reporting",
    year: 2024,
    offer: "Professional",
    segment: "Business",
  },
  {
    icon: <Shield strokeWidth={2} />,
    category: "Security",
    description:
      "Advanced endpoint protection system with AI-powered threat detection",
    year: 2023,
    offer: "Professional",
    segment: "Enterprise",
  },
  {
    icon: <Cloud strokeWidth={2} />,
    category: "Technology",
    description:
      "Serverless computing platform with automatic scaling capabilities",
    year: 2024,
    offer: "Enterprise",
    segment: "Business",
  },
  {
    icon: <Briefcase strokeWidth={2} />,
    category: "Services",
    description:
      "Professional consulting services for digital transformation initiatives",
    year: 2023,
    offer: "Free",
    segment: "Business",
  },
];

const List1 = () => {
  return (
    <section className="py-32">
      <div className="container px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead className="hidden font-bold text-primary md:table-cell">
                Category
              </TableHead>
              <TableHead>
                <span className="hidden font-bold text-primary md:block">
                  Description
                </span>
                <span className="block font-bold text-primary md:hidden">
                  Project
                </span>
              </TableHead>
              <TableHead className="hidden text-right font-bold text-primary md:table-cell">
                Year
              </TableHead>
              <TableHead className="hidden font-bold text-primary md:table-cell">
                Offer
              </TableHead>
              <TableHead className="hidden font-bold text-primary md:table-cell">
                Segment
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.category}>
                <TableCell className="">
                  <div className="flex items-center gap-2 align-top">
                    {item.icon}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.category}
                </TableCell>
                <TableCell className="pl-0 align-top md:pl-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-1 md:hidden">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">
                          {item.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          - {item.segment}
                        </span>
                        <span
                          className={cn(
                            "ml-1 block h-1.5 w-4 rounded-full md:hidden",
                            item.offer === "Free" && "bg-yellow-400",
                            item.offer === "Professional" && "bg-green-400",
                            item.offer === "Enterprise" && "bg-blue-400",
                          )}
                        ></span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground md:text-primary">
                      {item.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="hidden text-right md:table-cell">
                  {item.year}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "block h-6 w-1.5 rounded-full",
                        item.offer === "Free" && "bg-yellow-400",
                        item.offer === "Professional" && "bg-green-400",
                        item.offer === "Enterprise" && "bg-blue-400",
                      )}
                    ></span>
                    {item.offer}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.segment}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export { List1 };
