"use client";

const integrations = [
  {
    title: "Startup Sidekick",
    description:
      "Whether it's design, strategy, research or just figuring stuff out, I've got your back trough the startup wild ride and founder mode.",
    buttonTitle: "Learn More",
  },
  {
    title: "Bridging Dev & Design",
    description:
      "I translate stuff between devs and designers, smoothing out the process so ideas come to life as functional, beautiful products.",
    buttonTitle: "Get Started",
  },
];

const Values = () => {
  return (
    <section className="py-8 md:py-16 px-6 md:px-0">
      <div className="grid py-4 md:py-0 container-none pl-6 rotate-[-0.2deg] shadow-lg border  border-res-100 rounded-3xl mx-auto max-w-[56rem] grid-cols-1 lg:grid-cols-2 relative">
        {integrations.map((item, index) => (
          <div
            key={index}
            className={`relative flex ${
              index === 0 ? "lg:justify-center" : "lg:justify-start"
            } items-center justify-start py-5 md:py-10 px-2 pr-8 md:pr-0`}
          >
            <div className="flex max-w-sm flex-col items-start justify-center gap-5 md:gap-10">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium text-res-500">
                  {item.title}
                </h1>
                <p className="text-md font-medium -mt-0.5 text-black/50">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
