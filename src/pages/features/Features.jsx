import { Container, Row, Col } from 'react-bootstrap';
import { BsPeopleFill, BsClipboardCheck, BsChatDotsFill } from 'react-icons/bs';
import 'animate.css';

export default function Features() {
  const features = [
    {
      icon: <BsPeopleFill size={48} className="text-primary mb-3" />,
      title: "Real-Time Collaboration",
      description:
        "Co-edit tasks, share updates instantly, and stay aligned with your team — whether you're across the office or across the globe.",
    },
    {
      icon: <BsClipboardCheck size={48} className="text-success mb-3" />,
      title: "Smart Task Management",
      description:
        "Easily assign, prioritize, and monitor tasks. Visual boards and automated reminders help you stay focused and on track.",
    },
    {
      icon: <BsChatDotsFill size={48} className="text-info mb-3" />,
      title: "Integrated Team Chat",
      description:
        "Keep conversations in context with real-time messaging. No need to switch apps — chat is built right into your workspace.",
    },
  ];

  return (
    <div className="py-5 bg-light text-center">
      <Container>
        <h2 className="fw-bold mb-4 display-6">
          Why Choose <span className="text-primary">DoWithMe</span>?
        </h2>
        <p className="mb-5 text-muted">
          DoWithMe empowers individuals and teams to work together efficiently and stay on top of what matters most.
        </p>

        <Row className="g-4">
          {features.map(({ icon, title, description }, idx) => (
            <Col
              md={4}
              key={idx}
              className="animate__animated animate__fadeInDown"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="p-4 bg-white rounded shadow-sm h-100">
                {icon}
                <h5 className="fw-bold">{title}</h5>
                <p className="text-muted">{description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
