import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    role: "Computer Vision Developer",
    company: "Wildlens",
    period: "2023 – Present",
    description: "Developed and deployed AI models for wildlife monitoring, including real-time detection and tracking solutions."
  },
  {
    role: "AI Engineer Intern",
    company: "Bhive",
    period: "2023",
    description: "Built and optimized NLP pipelines for CV parsing and candidate ranking in a production SaaS platform."
  },
  {
    role: "ML/DL Developer",
    company: "Freelance",
    period: "2022 – Present",
    description: "Delivered custom machine learning models for clients, including predictive analytics and computer vision tasks."
  }
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <div className="experience-blank-img" />
            <div className="experience-details">
              <h3 className="experience-role">{exp.role}</h3>
              <span className="experience-company">{exp.company}</span>
              <span className="experience-period">{exp.period}</span>
              <p className="experience-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
