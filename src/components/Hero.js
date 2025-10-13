import React from "react";
import profile from "../assets/ProfilePic.png"; // optional - add your image
import { Card, Button, Row, Col, Badge } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="py-5" id="home">
      <div className="container">
        <Row className="g-4 align-items-center">
          {/* Left Content */}
          <Col lg={8}>
            <Card className="p-4 shadow-sm">
              <h1>
                Hi — I'm <span className="text-primary">Kshitij</span>
              </h1>
              <p className="text-muted">
                Recent Computer Science graduate (2024). Passionate about building
                full-stack applications using React, interested in developing 3-tier architecture.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-3">
                <Button variant="primary" href="#projects">See my work</Button>
                <Button variant="outline-secondary" href="#contact">Contact me</Button>
              </div>

              <Row className="mt-3 text-center text-md-start">
                <Col xs={6} md={3}>
                  <div className="small text-muted">Location</div>
                  <div className="fw-bold">India</div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="small text-muted">Availability</div>
                  <div className="fw-bold">Open to work</div>
                </Col>
              </Row>
            </Card>

            <Row className="mt-3 g-3">
              <Col xs={12} md={4}>
                <Card className="p-3 shadow-sm text-center">
                  <div className="small text-muted">Experience</div>
                  <div className="fw-bold mt-1">Internships + Freelance</div>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="p-3 shadow-sm text-center">
                  <div className="small text-muted">Top Skill</div>
                  <div className="fw-bold mt-1">React • Python</div>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="p-3 shadow-sm text-center">
                  <div className="small text-muted">Degree</div>
                  <div className="fw-bold mt-1">B.Tech in CS (2024)</div>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* Profile Card */}
          <Col lg={4}>
            <Card className="p-4 shadow-sm text-center">
              <img
                src={profile}
                alt="Profile"
                className="rounded-circle mb-3"
                style={{ width: 140, height: 140, objectFit: "cover" }}
              />
              <h3>Kshitij Hupare</h3>
              <p className="text-muted">Full-Stack Developer — React, Python, PyQt</p>
              <Button variant="primary" href="#contact">Get in touch</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
