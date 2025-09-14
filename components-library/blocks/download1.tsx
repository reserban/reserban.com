import { Download, Monitor, Smartphone, Tablet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Download1Props {
  heading?: string;
  description?: string;

  platforms?: {
    desktop?: {
      title: string;
      subtitle: string;
      description: string;
      buttonText: string;
      url: string;
    };
    ios?: {
      title: string;
      subtitle: string;
      description: string;
      url: string;
    };
    android?: {
      title: string;
      subtitle: string;
      description: string;
      url: string;
    };
  };
}

const Download1 = ({
  heading = "Download Our App",
  description = "Get our powerful application on every platform and boost your workflow with synchronized features and real-time collaboration.",

  platforms = {
    desktop: {
      title: "Desktop",
      subtitle: "PC/Mac",
      description:
        "Unlock the full potential with our comprehensive desktop version.",
      buttonText: "Download",
      url: "#",
    },
    ios: {
      title: "Mobile Phone",
      subtitle: "iOS",
      description:
        "Take your productivity on the go with our intuitive mobile app designed for seamless touch interactions.",
      url: "#",
    },
    android: {
      title: "Mobile Phone / Tablet",
      subtitle: "Android",
      description:
        "Enjoy flexible functionality across phones and tablets with our optimized Android experience.",
      url: "#",
    },
  },
}: Download1Props) => {
  return (
    <section className="bg-muted/30 py-32">
      <div className="container">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            {description}
          </p>
        </div>

        {/* Download Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {/* Desktop Card */}
          <Card className="bg-muted text-foreground flex flex-col border-0 p-6">
            <div className="bg-foreground/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Monitor className="h-6 w-6" />
            </div>
            <div className="mb-4 flex-1">
              <p className="mb-1 text-sm">{platforms.desktop?.title}</p>
              <h3 className="mb-3 text-2xl font-bold">
                {platforms.desktop?.subtitle}
              </h3>
              <p className="text-sm leading-relaxed">
                {platforms.desktop?.description}
              </p>
            </div>
            <div>
              <Button className="w-auto" size="lg" asChild>
                <a href={platforms.desktop?.url}>
                  <Download className="h-4 w-4" />
                  {platforms.desktop?.buttonText}
                </a>
              </Button>
            </div>
          </Card>

          {/* iOS Card */}
          <Card className="bg-background border-border flex flex-col p-6">
            <div className="bg-muted mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Smartphone className="h-6 w-6" />
            </div>
            <div className="mb-6 flex-1">
              <p className="text-muted-foreground mb-1 text-sm">
                {platforms.ios?.title}
              </p>
              <h3 className="mb-3 text-2xl font-bold">
                {platforms.ios?.subtitle}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {platforms.ios?.description}
              </p>
            </div>
            <div>
              <a href={platforms.ios?.url}>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/appstore.png"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
            </div>
          </Card>

          {/* Android Card */}
          <Card className="bg-background border-border flex flex-col p-6">
            <div className="bg-muted mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Tablet className="h-6 w-6" />
            </div>
            <div className="mb-6 flex-1">
              <p className="text-muted-foreground mb-1 text-sm">
                {platforms.android?.title}
              </p>
              <h3 className="mb-3 text-2xl font-bold">
                {platforms.android?.subtitle}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {platforms.android?.description}
              </p>
            </div>
            <div>
              <a href={platforms.android?.url}>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/googleplay.png"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { Download1 };
