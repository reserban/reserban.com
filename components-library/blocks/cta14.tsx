import { Button } from "@/components/ui/button";

const Cta14 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex h-[620px] items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0)),url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg')] bg-cover bg-center">
          <div className="flex flex-col gap-8 p-4 text-center">
            <h2 className="text-primary-foreground text-5xl font-bold">
              Start your free trial today.
            </h2>
            <p className="text-primary-foreground text-lg">
              Start with a 14-day free trial. No credit card required. No setup
              fees. Cancel anytime.
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg" variant="default">
                Get Started
              </Button>
              <Button size="lg" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta14 };
