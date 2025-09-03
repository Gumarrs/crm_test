import Hero from "./components/Hero";
import About from "./components/About";
import VillaStudios from "./components/VillaStudios";
import Facilities from "./components/Facilities";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import CtaBanner from "./components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VillaStudios />
      <Facilities />
      <Testimonials />
      <Gallery />
      <CtaBanner />
    </>
  );
}
