import { Clock, Cloud, FileCheck, Scale, Users, XCircle } from "lucide-react";

interface DataItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DATA: DataItem[] = [
  {
    icon: <Cloud strokeWidth={1.5} className="size-12" />,
    title: "Boost Productivity",
    description:
      "Streamline your workflows and eliminate inefficiencies with our advanced task management tools.",
  },
  {
    icon: <XCircle strokeWidth={1.5} className="size-12" />,
    title: "Minimize Errors",
    description:
      "Automate repetitive tasks to reduce human error and ensure consistent results.",
  },
  {
    icon: <Users strokeWidth={1.5} className="size-12" />,
    title: "Enhance Collaboration",
    description:
      "Improve team communication and collaboration with real-time updates and shared workspaces.",
  },
  {
    icon: <Scale strokeWidth={1.5} className="size-12" />,
    title: "Scale Seamlessly",
    description:
      "Grow your team and projects without hassle, thanks to flexible and scalable solutions.",
  },
  {
    icon: <FileCheck strokeWidth={1.5} className="size-12" />,
    title: "Track Progress",
    description:
      "Stay on top of your goals with detailed progress tracking and actionable insights.",
  },
  {
    icon: <Clock strokeWidth={1.5} className="size-12" />,
    title: "Save Time",
    description:
      "Focus on what matters most by automating time-consuming tasks and processes.",
  },
];

const Timeline6 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Fixed Content */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Our tools make
                <br />
                productivity your
                <br />
                <span className="text-muted-foreground">superpower</span>
              </h2>
            </div>
          </div>

          {/* Right Column - Scrollable Cards */}
          <div className="-mt-8 sm:-mt-12">
            {DATA.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-center overflow-hidden border-b py-8 shadow-none sm:py-12"
              >
                <div className="flex gap-4 sm:gap-6">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="mb-2 text-2xl font-semibold text-primary sm:text-3xl">
                      {item.title}
                    </h4>
                    <p className="mt-6 text-sm text-muted-foreground sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline6 };
