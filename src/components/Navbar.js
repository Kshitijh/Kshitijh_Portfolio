import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function MyNavbar() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="shadow-sm"
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: 50,
              height: 50,
              borderRadius: 15,
              background: "linear-gradient(135deg, #0d6efd, #00f7ffff)",
              color: "white",
              fontWeight: 700,
            }}
          >
            KH
          </div>
          <div>
            <div className="fw-bold">Kshitij Hupare</div>
            <div>Full-Stack Developer</div>
          </div>
        </Navbar.Brand>

        {/* Hamburger toggle */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            <Button variant="primary" href="#contact">
              Hire Me
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
