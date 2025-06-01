import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/navbar/Footer.jsx";
import 'animate.css';

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
  InputGroup,
} from "react-bootstrap";
import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <>
      <Navbar />
      <div
        className="py-5 position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        id="contact"
      >
        {/* Background SVG pattern */}
        {/* <svg
          className="position-absolute top-0 start-50 translate-middle-x opacity-10"
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        >
          <circle cx="300" cy="200" r="300" fill="#0d6efd" />
        </svg> */}

        <Container style={{ zIndex: 10 }}>
          <Row className="mb-5 text-center fade-in">
            <Col>
             <h2 className="fw-bold display-4">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="text-muted fs-5">
                Have questions? Feedback? Or just want to say hello? We're all
                ears!
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center gy-4">
            {/* Contact Info Panel */}
            <Col md={4} className="text-center text-md-start fade-in delay-1">
              <Card className="shadow border-0 rounded-4 p-4 h-100 hover-card">
                <h4 className="mb-4 text-primary">Contact Info</h4>

                <p className="d-flex align-items-center gap-3 mb-3 fs-5 text-secondary">
                  <FiMapPin size={24} />
                  1234 Collaboration St, Suite 100, City, Country
                </p>
                <p className="d-flex align-items-center gap-3 mb-3 fs-5 text-secondary">
                  <FiPhone size={24} />
                  +1 (234) 567-8901
                </p>
                <p className="d-flex align-items-center gap-3 mb-4 fs-5 text-secondary">
                  <FiMail size={24} />
                  support@dowithme.com
                </p>

                <div className="d-flex gap-3 justify-content-center justify-content-md-start fs-3 text-primary">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover-opacity"
                  >
                    <FiFacebook />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="hover-opacity"
                  >
                    <FiTwitter />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover-opacity"
                  >
                    <FiInstagram />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover-opacity"
                  >
                    <FiLinkedin />
                  </a>
                </div>
              </Card>
            </Col>

            {/* Contact Form */}
            <Col md={8} className="fade-in delay-2">
              <Card className="shadow border-0 rounded-4 p-4 hover-card">
                {submitted && (
                  <Alert
                    variant="success"
                    onClose={() => setSubmitted(false)}
                    dismissible
                    className="mb-4"
                  >
                    Thanks for reaching out! We'll get back to you soon.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Label className="fw-semibold">Full Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-white border-end-0 rounded-start-3">
                        <FiUser />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="rounded-end-3 border-start-0"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Label className="fw-semibold">
                      Email Address
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-white border-end-0 rounded-start-3">
                        <FiMail />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        required
                        className="rounded-end-3 border-start-0"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label className="fw-semibold">Message</Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-white border-end-0 rounded-start-3 align-items-start pt-2">
                        <FiMessageSquare />
                      </InputGroup.Text>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        placeholder="Write your message here..."
                        required
                        className="rounded-end-3 border-start-0"
                      />
                    </InputGroup>
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      className="px-5 py-3 rounded-pill"
                    >
                      Send Message 🚀
                    </Button>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>

          {/* CTA Banner before footer */}
          <Row className="mt-5">
            <Col>
              <Card className="text-center py-4 px-3 bg-dark text-white rounded-4 shadow-lg hover-card">
                <h4>Need immediate assistance?</h4>
                <p className="mb-3 fs-5">
                  Call us now at{" "}
                  <a href="tel:+12345678901" className="text-white fw-bold">
                    +1 (234) 567-8901
                  </a>
                </p>
                <Button
                  variant="light"
                  size="lg"
                  href="tel:+12345678901"
                  className="rounded-pill px-4"
                >
                  Call Now
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
      <style>{`
        a.hover-opacity:hover {
          opacity: 0.7;
          transition: opacity 0.3s ease;
          color: #0d6efd !important;
        }
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(13, 110, 253, 0.3);
        }
        /* fade in animation */
        .fade-in {
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
        }
        .delay-1 {
          animation-delay: 0.2s;
        }
        .delay-2 {
          animation-delay: 0.4s;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
