import Hero from "../components/pages/hero";
import Navbar from "../components/pages/navbar";
import FAQ from "@/components/pages/faq";
import Footer from "@/components/pages/footer";
import Process from "@/components/pages/process";
import Testimonial from "@/components/pages/testimonial";
import Values from "@/components/pages/values";
import StickyCat from "@/components/ui/sticky-cat";

export default function Home() {
  return (
    <section id="homepage">
      <Navbar />
      <Hero />
      <Values />
      <Process />
      <Testimonial />
      <FAQ />
      <Footer />
      <StickyCat />
    </section>
  );
}
