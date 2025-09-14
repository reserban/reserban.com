"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Slash } from "lucide-react";
import { Fragment, useCallback, useMemo, useState } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BreadcrumbItem {
  label: string;
  link: string;
}

interface Post {
  category: string;
  title: string;
  summary: string;
  link: string;
  cta: string;
  thumbnail: string;
}

interface Category {
  label: string;
  value: string;
}

interface FilterFormProps {
  categories: Array<Category>;
  onCategoryChange: (selectedCategories: string[]) => void;
}

interface BlogsResultProps {
  posts: Array<Post>;
  categories: Array<Category>;
}

interface BreadcrumbBlogProps {
  breadcrumb: Array<BreadcrumbItem>;
}

const POSTS_PER_PAGE = 6;

const BREADCRUMB: Array<BreadcrumbItem> = [
  {
    label: "Resources",
    link: "#",
  },
  {
    label: "Reports",
    link: "#",
  },
];

const CATEGORIES: Array<Category> = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Productivity",
    value: "productivity",
  },
  {
    label: "Accessibility",
    value: "accessibility",
  },
  {
    label: "Performance",
    value: "performance",
  },
];

const PRIMARY_POST: Post = {
  category: "Innovation Spotlight",
  title: "How AI is Transforming Frontend Development",
  summary:
    "Explore how tools like GitHub Copilot, AI design generators, and code assistants are changing the way developers build UIs and ship features faster.",
  link: "#",
  cta: "Discover the Future",
  thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
};

const POSTS: Array<Post> = [
  {
    category: "Productivity",
    title: "5 VS Code Extensions That Will Save You Hours",
    summary:
      "Discover must-have extensions to boost your coding efficiency and streamline your workflow.",
    link: "#",
    cta: "Boost Your Editor",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Time Management for Developers: What Really Works",
    summary:
      "Learn proven strategies to avoid burnout and stay on top of your tasks without stress.",
    link: "#",
    cta: "Manage Your Time",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Automate Your Workflow with Task Runners",
    summary:
      "Use tools like Gulp, npm scripts, and GitHub Actions to automate repetitive development tasks.",
    link: "#",
    cta: "Automate Now",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Effective Daily Routines for Developers",
    summary:
      "Discover routines that top developers follow to stay productive, creative, and focused.",
    link: "#",
    cta: "Find Your Flow",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Master Git Like a Pro with These Shortcuts",
    summary:
      "Speed up your version control workflow with powerful Git aliases and tips.",
    link: "#",
    cta: "Speed Up Git",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Reducing Context Switching as a Developer",
    summary:
      "Minimize distractions and deep-dive into your code with focused work practices.",
    link: "#",
    cta: "Stay Focused",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Remote Work Setup: Tools for a Distraction-Free Environment",
    summary:
      "Set up your space and software stack for maximum productivity when working from home.",
    link: "#",
    cta: "Upgrade Your Setup",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Productivity",
    title: "Pomodoro for Coders: Does It Really Work?",
    summary:
      "A practical review of the Pomodoro technique and its effectiveness for software development.",
    link: "#",
    cta: "Try the Method",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Why Accessibility Should Be Part of Your MVP",
    summary:
      "Making your product inclusive from day one improves usability and reach.",
    link: "#",
    cta: "Learn Why",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Using ARIA Roles Correctly in Your Web App",
    summary:
      "Understand how to enhance screen reader support using ARIA roles and landmarks.",
    link: "#",
    cta: "Improve Semantics",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Color Contrast Tips for Better Readability",
    summary:
      "Learn how to choose accessible color combinations that meet WCAG standards.",
    link: "#",
    cta: "Fix Your Colors",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Keyboard Navigation: The Overlooked User Experience",
    summary:
      "Ensure your website is fully usable with just a keyboard, for accessibility and speed.",
    link: "#",
    cta: "Test Navigation",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Accessible Forms: Labels, Errors & Feedback",
    summary:
      "Improve the usability of your forms by ensuring screen readers and users receive clear instructions.",
    link: "#",
    cta: "Fix Your Forms",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Screen Reader Testing: A Beginner's Guide",
    summary:
      "How to test your site with popular screen readers and what to listen for.",
    link: "#",
    cta: "Start Testing",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Inclusive Design Thinking in UI Development",
    summary:
      "Design interfaces that consider users of all abilities from the start.",
    link: "#",
    cta: "Design for All",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Accessibility",
    title: "Accessibility Audits: Tools and Checklists",
    summary:
      "Perform thorough accessibility audits with tools like Axe, Lighthouse, and manual checklists.",
    link: "#",
    cta: "Audit Now",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Lazy Loading Images with Modern HTML",
    summary:
      "Improve load times by using native lazy-loading and fallback strategies for images.",
    link: "#",
    cta: "Optimize Images",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Minifying JavaScript Without Breaking Your App",
    summary:
      "Best practices for minifying and tree-shaking your JS bundles to boost speed.",
    link: "#",
    cta: "Shrink Your Code",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Web Vitals Explained: CLS, LCP, FID",
    summary:
      "Learn how to measure and improve Core Web Vitals for a better user experience.",
    link: "#",
    cta: "Improve Vitals",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Server-Side Rendering vs Client-Side: Which is Faster?",
    summary:
      "Compare SSR and CSR strategies and when to use each for better performance.",
    link: "#",
    cta: "Explore Options",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Optimizing Fonts for Faster Page Loads",
    summary:
      "Learn techniques for loading fonts without blocking rendering or causing layout shifts.",
    link: "#",
    cta: "Speed Up Fonts",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Reduce JavaScript Bundle Size with Code Splitting",
    summary:
      "Use dynamic imports and route-based chunking to reduce initial load time.",
    link: "#",
    cta: "Split It Up",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Caching Strategies for Modern Web Apps",
    summary:
      "Leverage HTTP caching, service workers, and CDNs to improve speed and offline support.",
    link: "#",
    cta: "Cache Smarter",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    category: "Performance",
    title: "Analyzing Performance Bottlenecks with Chrome DevTools",
    summary:
      "Use the Performance tab in DevTools to track down and fix runtime issues in your app.",
    link: "#",
    cta: "Analyze Now",
    thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
];

const FilterFormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.length > 0, {
    message: "At least one category should be selected.",
  }),
});

const FilterForm = ({ categories, onCategoryChange }: FilterFormProps) => {
  const form = useForm<z.infer<typeof FilterFormSchema>>({
    resolver: zodResolver(FilterFormSchema),
    defaultValues: {
      items: [CATEGORIES[0].value],
    },
  });

  const handleCheckboxChange = useCallback(
    (
      checked: boolean | string,
      categoryValue: string,
      field: ControllerRenderProps<z.infer<typeof FilterFormSchema>, "items">,
    ) => {
      let updatedValues = checked
        ? [...field.value, categoryValue]
        : field.value.filter((value: string) => value !== categoryValue);

      // If no categories are checked, add "all"
      if (updatedValues.length === 0) {
        form.setValue("items", ["all"]);
        onCategoryChange(["all"]);
        return;
      }

      // Remove "all" if specific category is checked
      if (updatedValues.includes("all")) {
        updatedValues = updatedValues.filter((v: string) => v !== "all");
      }

      // Avoid unnecessary updates
      if (JSON.stringify(field.value) !== JSON.stringify(updatedValues)) {
        form.setValue("items", updatedValues);
        onCategoryChange(updatedValues);
      }
    },
    [form, onCategoryChange],
  );

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem className="flex w-full flex-wrap items-center gap-2.5">
              {categories.map((category) => {
                const isChecked = field.value?.includes(category.value);
                return (
                  <FormItem
                    key={category.value}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Label className="bg-muted flex cursor-pointer items-center gap-2.5 rounded-full px-2.5 py-1.5">
                        <div>{category.label}</div>
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(checked, category.value, field)
                          }
                        />
                      </Label>
                    </FormControl>
                  </FormItem>
                );
              })}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const ResourcesResult = ({ posts, categories }: BlogsResultProps) => {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    CATEGORIES[0].value,
  ]);
  const handleCategoryChange = useCallback((selected: string[]) => {
    setSelectedCategories(selected);
    setVisibleCount(POSTS_PER_PAGE);
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE);
  }, []);
  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        selectedCategories.includes(post.category.toLowerCase()) ||
        selectedCategories.includes("all"),
    );
  }, [posts, selectedCategories]);

  const postsToDisplay = filteredPosts.length > 0 ? filteredPosts : posts;

  const hasMore = visibleCount < postsToDisplay.length;

  return (
    <div>
      <FilterForm
        categories={categories}
        onCategoryChange={handleCategoryChange}
      />
      <div className="flex w-full flex-col gap-4 py-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {postsToDisplay.slice(0, visibleCount).map((post) => (
            <ResourcesCard key={post.title} {...post} />
          ))}
        </div>
        {hasMore && (
          <Button
            className="w-full"
            variant="secondary"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

const BreadcrumbBlog = ({ breadcrumb }: BreadcrumbBlogProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb.map((item, i) => {
          return (
            <Fragment key={`${item.label}`}>
              <BreadcrumbItem>
                <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
              </BreadcrumbItem>
              {i < breadcrumb.length - 1 ? (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              ) : null}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const EmailFormSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address",
    }),
  })
  .required({ email: true });

const EmailForm = () => {
  const form = useForm<z.infer<typeof EmailFormSchema>>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof EmailFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full">
                  <div className="relative flex w-full flex-col gap-2 lg:block">
                    <Input
                      {...field}
                      type="email"
                      id="emailInput"
                      placeholder="What's your work email?"
                      className="bg-background h-fit py-4 pl-5 pr-5 lg:pr-[13.75rem]"
                    />
                    <div className="right-2.5 top-1/2 lg:absolute lg:-translate-y-1/2">
                      <Button
                        type="submit"
                        className="w-full rounded-full lg:w-fit"
                      >
                        See Company in action
                        <ArrowRight />
                      </Button>
                    </div>
                  </div>
                  <FormMessage className="py-1" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const ResourcesCard = ({
  category,
  title,
  thumbnail,
  summary,
  link,
  cta,
}: Post) => {
  return (
    <a href={link} className="block h-full w-full">
      <Card className="size-full border py-0">
        <CardContent className="p-0">
          <div className="text-muted-foreground border-b p-2.5 text-sm font-medium leading-[1.2]">
            {category}
          </div>
          <AspectRatio ratio={1.520833333} className="overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>
          <div className="flex w-full flex-col gap-5 p-5">
            <h2 className="text-lg font-bold leading-none md:text-2xl">
              {title}
            </h2>
            <div className="w-full max-w-[20rem]">
              <p className="text-foreground text-sm font-medium leading-[1.4]">
                {summary}
              </p>
            </div>
            <div>
              <Badge className="rounded-full">
                {cta}
                <ArrowRight />
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

const Resources1 = () => {
  return (
    <section className="pb-32">
      <div className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat">
        <div className="container flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-col justify-between gap-12">
            <div className="flex w-full max-w-[36rem] flex-col gap-8">
              <BreadcrumbBlog breadcrumb={BREADCRUMB} />
              <div className="flex w-full flex-col gap-5">
                <h1 className="text-[2.5rem] font-semibold leading-[1.2] md:text-5xl lg:text-6xl">
                  Explore Reports
                </h1>
                <p className="text-foreground text-xl font-semibold leading-[1.4]">
                  The best Reports is one that captivates readers with engaging,
                  well-researched content presented in a clear and relatable
                  way.
                </p>
              </div>
              <div className="max-w-[30rem]">
                <EmailForm />
              </div>
            </div>
          </div>
          <div className="w-full max-w-[27.5rem]">
            <ResourcesCard {...PRIMARY_POST} />
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="container flex flex-col gap-8">
          <h2 className="text-[1.75rem] font-medium leading-none md:text-[2.25rem] lg:text-[2rem]">
            All Reports
          </h2>
          <div>
            <ResourcesResult posts={POSTS} categories={CATEGORIES} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Resources1 };
