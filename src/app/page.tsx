import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import TriangleBg from "@/components/TriangleBg";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <TriangleBg />
      <CustomCursor />
      <main style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Publications />
        <Projects />
        <Skills />
        <Process />
        <Contact />
      </main>
    </>
  );
}
