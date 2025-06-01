import { useState } from "react";
import {
  Container,
  Button,
  Modal,
  Image,
  InputGroup,
  FormControl,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import "animate.css";
import { Link } from "react-router-dom";
import MotivationalQuote from "../../pages/motivationalqoutes/MotivationalQoutes";
export default function Header() {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const upiId = "your-upi-id@bank"; // Replace with your UPI ID
  const paytmQrUrl =
    "https://d3pb9c7cezktlk.cloudfront.net/wp-content/uploads/2015/03/ticketing1.gif"; // Replace with your QR code image URL

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {copied ? "Copied!" : "Copy UPI ID"}
    </Tooltip>
  );

  return (
    <div className="bg-light text-center">
      <MotivationalQuote />
      <Container className="mt-5">
        <h1 className="display-4 fw-bold mb-3">
          Welcome to <span className="text-primary">DoWithMe</span>
        </h1>
        <p className="lead mb-4">
          Boost your productivity and collaborate seamlessly — all in one smart
          platform.
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-4">
          <Button
            as={Link}
            to="/home"
            variant="primary"
            size="lg"
            className="rounded-pill px-5 py-3 shadow-sm fw-semibold"
            style={{
              background: "linear-gradient(90deg, #0d6efd 0%, #6610f2 100%)",
              border: "none",
              transition: "transform 0.2s ease, filter 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            Get Started for Free
          </Button>

          <Button
            variant="outline-primary"
            size="lg"
            className="rounded-pill px-5 py-3 shadow-sm fw-semibold"
            onClick={() => setShowSupportModal(true)}
            style={{
              borderColor: "#0d6efd",
              color: "#0d6efd",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0d6efd";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#0d6efd";
            }}
          >
            Support Us
          </Button>
        </div>

        {/* Support Us Modal */}
        <Modal
          show={showSupportModal}
          onHide={() => setShowSupportModal(false)}
          centered
          dialogClassName="modal-90w"
          backdropClassName="modal-backdrop-fade"
          contentClassName="animate__animated animate__fadeInDown animate__faster"
        >
          <Modal.Header closeButton className="border-0" />
          <Modal.Body className="text-center px-5">
            <h4 className="mb-3 fw-bold text-primary animate__animated animate__zoomIn">
              Support Us with Paytm / UPI
            </h4>
            <p className="mb-4 text-secondary">
              Scan the QR code below or copy the UPI ID to support our platform.
            </p>

            <Image
              src={paytmQrUrl}
              alt="Paytm QR Code"
              fluid
              rounded
              className="animate__animated animate__pulse animate__infinite"
              style={{
                maxWidth: "250px",
                marginBottom: "1.5rem",
                boxShadow: "0 0 20px rgba(13, 110, 253, 0.4)",
              }}
            />

            <InputGroup
              className="mb-3 justify-content-center mx-auto"
              style={{ maxWidth: "300px" }}
            >
              <FormControl
                readOnly
                value={upiId}
                className="text-center fw-semibold"
                style={{ fontSize: "1.1rem" }}
              />
              <OverlayTrigger placement="top" overlay={renderTooltip}>
                <Button variant="outline-primary" onClick={copyToClipboard}>
                  Copy
                </Button>
              </OverlayTrigger>
            </InputGroup>

            <small className="text-muted d-block">
              Thank you for your support! 🙏
            </small>
          </Modal.Body>
        </Modal>

        <style>{`
          .modal-backdrop-fade {
            animation: fadeInBackdrop 0.3s forwards;
            background-color: rgba(13, 110, 253, 0.6) !important;
          }
          @keyframes fadeInBackdrop {
            from {opacity: 0;}
            to {opacity: 1;}
          }
          .modal-content {
            border-radius: 1rem !important;
            box-shadow: 0 10px 30px rgba(13, 110, 253, 0.3);
          }
        `}</style>
      </Container>
    </div>
  );
}
