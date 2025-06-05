import React from "react";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="stars-bg"></div>
      <img src="/moon.png" alt="Moon" className="moon-img" />
      <img src="/boy.png" alt="Boy looking at sky" className="boy-img" />
      <div className="hero-content">
        <h1>
          Aim for the moon,<br />
          even if you miss,<br />
          you'll land among the stars ...
        </h1>

      </div>
    </section>
  );
}

export default HeroSection;
