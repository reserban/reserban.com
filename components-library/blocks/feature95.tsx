import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import { Badge } from "@/components/ui/badge";

const Feature95 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-16 max-w-xl px-8 lg:px-0">
          <Badge variant="outline">Start your journey</Badge>
          <h2 className="mb-3 mt-6 text-balance text-2xl font-medium md:text-4xl">
            Build your custom workflow in no time
          </h2>
          <p>Deploy a fully optimized system and upgrade your current setup.</p>
        </div>
        <div>
          <Tabs defaultValue="tab-1">
            <TabsList className="relative grid items-start gap-6 lg:grid-cols-4">
              <div className="bg-input absolute left-4 right-0 top-[30px] -z-10 hidden h-px lg:block"></div>
              <TabsTrigger
                value="tab-1"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="hover:bg-muted flex gap-4 rounded-md px-8 py-4 text-left lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="bg-background lg:group-data-[state=active]:bg-primary lg:group-data-[state=active]:text-background lg:group-data-[state=active]:ring-muted-foreground/40 flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium lg:group-data-[state=active]:ring">
                      1
                    </span>
                    <span className="bg-input h-full w-px lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">
                      Set up your data collection
                    </h3>
                    <p className="text-sm">
                      Configure your input sources and streamline data
                      management.
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 mt-6 block border px-4 py-6 lg:hidden">
                  <div className="aspect-video">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                      alt="placeholder"
                      className="h-full w-full rounded-md border object-cover shadow"
                    />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="hover:bg-muted flex gap-4 rounded-md px-8 py-4 text-left lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="bg-background group-data-[state=active]:bg-primary group-data-[state=active]:text-background group-data-[state=active]:ring-muted-foreground/40 flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium group-data-[state=active]:ring">
                      2
                    </span>
                    <span className="bg-input h-full w-px lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">
                      Generate custom reports
                    </h3>
                    <p className="text-sm">
                      Easily create and share detailed analytics reports across
                      teams.
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 mt-6 block border px-4 py-6 lg:hidden">
                  <div className="aspect-video">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                      alt="placeholder"
                      className="h-full w-full rounded-md border object-cover shadow"
                    />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="hover:bg-muted flex gap-4 rounded-md px-8 py-4 text-left lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="bg-background group-data-[state=active]:bg-primary group-data-[state=active]:text-background group-data-[state=active]:ring-muted-foreground/40 flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium group-data-[state=active]:ring">
                      3
                    </span>
                    <span className="bg-input h-full w-px lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">
                      Automate your processes
                    </h3>
                    <p className="text-sm">
                      Set up automated workflows for handling and processing
                      data effortlessly.
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 mt-6 block border px-4 py-6 lg:hidden">
                  <div className="aspect-video">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                      alt="placeholder"
                      className="h-full w-full rounded-md border object-cover shadow"
                    />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="group pointer-events-none lg:pointer-events-auto"
              >
                <div className="hover:bg-muted flex gap-4 rounded-md px-8 py-4 text-left lg:block lg:px-4">
                  <div className="flex flex-col items-center lg:contents">
                    <span className="bg-background group-data-[state=active]:bg-primary group-data-[state=active]:text-background group-data-[state=active]:ring-muted-foreground/40 flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium group-data-[state=active]:ring">
                      4
                    </span>
                    <span className="bg-input h-full w-px lg:hidden"></span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium lg:mt-4">
                      Share insights with stakeholders
                    </h3>
                    <p className="text-sm">
                      Provide transparent reporting with your custom-built
                      dashboard.
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 mt-6 block border px-4 py-6 lg:hidden">
                  <div className="aspect-video">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                      alt="placeholder"
                      className="h-full w-full rounded-md border object-cover shadow"
                    />
                  </div>
                </div>
              </TabsTrigger>
            </TabsList>
            <div className="bg-muted/50 mt-10 hidden rounded-xl border p-10 lg:block">
              <TabsContent value="tab-1" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover shadow"
                />
              </TabsContent>
              <TabsContent value="tab-2" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover shadow"
                />
              </TabsContent>
              <TabsContent value="tab-3" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover shadow"
                />
              </TabsContent>
              <TabsContent value="tab-4" className="aspect-video">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover shadow"
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Feature95 };
