import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  const form = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_7hs5bq6', 
      'template_7cek4h6', 
      form.current, 
      'BJ77Js9pnE34UFCAp'
    )
    .then(() => {
        setShowSuccess(true);
        e.target.reset(); 
        setTimeout(() => setShowSuccess(false), 4000);
    }, (error) => {
        alert("Failed to send: " + error.text);
    });
  };

  return (
    <div className="landing-page">

      {/* --- Navigation --- */}
      <nav className="navbar">
        <div className="logo-container">
          <img 
            src={process.env.PUBLIC_URL + "/images/velvessa_logo.png"} 
            alt="Velvessa Logo" 
            className="logo-img" 
          />
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#health">Health</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#usage">Usage</a></li>
          <li><a href="#contact" className="nav-cta">Inquiry</a></li>
        </ul>

        <button 
          className="mobile-menu-icon" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* --- Hero Section --- */}
      <header id="home" className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={process.env.PUBLIC_URL + "/images/softflow_logo.png"} 
            alt="SoftFlow" 
            className="product-logo" 
          />
          <h1>Premium Quality Anion Sanitary Pads</h1>
          <p>Experience 8-layer protection designed for ultimate comfort and care.</p>

          <div className="hero-btns">
            <a href="#contact" className="cta-btn primary">Get a Quote</a>
            <a href="#features" className="cta-btn secondary">Learn More</a>
          </div>
        </motion.div>
      </header>

      {/* --- Contact Section --- */}
      <section id="contact" className="contact-section">
        <motion.div className="contact-container" {...fadeInUp}>
          <h2 className="section-title">Business Inquiry</h2>

          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input type="text" name="from_name" placeholder="Full Name" required />
              <input type="tel" name="phone_number" placeholder="Phone Number" required />
            </div>

            <input type="text" name="city" placeholder="City" required />
            <input type="email" name="reply_to" placeholder="Email Address" required />
            <textarea name="message" placeholder="Your Message" rows="5"></textarea>

            <button type="submit" className="submit-btn">
              Send Inquiry
            </button>
          </form>
        </motion.div>
      </section>

      {/* --- Success Popup --- */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            className="success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="success-modal"
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 100 }}
            >
              <div className="success-icon">✓</div>
              <h3>Inquiry Sent!</h3>
              <p>Thank you for contacting Velvessa Hygiene. We will get back to you within 24 hours.</p>
              <button 
                onClick={() => setShowSuccess(false)} 
                className="close-success"
              >
                Great
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer>
        <p><strong>Velvessa Hygiene Enterprises</strong></p>
        <p>XL 280mm | 6 Pads Pack | Extra Absorbent</p>
        <p>© 2026 All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;