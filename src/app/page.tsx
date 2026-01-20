import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Projects />
      <About />
      <Skills />
    </main>
  );
}
