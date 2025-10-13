import React from "react";

export default function About() {
  return (
    <section className="py-5" id="about">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2>About</h2>
          <div className="small text-muted">A short intro about me</div>
        </div>

        <div className="row g-4">
          {/* Who I am / What I do */}
          <div className="col-md-8">
            <div className="card p-4 shadow-sm">
              <h3>Who I am</h3>
              <p className="text-muted">
                I'm a Computer Science graduate who loves building web apps and desktop GUIs.
                I’ve worked on Qt-based GUIs with Python, web apps with React, and various
                backend services. I enjoy turning designs into pixel-perfect UIs and optimizing
                industrial performances.
              </p>

              <h3 className="mt-3">What I do</h3>
              <ul>
                <li>Front-end development with React (Crafting responsive UI)</li>
                <li>Backend APIs and various databases</li>
                <li>Desktop apps and automation</li>
              </ul>
            </div>
          </div>

          {/* Quick facts */}
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h3>Quick facts</h3>

              <div className="mt-2">
                <div className="small text-muted">Location</div>
                <div className="fw-bold">Maharashtra, India</div>
              </div>

              <div className="mt-3">
                <div className="small text-muted">Education</div>
                <div className="fw-bold">B. Tech, Computer Science & Engineering</div>
              </div>

              <div className="mt-3">
                <div className="small text-muted">Contact</div>
                <div className="fw-bold">
                  <a href="mailto:kshitijhupare07@gmail.com">kshitijhupare07@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
