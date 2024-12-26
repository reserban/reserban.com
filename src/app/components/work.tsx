import { Suspense } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FastForward, BookCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  title: string;
  content?: string;
  images: string[];
  carouselEnabled: boolean;
  column: number;
}

const projectsData: Project[] = [
  {
    title: "Naming, Branding & Web - Inereto",
    content: "This is some text content for performance.",
    images: [
      "https://framerusercontent.com/assets/WJj09vWahaQMHcvrapBqN2rLY.mp4",
      "https://framerusercontent.com/assets/xSlYttnWuXABpFpKmu62yTzAg.mp4",
    ],
    carouselEnabled: true,
    column: 1,
  },
  {
    title: "Branding & Website - Shiftintech",
    images: [
      "https://framerusercontent.com/images/IGZAPTAZVeTyX9YdJ2xbJEU6W4.png?scale-down-to=2048",
      "https://framerusercontent.com/images/wZuWxwOGnNLygymILzg8wg4MwA.png?scale-down-to=2048",
    ],
    carouselEnabled: true,
    column: 2,
  },
  {
    title: "Logo Design - Kubeark",
    images: [
      "https://framerusercontent.com/images/Aktg9tHRjRF8AbKUB0ClsvB2rQ.png?scale-down-to=2048",
    ],
    carouselEnabled: false,
    column: 3,
  },
  {
    title: "App Design - Sereso",
    images: [
      "https://framerusercontent.com/images/RwqgXO6vy6UJaIOWYndxgtL3AI.png?scale-down-to=2048",
    ],
    carouselEnabled: false,
    column: 1,
  },
  {
    title: "Design & Product - Azignera",
    images: [
      "https://framerusercontent.com/assets/0rl9jftPmbJI7JxkyUQ10tdxg90.mp4",
      "https://framerusercontent.com/assets/bs4QE7d4dYjCHmHAUuANwqm40.mp4",
    ],
    carouselEnabled: true,
    column: 2,
  },
];

const Work = () => {
  const columns: Project[][] = [[], [], []];
  projectsData.forEach((item: Project) => {
    columns[item.column - 1].push(item);
  });

  return (
    <section id="work" aria-label="Work Showcase">
      <div className="px-4 mb-4 sm:px-6 container-none">
        <Suspense fallback={<div>Loading...</div>}>
          <WorkTabs columns={columns} />
        </Suspense>
      </div>
    </section>
  );
};

const WorkTabs = ({ columns }: { columns: Project[][] }) => {
  return (
    <Tabs defaultValue="showcase">
      <div className="flex justify-center mb-8">
        <TabsList>
          <TabsTrigger
            value="showcase"
            className="flex items-center justify-center w-full gap-1 text-xs sm:text-sm xs:w-auto"
          >
            <FastForward className="size-3 sm:size-4" />
            Work Showcase
          </TabsTrigger>
          <TabsTrigger
            value="case-studies"
            className="flex items-center justify-center w-full gap-1 text-xs opacity-50 cursor-not-allowed sm:text-sm xs:w-auto"
            disabled
          >
            <BookCheck className="size-3 sm:size-4" />
            Case Studies (Soon)
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="showcase">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((column: Project[], columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {column.map((item: Project, itemIndex) => (
                <ProjectItem key={itemIndex} item={item} />
              ))}
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent
        value="case-studies"
        className="flex flex-col items-center justify-center gap-10 mt-0"
      >
        <div className="flex flex-col items-center w-full gap-5 p-24 border">
          <Badge variant="outline">Coming Soon</Badge>
          <h3 className="max-w-lg text-xl font-medium text-center lg:text-2xl">
            Case studies are on their way.
          </h3>
        </div>
      </TabsContent>
    </Tabs>
  );
};

const ProjectItem = ({ item }: { item: Project }) => {
  return (
    <div className="break-inside-avoid">
      <div className="relative w-full">
        {item.carouselEnabled ? (
          <Carousel className="w-full">
            <CarouselContent>
              {item.images.map((media, mediaIndex) => (
                <CarouselItem key={mediaIndex}>
                  <MediaItem
                    media={media}
                    alt={`${item.title} - Image ${mediaIndex + 1}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute z-10 bottom-2 left-2" />
            <CarouselNext className="absolute z-10 bottom-2 right-2" />
          </Carousel>
        ) : (
          <MediaItem media={item.images[0]} alt={item.title} />
        )}
      </div>
      <div className="flex flex-col pt-2 bg-white dark:bg-gray-800">
        <h2 className="text-sm font-medium text-center sm:text-md text-muted-foreground">
          {item.title}
        </h2>
      </div>
    </div>
  );
};

interface MediaItemProps {
  media: string;
  alt: string;
}

const MediaItem: React.FC<MediaItemProps> = ({ media, alt }) => {
  const isVideo = media.endsWith(".mp4");
  const commonClasses = "w-full h-auto object-cover";

  if (isVideo) {
    return (
      <div className="w-full h-full">
        <video
          src={media}
          loop
          autoPlay
          muted
          playsInline
          preload="none"
          className={commonClasses}
          aria-label={alt}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Image
        src={media}
        alt={alt}
        width={800}
        height={600}
        className={commonClasses}
        loading="lazy"
      />
    </div>
  );
};

export default Work;
