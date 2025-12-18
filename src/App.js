import React, { useEffect } from "react"; // Removed double import and added useEffect
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Snowfall from "react-snowfall"; // Keep this import

export default function App() {
  const theme = "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      {/* 1. Add Snowfall here. Fixed position ensures it stays in the background */}
      <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 1, // Keeps it behind your text/buttons if needed
        }}
        snowflakeCount={150}
      />

      <Navbar />

      {/* Add top padding to avoid overlap with fixed navbar */}
      <main style={{ paddingTop: "15vh", position: "relative", zIndex: 2 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}