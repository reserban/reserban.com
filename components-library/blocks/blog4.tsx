import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: "post-1",
    title: "The Future of Web Development: What's Next in 2024",
    summary:
      "Explore the latest trends in web development, from AI-powered tools to new frameworks that are reshaping how we build the web. Discover what developers need to know to stay ahead.",
    label: "Web Development",
    author: "Sarah Chen",
    published: "15 Jan 2024",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "post-2",
    title: "Building Scalable APIs with Modern Architecture Patterns",
    summary:
      "Learn about microservices, GraphQL, and event-driven architectures that are powering today's most successful applications. Practical insights for building robust APIs.",
    label: "Backend",
    author: "Marcus Rodriguez",
    published: "12 Jan 2024",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
  },
  {
    id: "post-3",
    title: "Design Systems: Creating Consistency at Scale",
    summary:
      "How leading companies are implementing design systems to maintain visual consistency across products while enabling rapid development and innovation.",
    label: "Design",
    author: "Emma Thompson",
    published: "10 Jan 2024",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
  },
];

const Blog4 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <div className="flex items-start justify-between gap-8">
            <div>
              <h2 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
                Blog
              </h2>
            </div>
          </div>
          <p>
            Insights, tutorials, and thoughts on modern software development
          </p>
        </div>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {posts.map((post) => (
            <a key={post.id} href={post.href} className="group flex flex-col">
              <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
                <div className="transition-opacity duration-300 group-hover:opacity-80">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-3/2 h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <Badge variant="secondary">{post.label}</Badge>
              </div>
              <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
                {post.title}
              </div>
              <div className="text-muted-foreground mb-4 line-clamp-2 text-sm md:mb-5 md:text-base">
                {post.summary}
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="size-12">
                  <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-px">
                  <span className="text-xs font-medium">{post.author}</span>
                  <span className="text-muted-foreground text-xs">
                    {post.published}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center py-2 md:hidden">
          <Button className="w-full sm:w-fit">View all posts</Button>
        </div>
      </div>
    </section>
  );
};

export { Blog4 };
