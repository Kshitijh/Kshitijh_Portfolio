import React from "react";
import profile from "../assets/ProfilePic.png"; // optional - add your image
import { Card, Button, Row, Col, Badge } from "react-bootstrap";


export default function Hero() {
  return (
    <section className="py-5" id="home">
      <div className="container ">
        <Row className="g-4 align-items-center">
          {/* Left Content */}
          <Col lg={8}>
            <Card className="p-4 shadow-sm " data-aos="flip-left">
              <h1>
                Hi — I'm <span className="text-primary">Kshitij</span>
              </h1>
              <p>
                Recent Computer Science graduate (2024). Passionate about building
                full-stack applications using React, interested in developing 3-tier architecture.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-3">
                <Button variant="primary" href="#projects">See my work</Button>
                <Button variant="outline-secondary" href="#contact">Contact me</Button>
              </div>

              <Row className="mt-3 text-center text-md-start">
                <Col xs={6} md={3}>
                  <div>Location</div>
                  <div className="fw-bold mt-1">India</div>
                </Col>
                <Col xs={6} md={3}>
                  <div>Availability</div>
                  <div className="fw-bold mt-1">Open to work</div>
                </Col>
              </Row>
            </Card>

            <Row className="mt-3 g-3">
              <Col xs={12} md={4}>
                <Card className="p-3 shadow-sm text-center" data-aos="flip-left" data-aos-delay="100">
                  <div>Experience</div>
                  <div className="fw-bold mt-1">Internships + Freelance</div>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="p-3 shadow-sm text-center" data-aos="flip-left" data-aos-delay="200">
                  <div>Top Skill</div>
                  <div className="fw-bold mt-1">React • Python</div>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="p-3 shadow-sm text-center" data-aos="flip-left" data-aos-delay="300">
                  <div>Degree</div>
                  <div className="fw-bold mt-1">B.Tech in CS (2024)</div>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* Profile Card */}
          <Col lg={4}>
            <Card className="p-4 shadow-sm text-center align-items-center hero-right" data-aos="flip-right">
              <img
                src={profile}
                alt="Profile"
                className="rounded-circle mb-3"
                style={{ width: 140, height: 140, objectFit: "cover" }}
              />
              <h3>Kshitij Hupare</h3>
              <p> Full-Stack Developer — React, Python, PyQt</p>
              <Button variant="primary" href="#contact">Get in touch</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
