import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaSlack,
  FaXTwitter,
} from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

import { Card } from "@/components/ui/card";

const iconWrapper =
  "mb-4 flex items-center justify-center h-16 w-16 rounded-full border-2 border-dotted border-muted-foreground/40 transition-colors duration-200";

const Community6 = () => {
  const communityCards = [
    {
      icon: <FaXTwitter className="h-8 w-8 text-foreground/80" />,
      title: "Twitter",
      description: "Follow us for updates, insights, and news",
      link: "#",
    },
    {
      icon: <FaGithub className="h-8 w-8 text-foreground/80" />,
      title: "GitHub",
      description: "Contribute, report issues, and star the project",
      link: "#",
    },
    {
      icon: <FaDiscord className="h-8 w-8 text-foreground/80" />,
      title: "Discord",
      description: "Chat, share ideas, and get support from the community",
      link: "#",
    },
    {
      icon: <FaLinkedin className="h-8 w-8 text-foreground/80" />,
      title: "LinkedIn",
      description: "Connect with us professionally and grow your network",
      link: "#",
    },
    {
      icon: <FaSlack className="h-8 w-8 text-foreground/80" />,
      title: "Slack",
      description: "Join our Slack for real-time collaboration",
      link: "#",
    },
    {
      icon: <SiBluesky className="h-8 w-8 text-foreground/80" />,
      title: "Bluesky",
      description: "Connect with us on Bluesky for open social networking",
      link: "#",
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-background py-32 text-foreground">
      <div className="relative z-10 container flex flex-col items-center justify-center">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
          Join Our Vibrant Network
        </h2>
        <p className="mb-8 max-w-2xl text-center text-lg font-normal text-muted-foreground md:text-xl">
          Connect, collaborate, and create with passionate developers and
          creators worldwide.
        </p>
        <div className="mb-10 grid w-full grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-6">
          {communityCards.map((card) => (
            <Card
              key={card.title}
              className="group flex flex-1 flex-col items-center rounded-2xl bg-background p-8 transition-shadow duration-200 hover:shadow-lg"
            >
              <a
                href={card.link}
                target="_blank"
                className="flex flex-col items-center"
              >
                <span className={`${iconWrapper} group-hover:bg-muted`}>
                  {card.icon}
                </span>
                <h5 className="mb-1 text-lg font-semibold">{card.title}</h5>
                <p className="mb-2 text-center text-base text-muted-foreground">
                  {card.description}
                </p>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Community6 };
