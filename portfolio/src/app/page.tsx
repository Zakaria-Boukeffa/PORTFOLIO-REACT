import styles from "./page.module.css";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      {/* Other sections will go here */}
      <div style={{ height: "200vh", background: "#222" }}>
        {/* Temporary content to make scrolling possible */}
      </div>
    </>
  );
}

export default Home;