import { Carousel, Container } from "react-bootstrap";
import "animate.css";

export default function BannerSelection() {
  return (
    <div className="bg-dark py-4 mt-5">
      <Container>
        <Carousel fade interval={5000} pause="hover">
          {carouselData.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-image-wrapper">
                <img
                  className="d-block w-100 carousel-image"
                  src={item.image}
                  alt={item.alt}
                />
                <div className="carousel-overlay" />
              </div>
              <Carousel.Caption
                className="carousel-caption-style animate__animated animate__fadeInUp"
              >
                <h3 className="text-white fw-bold">{item.title}</h3>
                <p className="text-light">{item.subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

const carouselData = [
  {
    image:
      "https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg",
    alt: "Team collaboration",
    title: "Empower Team Collaboration",
    subtitle: "Communicate, plan, and execute with clarity and efficiency.",
  },
  {
    image:
      "https://st4.depositphotos.com/13194036/31587/i/450/depositphotos_315873928-stock-photo-selective-focus-happy-businessman-glasses.jpg",
    alt: "Goal tracking",
    title: "Track Progress With Ease",
    subtitle: "Stay aligned on objectives and measure what matters most.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/young-businesswoman-with-co-workers_1098-1776.jpg",
    alt: "Remote work",
    title: "Work From Anywhere",
    subtitle: "Stay productive and connected — wherever you are.",
  },
];
