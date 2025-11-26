import React from "react";

const experiences = [
  {
    company: "Cybernetik Technologies (Python Dev.)",
    role: "Frontend / GUI Development",
    duration: "Dec 2024 - Present",
    desc: "Worked on development of firmware for Battery Management System (BMS), Also built 6+ industrial live monitoring dashboards, developed backend with real-time control."
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "2024 - Present",
    desc: "Built small business websites and integrated payment & reporting systems.",
  },
  {
    company: "Vijesha IT Services LLP",
    role: "AI Engineer",
    duration: "2024",
    desc: "Implemented data-frame handling models & Developed a recommendation system using collaborative filtering.",
  }
];

export default function Experience() {
  return (
    <section className="py-5" id="experience">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2> Experience</h2>
        </div>

        <div className="row g-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="col-md-12">
              <div className="card p-4 shadow-sm" data-aos="flip-up" data-aos-delay={idx * 100}>
                <div className="row">
                  {/* Left: Company & Duration */}
                  <div className="col-md-3 text-muted">
                    <div className="fw-bold">{exp.company}</div>
                    <div>{exp.duration}</div>
                  </div>

                  {/* Right: Role & Description */}
                  <div className="col-md-9 mt-2 mt-md-0">
                    <div className="fw-bold">{exp.role}</div>
                    <div>{exp.desc}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
