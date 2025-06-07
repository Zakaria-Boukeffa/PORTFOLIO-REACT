import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Wildlens",
    image: "/wildlens.png",
    description:
      "A computer vision app that identifies animal footprints and species using deep learning. Built for wildlife researchers and nature conservation programs.",
    tech: ["React", "TensorFlow", "OpenCV", "Flask"],
  },
  {
    title: "Bhive",
    image: "/Bhive.png",
    description:
      "A smart platform that extracts CV data, recommends best-fit candidates for job listings, and evaluates team performance through AI insights.",
    tech: ["Python", "FastAPI", "PostgreSQL", "scikit-learn"],
  },
  {
    title: "Prediction Model",
    image: "/predicitonmodle.jpg",
    description:
      "A suite of machine learning and deep learning models crafted for sales, weather, and behavior prediction across multiple industries.",
    tech: ["Pandas", "Keras", "Matplotlib", "XGBoost"],
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtext">
        A selection of my recent work.
      </p>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image-wrapper">
              <img src={proj.image} alt={proj.title} className="project-image" />
            </div>
            <h3 className="project-name">{proj.title}</h3>
            <p className="project-desc">{proj.description}</p>
            <div className="project-tags">
              {proj.tech.map((tag, i) => (
                <span className="tag" key={i}>#{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="projects-footer">
      Find these projects and more on my
      <a
        className="github-inline"
        href="https://github.com/zakaria-boukeffa"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </p>
    </section>
  );
}

export default Projects;
