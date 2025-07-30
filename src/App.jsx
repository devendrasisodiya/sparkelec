import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div className="website">
      {/* Floating WhatsApp Button */}
<a 
  href="https://wa.me/917974351206" 
  className="whatsapp-float" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <i className="fab fa-whatsapp whatsapp-icon"></i>
</a>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">Spark<span>Elec</span></a>
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact" className="cta-button">Get Quote</a>
        </div>
        
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Professional Electrical Services You Can Trust</h1>
          <p>24/7 emergency services with certified electricians serving your area for over 15 years</p>
          <div className="hero-buttons">
            <a href="#contact" className="primary-button">Book Now</a>
            <a href="tel:+917974351206" className="secondary-button">
              <i className="fas fa-phone"></i> Call Now
            </a>
          </div>
        </div>
        <div className="hero-image">
  <img 
    src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    alt="Professional electrician repairing home wiring" 
  />
</div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: '⚡',
      title: 'Electrical Repairs',
      description: 'Fast and reliable repair services for all electrical issues'
    },
    {
      icon: '🏠',
      title: 'Home Wiring',
      description: 'Complete home wiring solutions with safety certification'
    },
    {
      icon: '💡',
      title: 'Lighting Installation',
      description: 'Modern lighting solutions for homes and offices'
    },
    {
      icon: '🔌',
      title: 'Appliance Setup',
      description: 'Professional installation of all electrical appliances'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our <span>Services</span></h2>
        <p className="section-subtitle">Quality electrical services for residential and commercial properties</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="learn-more">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Certified Electricians',
      description: 'All our technicians are licensed and certified'
    },
    {
      title: '24/7 Availability',
      description: 'Emergency services available round the clock'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden charges - know the cost upfront'
    },
    {
      title: 'Quality Guarantee',
      description: 'We stand behind our work with a satisfaction guarantee'
    }
  ];

  return (
    <section id="why-us" className="why-us">
      <div className="container">
       <div className="why-us-image">
  <img 
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    alt="Two electricians working together on an installation" 
  />
</div>
        <div className="why-us-content">
          <h2 className="section-title">Why <span>Choose Us</span></h2>
          <p className="section-subtitle">We go above and beyond for every client</p>
          
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>
                <div className="feature-bullet">{index + 1}</div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Homeowner, Mumbai',
      quote: 'Fixed my wiring issue in 30 minutes flat! Professional and courteous service.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Business Owner, Delhi',
      quote: 'They installed our office lighting perfectly. Will definitely use them again!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Happy <span>Customers</span></h2>
        <p className="section-subtitle">What our clients say about our services</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className="quote">"{testimonial.quote}"</p>
              <div className="author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add current date/time to form data
    const formData = new FormData(form.current);
    formData.append('time', new Date().toLocaleString());

    emailjs.sendForm(
      'service_tfli55b',
      'template_8qaa6mu',
      form.current,
      'NAIEiyAXEy3njum7X'
    )
    .then((result) => {
      setMessage({ text: 'Message sent successfully!', type: 'success' });
      form.current.reset();
      window.location.href = '/thank-you';
    }, (error) => {
      setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-form-container">
          <h2>Get a <span>Free Quote</span></h2>
          <p>Fill out the form and we'll get back to you within 24 hours</p>
          
          {message.text && (
            <div className={`message ${message.type}`}>{message.text}</div>
          )}
          
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Full Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email Address" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                name="mobile" 
                placeholder="Mobile Number (with country code)" 
                required 
                pattern="[0-9]{10,15}"
                title="Please enter a valid mobile number"
              />
            </div>
            <div className="form-group">
              <select name="service" required>
                <option value="">-- Select Required Service --</option>
                <option value="Electrical Repairs">Electrical Repairs</option>
                <option value="Home Wiring">Home Wiring</option>
                <option value="Lighting Installation">Lighting Installation</option>
                <option value="Appliance Setup">Appliance Setup</option>
                <option value="Other">Other Electrical Service</option>
              </select>
            </div>
            <div className="form-group">
              <textarea 
                name="description" 
                placeholder="Please describe your electrical needs in detail..." 
                required
                rows="5"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="submit-button"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              ) : (
                'Request Free Quote'
              )}
            </button>
          </form>
        </div>
        
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <h4>24/7 Emergency</h4>
              <a href="tel:+917974351206">+91 79743 51206</a>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <a href="mailto:sisodiyadevendra84@gmail.com">sisodiyadevendra84@gmail.com</a>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Address</h4>
              <p>• Indore</p>
              <p style={{ fontSize: '0.9em', color: '#ffff' }}>
                Kalindi Gold Colony Sanwer Road Indore [M.P.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <a href="/" className="logo">Spark<span>Elec</span></a>
            <p>Providing top-quality electrical services since 2008. Licensed, insured, and committed to excellence.</p>
            
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#">Electrical Repairs</a></li>
              <li><a href="#">Home Wiring</a></li>
              <li><a href="#">Lighting Installation</a></li>
              <li><a href="#">Appliance Setup</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SparkElec. All Rights Reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <div className="checkmark-animation">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        <h1>Thank You!</h1>
        <p>Your request has been submitted successfully.</p>
        <p>Our team will contact you within 24 hours.</p>
        <a href="/" className="home-button">Back to Home</a>
      </div>
    </div>
  );
};

export default App;