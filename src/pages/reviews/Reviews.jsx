import { Container, Row, Col, Image } from 'react-bootstrap';
import { BsCheckCircleFill } from 'react-icons/bs';
import 'animate.css';

export default function AppPreview() {
  return (
    <div className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* IMAGE */}
          <Col 
            md={6} 
            className="order-md-2 mb-4 mb-md-0 animate__animated animate__fadeInRight"
            style={{ animationDuration: '1s' }}
          >
            <Image
              src="https://img.freepik.com/free-photo/photo-pleased-mixed-race-women-get-good-news-mobile-phone-recieve-email-make-selfie-with-smart-phone-drink-fresh-cocktails-cafeteria_273609-3328.jpg?semt=ais_hybrid&w=740"
              alt="DoWithMe App Preview"
              fluid
              rounded
              className="shadow-lg"
              style={{ 
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            />
          </Col>

          {/* TEXT SECTION */}
          <Col 
            md={6} 
            className="order-md-1 animate__animated animate__fadeInLeft"
            style={{ animationDuration: '1s' }}
          >
            <h2 className="fw-bold mb-3 display-6">
              Everything You Need in <span className="text-primary">One Place</span>
            </h2>
            <p className="text-muted mb-4">
              DoWithMe makes teamwork effortless — track progress, collaborate on tasks, and chat in real time, all within a single unified workspace.
            </p>

            <ul className="list-unstyled text-start">
              {[
                "Clean drag & drop task management",
                "Visual timelines & deadline tracking",
                "Group and private chats in context",
                "Optimized for both desktop and mobile",
              ].map((text, idx) => (
                <li 
                  key={idx} 
                  className="d-flex align-items-start mb-3"
                  style={{ animation: `bounceIn 0.8s ease forwards`, animationDelay: `${idx * 0.2 + 1}s`, opacity: 0 }}
                  onAnimationEnd={e => e.currentTarget.style.opacity = 1}
                >
                  <BsCheckCircleFill className="text-success me-2 mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
