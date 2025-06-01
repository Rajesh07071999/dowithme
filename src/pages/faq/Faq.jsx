import { Container, Accordion } from 'react-bootstrap';

export default function FAQ() {
  return (
    <div className="py-5 bg-white">
      <Container>
        <h2 className="fw-bold mb-4 text-center display-6">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is DoWithMe?</Accordion.Header>
            <Accordion.Body>
              DoWithMe is a collaborative productivity platform designed to help teams manage tasks, communicate seamlessly, and achieve goals together in real time.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Is there a free plan available?</Accordion.Header>
            <Accordion.Body>
              Yes! We offer a free plan that includes core features like task management, team chat, and limited projects so you can get started risk-free.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I upgrade my plan later?</Accordion.Header>
            <Accordion.Body>
              Absolutely. You can upgrade or change your subscription at any time to access additional features and increased limits.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Is my data secure?</Accordion.Header>
            <Accordion.Body>
              Security is our priority. We use industry-standard encryption and best practices to keep your data safe and private.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>How do I contact support?</Accordion.Header>
            <Accordion.Body>
              You can reach our support team anytime via the Contact Us page, or email us directly at support@dowithme.com.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
