import { Button } from "@/components/ui/button";

const Timeline3 = () => {
  return (
    <section className="py-32">
      <div className="max-w-6xl container-none">
        <div className="relative grid gap-16 md:grid-cols-2">
          <div className="top-40 h-fit md:sticky">
            <p className="font-medium text-muted-foreground">Our Approach</p>
            <h2 className="mt-4 mb-6 text-4xl font-semibold md:text-5xl">
              Experience the difference with us
            </h2>
            <p className="font-medium md:text-xl">
              We believe in creating lasting partnerships with our clients.
            </p>
            <div className="flex flex-col gap-4 mt-8 lg:flex-row">
              <Button className="gap-2" size="lg">
                Start Now
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                Book a demo
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-12 md:gap-20">
            <div className="p-2 border rounded-xl">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                alt="placeholder"
                className="object-cover w-full border border-dashed aspect-video rounded-xl"
              />
              <div className="p-6">
                <h3 className="mb-1 text-2xl font-semibold">
                  Straightforward Pricing
                </h3>
                <p className="text-muted-foreground">
                  Clear, upfront pricing with no hidden fees. Get an instant
                  quote through our simple online form.
                </p>
              </div>
            </div>
            <div className="p-2 border rounded-xl">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-2.svg"
                alt="placeholder"
                className="object-cover w-full border border-dashed aspect-video rounded-xl"
              />
              <div className="p-6">
                <h3 className="mb-1 text-2xl font-semibold">
                  Structured Development
                </h3>
                <p className="text-muted-foreground">
                  Regular progress updates and defined milestones ensure
                  complete visibility throughout your project&apos;s lifecycle.
                </p>
              </div>
            </div>
            <div className="p-2 border rounded-xl">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-3.svg"
                alt="placeholder"
                className="object-cover w-full border border-dashed aspect-video rounded-xl"
              />
              <div className="p-6">
                <h3 className="mb-1 text-2xl font-semibold">
                  Scalable Architecture
                </h3>
                <p className="text-muted-foreground">
                  Built with scalability in mind, our solutions grow with your
                  needs while maintaining consistent performance.
                </p>
              </div>
            </div>
            <div className="p-2 border rounded-xl">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-4.svg"
                alt="placeholder"
                className="object-cover w-full border border-dashed aspect-video rounded-xl"
              />
              <div className="p-6">
                <h3 className="mb-1 text-2xl font-semibold">
                  Dedicated Support
                </h3>
                <p className="text-muted-foreground">
                  Access our dedicated support team through multiple channels
                  for quick resolution of any concerns.
                </p>
              </div>
            </div>
            <div className="p-2 border rounded-xl">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-5.svg"
                alt="placeholder"
                className="object-cover w-full border border-dashed aspect-video rounded-xl"
              />
              <div className="p-6">
                <h3 className="mb-1 text-2xl font-semibold">
                  Satisfaction Guaranteed
                </h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. If our solution
                  doesn&apos;t meet your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline3;
