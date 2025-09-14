import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Changelog2 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-semibold md:text-7xl">
            Changelog
            <sup>
              <Badge className="ml-2 bg-emerald-400 hover:bg-emerald-400">
                NEW
              </Badge>
            </sup>
          </h1>
          <p className="mx-auto max-w-lg text-lg">
            Everything that's new and improved now available on any plan and
            everywhere on the platform
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-xs items-center space-x-2">
            <Input type="email" placeholder="Enter your email for updates" />
            <Button type="submit">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="border-border mx-auto mt-20 max-w-xl space-y-10 border-l border-dashed pl-6">
          <div>
            <p className="text-muted-foreground relative font-mono text-sm">
              <time className="absolute -left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400"></time>
              January 11, 2025
            </p>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="aspect-8/7 my-4 rounded-md object-cover"
            />
            <h2 className="mb-2 text-3xl font-semibold">
              Better export options
            </h2>
            <p className="prose text-primary/80 dark:prose-invert">
              We've added a <a href="#">components</a> and{" "}
              <a href="#">analytics</a> to help you track your website's
              performance. You can now see your website's performance over time,
              and get insights into your users.
              <br />
              <br />
              As with all of our <a href="#">integrations</a>, we do the heavy
              lifting for you. It's easy to set up, privacy-focused, performant,
              and secure. We also handle cookie consent where required, in a
              very Supertape way.
            </p>
          </div>
          <div>
            <p className="text-muted-foreground relative font-mono text-sm">
              <time className="absolute -left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400"></time>
              December 23, 2024
            </p>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="aspect-8/7 my-4 rounded-md object-cover"
            />
            <h2 className="mb-2 text-3xl font-semibold">
              New dashboard and analytics
            </h2>
            <p className="prose text-primary/80 dark:prose-invert">
              We've added a <a href="#">components</a> and{" "}
              <a href="#">analytics</a> to help you track your website's
              performance. You can now see your website's performance over time,
              and get insights into your users.
              <br />
              <br />
              As with all of our <a href="#">integrations</a>, we do the heavy
              lifting for you. It's easy to set up, privacy-focused, performant,
              and secure. We also handle cookie consent where required, in a
              very Supertape way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Changelog2 };
