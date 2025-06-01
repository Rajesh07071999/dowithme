import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Your components
import Navigation from "./components/navbar/Navbar.jsx";
import Header from "./components/navbar/Header.jsx";
import BannerSelection from "./components/navbar/Carousel.jsx";
import Features from "./pages/features/Features.jsx";
import Reviews from "./pages/reviews/Reviews.jsx";
import Testimonials from "./pages/testmonial/Testmonial.jsx";
import Faq from "./pages/faq/Faq.jsx";
import Footer from "./components/navbar/Footer.jsx";
import Meetteams from "./pages/meetteam/Meetteam.jsx";
import ContactUs from "./pages/contactus/Contactus.jsx";
import WelcomeHomePage from "./pages/home/Home.jsx"; 
import SnakeGame from "./pages/Games/Snake.jsx";

function HomePage() {
  return (
    <>
      <Navigation />
      <Header />
      <BannerSelection />
      <Features />
      <Reviews />
      <Testimonials />
      <Faq />
      <Meetteams />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<WelcomeHomePage />} />
        <Route path="/contact-now" element={<ContactUs />} />
        <Route path="/home/games" element={<SnakeGame />} />

        {/* Add more routes like /signup etc as you build */}
      </Routes>
    </Router>
  );
}

export default App;
