import Navbar from "../components/navbar";
import About from "../components/about";

export default function Home() {
  return (
    <section id="homepage" className="selection:bg-black selection:text-white">
      <Navbar />
      <About />
    </section>
  );
}
