import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const text = `Hi Kshitij, I am ${form.name}. 
This is my contact email: ${form.email} 
I am contacting you regarding: ${form.message}`;

    const encodedMsg = encodeURIComponent(text);

    window.open(`https://wa.me/919922008673?text=${encodedMsg}`, "_blank");

    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section className="py-5" id="contact">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2>Contact Via WhatsApp</h2>
          <div className="small">Let's build something together</div>
        </div>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-7">
            <div className="card p-4 shadow-sm" data-aos="flip-up">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-primary" type="submit">
                    Send message
                  </button>
                  {sent && (
                    <div className="text-primary">
                      Redirecting to WhatsApp...
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-5">
            <div className="card p-4 shadow-sm h-100" data-aos="flip-up">
              <h3>Contact Info</h3>
              <div className="small mb-3">Email & Phone</div>
              <div className="d-flex flex-column gap-2">
                <a 
                  href="mailto:kshitijhupare07@gmail.com"
                  className="d-flex align-items-center gap-2 text-decoration-none"
                  style={{ fontSize: '1rem' }}
                >
                  <FaEnvelope style={{ fontSize: '1.2rem' }} />
                  <span className="fw-bold">kshitijhupare07@gmail.com</span>
                </a>
                <a 
                  href="tel:+919922008673"
                  className="d-flex align-items-center gap-2 text-decoration-none"
                  style={{ fontSize: '1rem' }}
                >
                  <FaPhone style={{ fontSize: '1.2rem' }} />
                  <span className="fw-bold">+91 99220 08673</span>
                </a>
              </div>

              <div className="small mt-4">Social</div>
              <div className="d-flex gap-2 mt-0 fs-1">
                <a
                  href="https://github.com/Kshitijh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/kshitij-hupare-b11780221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/kshitijhupare?igsh=Y3dieTl3b2k3Mmd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className="mt-3">
                <a
                  className="btn btn-outline-secondary"
                  href="/Kshitij_Hupare_Resume.pdf"
                  download
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
