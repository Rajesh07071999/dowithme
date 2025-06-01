import { Container, Row, Col, Card } from "react-bootstrap";
import "animate.css";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQGo7pzJrII3Qg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732736952270?e=2147483647&v=beta&t=ndrBNlfHpd8IqVgxELGe7BkwXvI_WFSJV4xyphQ_qpE",
  },
  {
    name: "Anita Singh",
    role: "Product Manager",
    photo: "https://cdn.goenhance.ai/user/2024/07/19/c0c1400b-abc2-4541-a849-a7e4f361d28d_0.jpg",
  },
  {
    name: "Mark Wilson",
    role: "Lead Developer",
    photo: "https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltb5d92757ac1ee045/blt6febe1b9cfa042d4/66deef653016646da05c0c72/resize-4.jpeg",
  },
];

export default function Team() {
  return (
    <div className="py-5 bg-white text-center">
      <Container>
        <h2 className="fw-bold mb-4 display-6">
          Meet the <span className="text-primary">DoWithMe</span> Team
        </h2>
        <p className="mb-5 text-muted">
          Passionate minds building a platform that makes collaboration effortless.
        </p>
        <Row className="g-4 justify-content-center">
          {teamMembers.map(({ name, role, photo }, i) => (
            <Col key={i} md={4} sm={6}>
              <Card
                className="h-100 shadow-sm border-0 team-card animate__animated animate__fadeInUp"
                style={{ animationDelay: `${i * 0.15}s` }} // stagger animations
              >
                <div style={{ overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={photo}
                    alt={name}
                    style={{
                      objectFit: "cover",
                      height: "300px",
                      transition: "transform 0.3s ease",
                    }}
                    className="team-image"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-semibold fs-5 mb-1">{name}</Card.Title>
                  <Card.Text className="text-muted">{role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .team-card:hover .team-image {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
