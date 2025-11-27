import React from "react";

const projects = [
    {
    company: "BMS Activation & Battery Testing Validation (EOL)",
    desc: "Developed Battery Management System activation, Firmware development, and EOL testing validation for electric vehicle batteries.",
    skills: ["Kevsar-CAN module", "Logic & Algorithm", "Python-CANlib","PyModbus"]
  },
  {
    company: "Digital shopping trolley",
    desc: "Created an IOT based digital shopping cart/trolley to reduce the waiting time at the billing desk.",
    skills: ["Processors", "AWS", "sensors", "MongoDB"]
  },
  {
    company: "Portfolio Website",
    desc: "This responsive React portfolio (the one you're viewing). Built from scratch with CSS variables and a light/dark theme.",
    skills: ["React.js", "Node.js"]
  },
  
  {
    company: "Textile Web-App",
    desc: "Developed a web application to automate inventory management, marketing, and sales.",
    skills: ["AWS EC2", "Django","MongoDB", "JavaScript"]
  }
];

export default function Projects() {
  return (
    <section className="py-5" id="projects">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2> Projects</h2>
        </div>

        <div className="row g-4">
          {projects.map((proj, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="card h-100 p-3 shadow-sm" data-aos="flip-up" data-aos-delay={idx * 100}>
                <div className="fw-bold">{proj.company}</div>
                <div>{proj.duration}</div>
                <div className="mt-2">{proj.role}</div>
                <div>{proj.desc}</div>

                {/* Skill Capsules */}
                <div className="mt-3 d-flex flex-wrap gap-2">
                  {proj.skills.map((skill, i) => (
                    <span key={i} className="badge bg-secondary text-white p-2">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
