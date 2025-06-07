import React from "react";
import "../styles/Education.css";

const schools = [
  {
    name: "Université Jean Jaurès",
    degree: "Licence Informatique SHS",
    details: "University of Toulouse Jean Jaurès — 2025 to 2026",
    logo: "/jean-jaures.jpg"
  },

  {
    name: "EPSI",
    degree: "Bachelor in AI & Data Science",
    details: "Private School of Computer Science — 2024 to 2025",
    logo: "/epsi.jpg"
  },
  {
    name: "ENSIA",
    degree: "2-year Preparatory Class in Computer Science & Mathematics",
    details: "National Higher School of Artificial Intelligence — 2021 to 2023",
    logo: "/ensia.jpg"
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>
      <p className="education-subtext">Academic education.</p>
      <div className="education-stack">
        {schools.map((school, idx) => (
          <div className="education-card" key={idx}>
            <img src={school.logo} alt={school.name} className="education-logo" />
            <div className="education-info">
              <h3 className="education-name">{school.name}</h3>
              <span className="education-degree">{school.degree}</span>
              <p className="education-details">{school.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;