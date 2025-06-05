import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import HeroSection from "./components/HeroSection";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <div style={{ height: "200vh", background: "#222" }}>
        </div>
      </main>
    </>
  );
}

export default Home;