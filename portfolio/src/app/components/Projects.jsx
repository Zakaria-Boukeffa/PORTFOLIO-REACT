
import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Wildlens",
    image: "/wildlens.png", 
    description: "A computer vision project for wildlife monitoring and recognition.",
    github: "https://github.com/zakaria-boukeffa"
  },
  {
    title: "Bhive",
    image: "/Bhive.png", // Place bhive.png in /public
    description: "AI-powered platform for CV data extraction, candidate recommendation, and employee performance evaluation.",
    github: "https://github.com/zakaria-boukeffa"
  },
  {
    title: "Prediction Model",
    image: "/predicitonmodle.jpg", // Place predicitonmodle.png in /public (note spelling)
    description: "Machine Learning & Deep Learning models for advanced prediction tasks.",
    github: "https://github.com/zakaria-boukeffa"
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <img src={proj.image} alt={proj.title} className="project-image" />
            <h3 className="project-name">{proj.title}</h3>
            <p className="project-desc">{proj.description}</p>
            <a
              href={proj.github}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
