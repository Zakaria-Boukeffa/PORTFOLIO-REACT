'use client'
import React, { useEffect, useRef } from "react";
import "../styles/HeroSection.css";

function HeroSection() {
  const moonRef = useRef(null);
  const quoteRef = useRef(null);
  const canvasRef = useRef(null);

  // Star animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let animationFrameId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStars() {
    stars = [];
    const starCount = Math.floor(window.innerWidth / 2);
        for (let i = 0; i < starCount; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 0.8 + 0.2,
            speed: Math.random() * 0.15 + 0.05,
            direction: Math.random() < 0.5 ? 1 : -1, // left or right
            opacity: Math.random() * 0.7 + 0.3
        });
      }
    }

    
    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 4;
        ctx.fill();
        // Move star left or right
        star.x += star.speed * star.direction;
        // Wrap around
        if (star.direction === 1 && star.x > canvas.width) {
          star.x = 0;
          star.y = Math.random() * canvas.height;
        }
        if (star.direction === -1 && star.x < 0) {
          star.x = canvas.width;
          star.y = Math.random() * canvas.height;
        }
      }
      animationFrameId = requestAnimationFrame(animateStars);
    }

    resizeCanvas();
    createStars();
    animateStars();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createStars();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Parallax effect for moon and quote
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const moonMove = Math.min(scrollY * 0.6, 100);
      if (moonRef.current) {
        moonRef.current.style.transform = `translateY(${moonMove}px)`;
      }
      const quoteMove = Math.min(scrollY * 0.3, 85);
      if (quoteRef.current) {
        quoteRef.current.style.transform = `translateY(${quoteMove}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* Animated stars canvas */}
      <canvas
        ref={canvasRef}
        className="stars-canvas"
        aria-hidden="true"
        tabIndex={-1}
      />
      {/* Very faint background image, 0.1 opacity */}
      <div className="stars-bg-img"></div>
      <img ref={moonRef} src="/moon.png" alt="Moon" className="moon-img" />
      <img src="/boy.png" alt="Boy looking at sky" className="boy-img" />
      <div className="hero-content quote-overlay" ref={quoteRef}>
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
