import CTA from "../components/pages/cta";
import Hero from "../components/pages/hero";
import Navbar from "../components/pages/navbar";
import Work from "../components/pages/work";

export default function Home() {
  return (
    <section id="homepage">
      <Navbar />
      <Hero />
      <Work />
      <CTA />
    </section>
  );
}
