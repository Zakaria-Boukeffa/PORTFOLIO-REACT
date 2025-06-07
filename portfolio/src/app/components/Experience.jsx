import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    role: "AI & Data Science Intern",
    company: "Targech",
    period: "9 March – 30 May",
    logo: "/Targech.jpg",
    description:
      "Designed and implemented ML pipelines, including preprocessing, model training, and evaluation for client-specific datasets."
  },
  {
    role: "AI Engineering & Development Intern",
    company: "Info Jeunes",
    period: "9 June – 28 July",
    logo: "/crij-logo.jpg",
    description:
      "Built and tested AI prototypes focused on recommendation systems and content analysis using NLP models."
  }
];

function Experience() {
  return (
    <section className="projects-section" id="experience">
      <h2 className="projects-title">Experience</h2>
      <p className="projects-subtext">My recent professional experiences.</p>
      <div className="projects-grid">
        {experiences.map((exp, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image-wrapper">
              <img src={exp.logo} alt={exp.company} className="experience-image" />
            </div>
            <h3 className="project-name">{exp.role}</h3>
            <p className="project-desc">{exp.company} — {exp.period}</p>
            <p className="project-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;