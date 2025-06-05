import React from "react";
import "../styles/Contact.css";

const contacts = [
  {
    label: "Email",
    value: "zakaria.boukeffa.3@gmail.com",
    link: "mailto:zakaria.boukeffa.3@gmail.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
  },
  {
    label: "Phone",
    value: "+33 7 44 42 26 04",
    link: "tel:+33744422604",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" // Using Apple as a generic phone icon
  },
  {
    label: "LinkedIn",
    value: "zakaria-boukeffa",
    link: "https://www.linkedin.com/in/zakaria-boukeffa-755275348/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
  },
  {
    label: "GitHub",
    value: "zakaria-boukeffa",
    link: "https://github.com/zakaria-boukeffa",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
  }
];

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-list">
        {contacts.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="contact-item"
            target={item.label === "Email" || item.label === "Phone" ? "_self" : "_blank"}
            rel="noopener noreferrer"
          >
            <img src={item.icon} alt={item.label} className="contact-icon" />
            <span className="contact-label">{item.label}:</span>
            <span className="contact-value">{item.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
