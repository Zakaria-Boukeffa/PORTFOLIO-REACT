import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import About from "./components/About";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        {/* Other sections will go here */}
        <div style={{ height: "200vh", background: "#222" }}>
          {/* Temporary content for scrolling */}
        </div>
      </main>
    </>
  );
}

export default Home;