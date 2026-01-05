import React from "react";

export default function Education() {
  return (
    <section className="py-5" id="education">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2>Education</h2>
        </div>

        <div className="row g-4">
          {/* Degree */}
          <div className="col-md-6 col-lg-4">
            <div className="card p-4 shadow-sm h-100" data-aos="flip-up">
              <h3>B.Tech — Computer Science and Engineering</h3>
              <div className="small">2020 - 2024</div>
              <div className="fw-bold mt-2">CGPA: 8.68</div>
              <p className="mt-2">
                Completed core computer science subjects from Walchand Institute of technology and worked on various projects in IOT, web development, Cloud technologies and desktop GUI designs.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="col-md-6 col-lg-4">
            <div className="card p-4 shadow-sm h-100" data-aos="flip-up" data-aos-delay="100">
              <h3>Certifications</h3>
              <div className="small">Relevant online Certificates</div>
              <ul className="mt-2 certifications-list">
                <li><a href="https://drive.google.com/file/d/12Mi7cppjJu9lUQgDcf-mGWn89_cFdadU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cert-link">.NET Full Stack Developer Certification</a></li>
                <li><a href="https://drive.google.com/file/d/1LYlgVU0nfE9d8WACnrcLgUtOHCiF8_RE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cert-link">Artificial Intelligence Primer Certification</a></li>
                <li><a href="https://drive.google.com/file/d/1EY1n-5GVo7Wi_kvjZ35wYS02vCXuNxlU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cert-link">DevOps Foundation Certification</a></li>
                <li><a href="https://drive.google.com/file/d/1LXzJ9J_B-ca29KjxH_wr4lbvDaDp3NRA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cert-link">Python Programmer Certification</a></li>
                <li><a href="https://drive.google.com/file/d/1nUJFxZbD-LPXQunZpQHw5pG60zLRELZQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cert-link">Java Foundation Certification</a></li>
              </ul>
            </div>
          </div>

          {/* Courses */}
          <div className="col-md-6 col-lg-4">
            <div className="card p-4 shadow-sm h-100" data-aos="flip-up" data-aos-delay="200">
              <h3>Courses</h3>
              <div className="small">Relevant Courses</div>
              <ul className="mt-2">
                <li>Python Data Structures and Algorithms</li>
                <li>Introduction to Robotic Process Automation</li>
                <li>Introduction to NLP</li>
                <li>Continuous Integration and Delivery - DevOps</li>
                <li>Introduction to Data Science</li>
                <li>Computer Vision 101</li>
                <li>AWS Certified Solution Architect - Associate</li>
                <li>(RHCSA) RedHat Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
