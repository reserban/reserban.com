import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const CTA = () => {
  return (
    <section>
      <div className="pt-8 pb-16 mx-auto container-none sm:pb-20 lg:pb-28 lg:pt-12">
        <div className="flex flex-col items-center text-center">
          <h3 className="max-w-3xl mb-4 text-2xl font-semibold sm:mb-2 md:mb-4 md:text-4xl lg:mb-6">
            See it. Love it. Get it!
          </h3>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "default" })}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
