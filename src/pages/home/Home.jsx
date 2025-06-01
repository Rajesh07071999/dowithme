import Navbar from "../../components/navbar/Navbar.jsx";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "animate.css";
import Footer from "../../components/navbar/Footer.jsx";
import VoiceInput from "../voice/VoiceInput.jsx";
import MarkdownEditor from "../pdf/PdfMaker.jsx";
export default function WelcomePage() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning 🌅");
    else if (hour < 17) setGreeting("Good Afternoon ☀️");
    else setGreeting("Good Evening 🌇");
  }, []);

  return (
    <>
      <Navbar />
      <section
        className="min-vh-100 d-flex align-items-center bg-light py-5"
        style={{
          background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
        }}
      >
        <Container>
          <Row className="align-items-center gy-5">
            {/* Welcome Text */}
            <Col
              lg={6}
              className="text-center text-lg-start animate__animated animate__fadeInLeft"
            >
              <h1 className="fw-bold display-4 text-primary mb-3">
                {greeting}, Welcome to{" "}
                <span className="text-dark">DoWithMe</span> 👋
              </h1>
              <p className="lead text-muted">
                We're thrilled to have you here! Let’s kickstart your journey
                toward smarter collaboration and goal success.
              </p>
              <div className="d-flex gap-3 mt-4 animate__animated animate__fadeInUp">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-pill px-4"
                >
                  Explore Now 🚀
                </Button>
              </div>
            </Col>

            {/* Welcome Image */}
            <Col
              lg={6}
              className="text-center animate__animated animate__zoomIn"
            >
              <img
                src="https://img.freepik.com/free-vector/welcome-concept-illustration_114360-27447.jpg?semt=ais_hybrid&w=740"
                alt="Welcome to DoWithMe"
                className="img-fluid rounded-4 shadow-sm"
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <VoiceInput />
            </Col>
          </Row>

          <Row>
            <Col>
              <MarkdownEditor />
            </Col>
          </Row>
          {/* Live Cricket Score Section */}
          <Row className="mt-3 justify-content-center">
            <Col lg={12}>
              <Card className="p-4 shadow border-0 rounded-4 text-center bg-white">
                <h4 className="text-success mb-3">🏏 Live Cricket Score</h4>
                <iframe
                  src="https://widget.crictimes.org/"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  scrolling="no"
                  title="Live Cricket Score"
                  style={{ borderRadius: "12px" }}
                ></iframe>
                <p className="text-muted mt-3">
                  Stay updated with the latest live scores, right here!
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          .lead {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
