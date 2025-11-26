import React from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaJsSquare, 
  FaJava, 
  FaCloud, 
  FaDatabase, 
  FaPython, 
  FaGitAlt 
} from "react-icons/fa";
import { SiMysql, SiMicrosoftsqlserver as SiMssql } from "react-icons/si";
import { IoHardwareChip } from "react-icons/io5";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "Java", icon: <FaJava /> },
  { name: "IOT", icon: <IoHardwareChip /> },
  { name: "Cloud Technologies", icon: <FaCloud /> },
  { name: "NoSQL", icon: <FaDatabase /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "SSMS", icon: <FaDatabase /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Python Libraries", icon: <FaPython /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function Skills() {
  return (
    <section className="py-5" id="skills">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2>Skills</h2>
        </div>

        <div className="card p-4 shadow-sm" data-aos="flip-up">
          <div className="d-flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span key={idx} className="badge bg-secondary text-white p-2 d-flex align-items-center gap-2" style={{ fontSize: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
