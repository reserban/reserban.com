import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  "Automated backups",
  "24/7 support",
  "Unlimited projects",
  "Unlimited users",
  "Custom domain",
  "Custom branding",
  "Advanced analytics",
  "Custom permissions",
  "Advanced reports",
];

const Pricing8 = () => {
  return (
    <section className="bg-muted py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="mb-2 text-3xl font-medium lg:text-5xl">Pricing</h2>
          <p className="max-w-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum
            dolorem asperiores expedita!
          </p>
        </div>
        <div className="mt-10">
          <Card className="mx-auto flex w-full max-w-sm flex-col justify-between gap-10 rounded-lg p-6 text-center">
            <p className="text-2xl">Starting at</p>
            <div>
              <div className="flex justify-center">
                <span className="text-lg">$</span>
                <span className="text-4xl font-medium lg:text-5xl">
                  16/month
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                With a 7-day free trial
              </p>
            </div>
            <Button className="w-full" size="lg">
              TRY FOR FREE
            </Button>
          </Card>
          <p className="lg:text-1xl mt-8 text-center text-xl font-medium lg:mt-10">
            What&apos;s included in the plan
          </p>
          <ul className="mx-auto mt-4 grid w-fit md:w-auto md:max-w-2xl md:grid-cols-2 md:pl-14 lg:max-w-4xl lg:grid-cols-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="mt-4 flex items-center gap-2 text-sm font-medium"
              >
                <Check className="size-5" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Pricing8 };
