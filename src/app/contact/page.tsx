import Contact from "../components/contact";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <section id="homepage" className="selection:bg-black selection:text-white">
      <Navbar />
      <Contact />
    </section>
  );
}
