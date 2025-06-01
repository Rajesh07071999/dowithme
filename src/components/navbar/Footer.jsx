import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="gy-4">
          {/* Brand & Description */}
          <Col md={4}>
          <img
            src="https://st3.depositphotos.com/5040187/18999/v/450/depositphotos_189998106-stock-illustration-logo-swoosh-ellipse-blue-letter.jpg"
            alt="Logo"
            width="40"
            height="40"
            className="rounded-circle shadow-sm"
            style={{ objectFit: "cover" }}
          />
            <h3 className="text-primary fw-bold mb-3">DoWithMe</h3>
            <p className="text-muted">
              Empowering teams and individuals to collaborate smarter, get organized, and achieve more.
            </p>
          </Col>

          {/* Navigation Links */}
          <Col md={4}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="footer-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Social & Contact */}
          <Col md={4}>
            <h5 className="mb-3">Connect With Us</h5>
            <div className="d-flex gap-3 mb-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="text-muted mb-0">
              © {new Date().getFullYear()} DoWithMe. All rights reserved.
            </p>
          </Col>
        </Row>

        {/* Custom Styles */}
        <style jsx>{`
          .footer-link {
            color: #adb5bd;
            text-decoration: none;
            display: inline-block;
            margin-bottom: 0.5rem;
            transition: color 0.3s ease;
          }
          .footer-link:hover {
            color: #0d6efd; /* Bootstrap primary blue */
            text-decoration: underline;
          }
          .social-icon {
            color: #adb5bd;
            font-size: 1.25rem;
            transition: color 0.3s ease;
          }
          .social-icon:hover {
            color: #0d6efd;
          }
        `}</style>
      </Container>
    </footer>
  );
}
