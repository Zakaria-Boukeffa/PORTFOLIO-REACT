import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />

      </main>
    </>
  );
}

export default Home;