import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { News } from "@/components/sections/News";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <News />
        <Contact />
      </main>
    </>
  );
}
