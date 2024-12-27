"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-home";
import { useState, useEffect } from "react";

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
    title: "Design & Product - Azignera",
    images: [
      "https://framerusercontent.com/assets/0rl9jftPmbJI7JxkyUQ10tdxg90.mp4",
      "https://framerusercontent.com/assets/bs4QE7d4dYjCHmHAUuANwqm40.mp4",
    ],
    carouselEnabled: true,
    column: 2,
  },
  {
    title: "Design & Product - Azignera",
    images: [
      "https://framerusercontent.com/images/G3BNSqkgeAiojXCruwWMSOi0Q.png?scale-down-to=2048",
    ],
    carouselEnabled: false,
    column: 3,
  },
  {
    title: "Design & Product - Azignera",
    images: [
      "https://framerusercontent.com/images/4NYehgBxU4hktqsmLAiYrnhPk.png?scale-down-to=2048",
    ],
    carouselEnabled: false,
    column: 1,
  },
];

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const Work = () => {
  const windowWidth = useWindowWidth();
  const columns: Project[][] = [[], [], []];
  projectsData.forEach((item: Project) => {
    columns[item.column - 1].push(item);
  });

  const tabletColumns: Project[][] = [[...columns[0]], [...columns[1]]];

  columns[2].forEach((item, index) => {
    tabletColumns[index % 2].push(item);
  });

  const displayColumns =
    windowWidth >= 640 && windowWidth < 1024 ? tabletColumns : columns;

  return (
    <section id="work" aria-label="Work Showcase" className="relative z-0">
      <div className="px-4 pb-6 sm:pb-12 sm:px-6 container-none">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {displayColumns.map((column: Project[], columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4 ">
              {column.map((item: Project, itemIndex) => (
                <ProjectItem key={itemIndex} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
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
        <h2 className="font-medium text-center text-md sm:text-md text-muted-foreground">
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
