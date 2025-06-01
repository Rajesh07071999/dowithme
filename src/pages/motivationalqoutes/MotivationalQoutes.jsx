import { useEffect, useState } from "react";
import { Card, Spinner, Button } from "react-bootstrap";
import { FaQuoteLeft, FaRedo } from "react-icons/fa";
import "animate.css";

export default function MotivationalQuote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animateQuote, setAnimateQuote] = useState(false);

  const quotes = [
    { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { content: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { content: "You are capable of amazing things.", author: "DoWithMe" },
    { content: "Dream big and dare to fail.", author: "Norman Vaughan" },
    // Add more if you want
  ];

  const fetchQuote = () => {
    setLoading(true);
    setAnimateQuote(false); // reset animation
    setTimeout(() => {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(random);
      setLoading(false);
      setAnimateQuote(true); // trigger animation
    }, 500);
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      className="p-5 shadow-lg border-0 rounded-5 bg-white"
      style={{
        background: "linear-gradient(135deg, #e0f7fa 0%, #f1f8ff 100%)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
      }}
    >
      {loading ? (
        <div className="text-center py-4">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <>
          <h4 className="fw-bold text-center text-primary mb-4 animate__animated animate__fadeInDown">
            ✨ Daily Motivation
          </h4>

          <div className="d-flex align-items-start mb-3">
            <FaQuoteLeft
              className={`text-primary fs-2 me-2 animate__animated ${
                animateQuote ? "animate__bounce" : ""
              }`}
              style={{ animationDuration: "1.5s" }}
            />
            <h5
              className={`fw-semibold mb-0 animate__animated ${
                animateQuote ? "animate__fadeInRight" : ""
              }`}
              style={{ animationDuration: "1s" }}
            >
              {quote?.content}
            </h5>
          </div>
          <p
            className={`text-end fst-italic text-muted animate__animated ${
              animateQuote ? "animate__fadeInLeft" : ""
            }`}
            style={{ animationDuration: "1s", animationDelay: "0.3s" }}
          >
            — {quote?.author}
          </p>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata"
            style={{ border: 0 }}
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            title="Indian Public Holidays"
          />
        </>
      )}

      <div className="text-end mt-3">
        <Button
          onClick={fetchQuote}
          variant="outline-primary"
          className="rounded-pill px-4 py-2 shadow-sm animate__animated"
          style={{
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0d6efd";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.classList.add("animate__pulse");
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#0d6efd";
            e.currentTarget.classList.remove("animate__pulse");
          }}
        >
          <FaRedo className="me-2" />
          Inspire Me Again
        </Button>
      </div>
    </Card>
  );
}
