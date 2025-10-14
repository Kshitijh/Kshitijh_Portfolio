import React from "react";

const skills = ["React",
  "Node.js","JavaScript",
  "Java","IOT",
  "Cloud Technologies",
  "NoSQL",
  "SQL",
  "MySQL",
  "SSMS",
  "Python",
  "Python Libraries",
  "Git",
];

export default function Skills() {
  return (
    <section className="py-5" id="skills">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2>Skills</h2>
        </div>

        <div className="card p-4 shadow-sm">
          <div className="d-flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span key={idx} className="badge bg-secondary text-white p-2">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
