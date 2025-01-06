"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Project {
  title: string;
  content?: string;
  images: string[];
}

interface ProjectsData {
  column1: Project[];
  column2: Project[];
  column3: Project[];
}

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
  const [projectsData, setProjectsData] = useState<ProjectsData>({
    column1: [],
    column2: [],
    column3: [],
  });
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        "https://reserban.github.io/projects.json/projects.json"
      );
      const data: ProjectsData = await response.json();
      setProjectsData(data);
    };

    fetchProjects();
  }, []);

  const columns = [
    projectsData.column1,
    projectsData.column2,
    projectsData.column3,
  ];

  const tabletColumns: Project[][] = [
    [...projectsData.column1],
    [...projectsData.column2, ...projectsData.column3],
  ];

  const displayColumns =
    windowWidth >= 640 && windowWidth < 1024 ? tabletColumns : columns;

  return (
    <section id="work" aria-label="Work Showcase" className="relative z-0">
      <div className="px-4 pb-6 sm:pb-12 sm:px-6 container-none">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {displayColumns.map((column: Project[], columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-5 ">
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
      <div className="relative">
        <MediaItem media={item.images[0]} alt={item.title} />
      </div>
      <div className="flex flex-col pt-1.5 bg-white dark:bg-gray-800">
        <h2 className="font-medium text-center text-md sm:text-sm text-muted-foreground">
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
  const commonClasses =
    "w-full h-full object-cover rounded-xl border border-black/10";

  if (isVideo) {
    return (
      <div className="relative pt-[56.25%]">
        <video
          src={media}
          loop
          autoPlay
          muted
          playsInline
          preload="metadata"
          className={`${commonClasses} absolute inset-0`}
          aria-label={alt}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <Image
        src={media}
        alt={alt}
        width={800}
        height={600}
        className={commonClasses}
        loading="lazy"
        quality={85}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
    </div>
  );
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default Work;
