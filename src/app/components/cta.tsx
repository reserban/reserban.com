import Link from "next/link";

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
            className="inline-flex items-center justify-center text-black h-10 px-3 py-1.5 sm:px-4 sm:py-2 text-sm duration-500 font-medium transition-colors rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-muted hover:bg-muted/80"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
