import Navbar from "@/components/pages/navbar";
import Footer from "@/components/pages/footer";
import Work from "@/components/pages/work";

export default function Home() {
  return (
    <section id="homepage">
      <Navbar />
      <Work />
      <Footer />
    </section>
  );
}
