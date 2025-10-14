import React from "react";

const projects = [
  {
    company: "Cybernetik Technologies (Python Dev.)",
    role: "Frontend / GUI Development",
    duration: "Dec 2024 - Present",
    desc: "Worked on development of firmware for Battery Management System (BMS), Also built 6+ industrial live monitoring dashboards, developed backend with real-time control.",
    skills: ["React", "Python", "Dashboard", "Backend"]
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "2024 - Present",
    desc: "Built small business websites and integrated payment & reporting systems.",
    skills: ["React", "Node.js", "SQL", "Payment Integration"]
  },
  {
    company: "Vijesha IT Services LLP",
    role: "AI Engineer",
    duration: "2024",
    desc: "Implemented data-frame handling models & Developed a recommendation system using collaborative filtering.",
    skills: ["Python", "AI", "Machine Learning", "Recommendation Systems"]
  }
];

export default function Projects() {
  return (
    <section className="py-5" id="projects">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2> Projects</h2>
          <div className="small"> Work and personal projects</div>
        </div>

        <div className="row g-4">
          {projects.map((proj, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="card h-100 p-3 shadow-sm">
                <div className="fw-bold">{proj.company}</div>
                <div>{proj.duration}</div>
                <div className="mt-2">{proj.role}</div>
                <div>{proj.desc}</div>

                {/* Skill Capsules */}
                <div className="mt-3 d-flex flex-wrap gap-2">
                  {proj.skills.map((skill, i) => (
                    <span key={i} className="badge bg-primary">{skill}</span>
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
