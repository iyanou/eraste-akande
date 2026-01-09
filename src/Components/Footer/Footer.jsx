// Footer.jsx
import { useState } from 'react';
import { Linkedin, Mail, Github, MapPin, Phone, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check when user has scrolled enough to show back to top button
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 300);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" role="contentinfo" aria-label="Site footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <h3>Iyanou Eraste AKANDE</h3>
            <p className="footer-tagline">Data Engineer | Elasticsearch Consultant | Trainer</p>
            <p className="footer-description">
              Expert in data engineering and Elasticsearch technologies, offering consulting 
              and training services to optimize your data solutions.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/iyanou-eraste-akande/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/iyanou" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                <Github size={20} />
              </a>
              <a href="mailto:eraste.akande@gmail.com" aria-label="Email" className="social-icon">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                <li><a href="/services/data-engineering">Data Engineering</a></li>
                <li><a href="/services/elasticsearch-consulting">Elasticsearch Consulting</a></li>
                <li><a href="/services/elasticsearch-training">Elasticsearch Training</a></li>
                <li><a href="/services/data-analysis">Data Analysis</a></li>
                <li><a href="/services/big-data">Big Data Solutions</a></li>
              </ul>
            </div>

            <div className="footer-links-column footer-contact">
              <h4>Contact</h4>
              <ul>
                <li>
                  <MapPin size={16} />
                  <span>Morocco</span>
                </li>
                <li>
                  <Phone size={16} />
                  <span>+212 658 15 28 58</span>
                </li>
                <li>
                  <Mail size={16} />
                  <span>eraste.akande@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Iyanou Eraste AKANDE. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          </div>
        </div>
      </div>

      <button 
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;