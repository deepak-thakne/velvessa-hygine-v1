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

      {/* --- Health & Hygiene Section --- */}
      <section id="health" className="health-info">
        <motion.div className="container" {...fadeInUp}>
          <h2 className="section-title">🌸 माहवारी स्वच्छता (Menstrual Hygiene)</h2>
          <div className="health-grid">
            <div className="health-card">
              <h3>1. मासिक धर्म चक्र (Menstrual Cycle)</h3>
              <p>मासिक धर्म चक्र एक प्राकृतिक प्रक्रिया है जो महिलाओं के शरीर में हार्मोनल परिवर्तनों के कारण होती है। यह आमतौर पर 21 से 35 दिनों का होता है और इसमें कई चरण होते हैं। मासिक धर्म के दौरान, गर्भाशय की परत रक्त और ऊतकों के रूप में शरीर से बाहर निकलती है।</p>
            </div>
            <div className="health-card">
              <h3>2. सैनिटरी पैड का महत्व</h3>
              <p>पीरियड्स (मासिक धर्म) महिलाओं के जीवन का एक अनिवार्य हिस्सा है। यह एक प्राकृतिक प्रक्रिया है, जिसके दौरान सही स्वच्छता प्रबंधन बहुत आवश्यक है। सैनिटरी पैड इसी स्वच्छता को बनाए रखने का सबसे सरल और प्रभावी तरीका है। सही पैड का उपयोग न केवल शारीरिक बल्कि मानसिक रूप से भी महिलाओं को सशक्त करता है।</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- Technical Mechanics Section --- */}
      <section className="how-it-works">
        <motion.div className="container" {...fadeInUp}>
          <h2 className="section-title">⚙️ सैनिटरी पैड की कार्यप्रणाली (How it Works)</h2>
          <p className="section-subtitle">सैनिटरी पैड उन्नत तकनीकों का उपयोग करके बनाए जाते हैं जो प्रभावी अवशोषण प्रदान करते हैं:</p>
          <div className="tech-flex">
            <div className="tech-item">
              <div className="tech-icon">💧</div>
              <h4>अवशोषण परत</h4>
              <p>पैड में एक केंद्रीय अवशोषण परत होती है जो मासिक धर्म के प्रवाह को तुरंत सोख लेती है और सतह को सूखा रखती है।</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">🛡️</div>
              <h4>रिसाव रहित परत</h4>
              <p>पैड के नीचे एक विशेष परत होती है जो रिसाव को रोकती है और आपको सूखा रखती है, जिससे आप बेझिझक चल सकें।</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">☁️</div>
              <h4>आराम और फिट</h4>
              <p>आधुनिक पैड नरम सामग्री से बने होते हैं जो त्वचा के लिए सहज हैं और हर प्रकार के शरीर को फिट होते हैं।</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 8-Layer Technology Section --- */}
      <section className="layers-section">
        <motion.div className="container" {...fadeInUp}>
          <h2 className="section-title">🛡️ 8-Layer Advanced Protection</h2>
          <p className="section-subtitle">हमारा 8-परत वाला डिज़ाइन आपको दिन भर सुरक्षित और सूखा महसूस कराता है:</p>
          
          <div className="layers-container">
            <div className="layers-visual">
              {[
                { layer: "8", title: "Release Paper (Adhesive Back)", desc: "This is the back adhesive protection sheet.It helps stick the pad securely to underwear and is removed before use." },
                { layer: "7", title: "Breathable Bottom Layer", desc: "Comfortable and breathable base layer.It allows airflow and prevents skin irritation." },
                { layer: "6", title: "Air-Laid Paper (Second Wrap)", desc: "Another air-laid paper layer.It supports the SAP layer and improves liquid distribution." },
                { layer: "5", title: "Super Absorbent Polymer (SAP)", desc: "This is the main absorbing layer.It locks the liquid into gel form and prevents wetness from coming back to the surface." },
                { layer: "4", title: "Balanced Padding Layer", desc: "Unique and exclusive padding design.It balances absorption properly and helps prevent side leakage." },
                { layer: "3", title: " Air-Laid Paper", desc: "Soft air-laid paper wrapped layer.It helps distribute the liquid evenly to the inner layers." },
                { layer: "2", title: "Green Anion Chip", desc: "This layer contains the green anion chip.It helps improve anti-bacterial protection and reduces odor, keeping hygiene better during use." },
                { layer: "1", title: "Top Sheet (Surface Layer)", desc: "Thin silk + soft cotton fast absorption surface This layer touches the skin and quickly absorbs liquid (up to 3 times faster), keeping the surface dry and comfortable." }
              ].map((item, index) => (
                <motion.div 
                  className="layer-bar" 
                  key={index}
                  whileHover={{ x: 10, backgroundColor: "#fce4ec" }}
                >
                  <span className="layer-number">{item.layer}</span>
                  <div className="layer-info">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- Features Section --- */}
      <section id="features" className="features">
        <motion.h2 className="section-title" {...fadeInUp}>Why Choose SoftFlow?</motion.h2>
        <div className="feature-grid">
          {[
            { icon: "🛡️", title: "8-Layer Protection", text: "Advanced leak-proof technology with SAP Gel absorption." },
            { icon: "🌿", title: "Anion Chip", text: "Antibacterial properties to regulate flow and reduce odor." },
            { icon: "☁️", title: "Cottony Soft", text: "Ultra-thin design with breathable layers for skin health." }
          ].map((item, index) => (
            <motion.div 
              className="feature-card" 
              key={index}
              whileHover={{ y: -10 }}
              {...fadeInUp}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Product Choice Section --- */}
      <section className="product-choice">
        <motion.div className="container" {...fadeInUp}>
          <div className="choice-card">
            <h3>4. सैनिटरी पैड के प्रकार और सही चुनाव</h3>
            <p className="choice-description">
              <strong>SoftFlow</strong> विभिन्न आवश्यकताओं के अनुरूप कई प्रकार के पैड प्रदान करती है: 
              अल्ट्रा-थिन, रेगुलर, ओवरनाइट जो विभिन्न प्रवाह और आराम की जरूरतों को पूरा करते हैं। 
              वर्तमान पीढ़ी के लिए, <b>अल्ट्रा-थिन पैड with anti bacterial anion chip</b> सबसे उपयुक्त हैं, 
              जो सक्रिय जीवनशैली के साथ सहज रहें।
            </p>

            <div className="anion-benefits-grid">
              <div className="anion-benefit-item">
                <div className="benefit-icon">🦠</div>
                <h5>Anti-Bacterial</h5>
                <p>बैक्टीरिया को खत्म कर संक्रमण से बचाता है।</p>
              </div>
              <div className="anion-benefit-item">
                <div className="benefit-icon">🍃</div>
                <h5>Odor Control</h5>
                <p>अप्रिय गंध (odor) को प्राकृतिक रूप से दूर करता है।</p>
              </div>
              <div className="anion-benefit-item">
                <div className="benefit-icon">⚡</div>
                <h5>Energy Boost</h5>
                <p>तनाव कम करने और ऊर्जा बढ़ाने में सहायक।</p>
              </div>
              <div className="anion-benefit-item">
                <div className="benefit-icon">🩸</div>
                <h5>Flow Balance</h5>
                <p>मासिक धर्म के प्रवाह को संतुलित रखने में मदद करता है।</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- Usage Section --- */}
      <section id="usage" className="usage-section">
        <motion.h2 className="section-title" {...fadeInUp}>How to Use SoftFlow Pads</motion.h2>
        <div className="usage-grid">
          {[1,2,3,4,5,6,7,8].map((num) => (
            <div className="step" key={num}>
              <span>{num}</span>
              <p>{["Peel off tape", "Peel off pad", "Open wings", "Enfold edge", "Wrap in paper", "Roll and seal", "Throw in bin", "Do not flush"][num-1]}</p>
            </div>
          ))}
        </div>
      </section>

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

      {/* --- Floating WhatsApp Button --- */}
      <a 
        href="https://wa.me/+919516843223?text=Hi%20Velvessa%20Hygiene,%20I'm%20interested%20in%20SoftFlow%20sanitary%20pads." 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div className="whatsapp-content">
          <span className="whatsapp-text">Chat with us</span>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
          />
        </div>
      </a>
    </div>
  );
}

export default App;