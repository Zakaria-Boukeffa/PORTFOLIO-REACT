import React from "react";
import "../styles/Education.css";

const schools = [
  {
    name: "Jean Jaurès",
    degree: "Licence Informatique",
    details: "Université Jean Jaurès"
  },
  {
    name: "EPSI",
    degree: "Bachelor Développement IA",
    details: "École Privée des Sciences Informatiques"
  },
  {
    name: "Anesia",
    degree: "Classe Préparatoire (2 ans)",
    details: "Anesia"
  }
];

function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>
      <div className="education-stack">
        {schools.map((school, idx) => (
          <div className="education-card" key={idx}>
            <div className="education-blank-img" />
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
