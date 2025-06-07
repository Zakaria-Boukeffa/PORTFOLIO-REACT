import React from "react";
import "../styles/Contact.css";

const contacts = [
  {
    label: "Email",
    value: "zakaria.boukeffa.3@gmail.com",
    link: "mailto:zakaria.boukeffa.3@gmail.com",
    icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png"
  },
  {
    label: "Phone",
    value: "+33 7 44 42 26 04",
    link: "tel:+33744422604",
    icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png" 
  },
  {
    label: "LinkedIn",
    value: "Zakaria Boukeffa",
    link: "https://www.linkedin.com/in/zakaria-boukeffa-755275348/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
  },
];

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtext">
        Wanna collaborate, ask something, or just say hi ? Contact me:
      </p>
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
      <p className="peace-sign">Peace (; </p>
    </section>
  );
}

export default Contact;
