import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <section id="homepage" className="selection:bg-black selection:text-white">
      <Navbar />

      <Footer />
    </section>
  );
}
