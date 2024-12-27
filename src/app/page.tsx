import CTA from "./components/cta";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Work from "./components/work";

export default function Home() {
  return (
    <section id="homepage" className="selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <Work />
      <CTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Alex Serban",
            url: "https://reserban.com",
            jobTitle: "Visual and Product Designer",
            description:
              "I'm Alex Serban, a visual and product designer specializing in creating innovative solutions for startups.",
            sameAs: [
              "https://www.linkedin.com/in/alexserban",
              "https://twitter.com/reserban",
              "https://www.behance.net/alexserban",
            ],
          }),
        }}
      />
    </section>
  );
}
