import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    role: "AI Engineering & Development Intern",
    company: "Info Jeunes",
    period: "9 June – 28 July 2025",
    logo: "/crij-logo.jpg",
    description:
      "Built and tested AI prototypes focused on recommendation systems and content analysis using NLP models."
  },
  {
    role: "AI & Data Science Intern",
    company: "Targech",
    period: "9 March – 30 May 2025",
    logo: "/Targech.jpg",
    description:
      "Designed and implemented ML pipelines, including preprocessing, model training, and evaluation for client-specific datasets."
  }
  
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>
      <p className="experience-subtext">My recent professional experiences.</p>
      <div className="experience-grid">
        {experiences.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <div className="experience-image-wrapper">
              <img
                src={exp.logo}
                alt={exp.company}
                className="experience-image"
              />
            </div>
            <h3 className="experience-role">{exp.role}</h3>
            <p className="experience-company">{exp.company} — {exp.period}</p>
            <p className="experience-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
