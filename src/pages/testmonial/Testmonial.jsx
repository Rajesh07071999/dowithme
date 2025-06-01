import { Container, Row, Col, Image } from "react-bootstrap";
import 'animate.css';

export default function Testimonials() {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Priya, Team Lead",
      quote:
        "DoWithMe revolutionized how my remote team works together. The real-time updates are a game-changer!",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Mark, Project Manager",
      quote:
        "The task boards and integrated chat save us hours every week. Highly recommended for busy teams.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Lena, Designer",
      quote:
        "Intuitive, fast, and really brings the team together. I love how simple and effective it is.",
    },
  ];

  return (
    <div className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold mb-5 text-center display-6">
          What Our <span className="text-primary">Users</span> Are Saying
        </h2>
        <Row className="g-4 justify-content-center">
          {testimonials.map(({ img, name, quote }, idx) => (
            <Col md={4} key={idx}>
              <div
                className={`p-4 bg-white rounded shadow-sm h-100 d-flex flex-column animate__animated animate__fadeInUp`}
                style={{
                  animationDelay: `${idx * 0.3}s`,
                  animationFillMode: "both",
                  transition: "transform 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }}
              >
                <Image
                  src={img}
                  roundedCircle
                  width={72}
                  height={72}
                  alt={name}
                  className="mx-auto mb-3"
                />
                <p className="fst-italic flex-grow-1" style={{ fontSize: "1.1rem" }}>
                  “{quote}”
                </p>
                <h6 className="text-center text-primary mt-3">{name}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
