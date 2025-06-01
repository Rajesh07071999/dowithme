import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import "../../App.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const profileImg =
  "https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Show second nav only on specific pages, e.g. '/home'
  const showSecondaryNav = location.pathname === "/home";

  // React Spring animation styles for secondary nav
  const animation = useSpring({
    height: open && showSecondaryNav ? '60px' : '0px',
    opacity: open && showSecondaryNav ? 1 : 0,
    transform: open && showSecondaryNav ? `translateY(0)` : `translateY(-20px)`,
    config: { tension: 250, friction: 25 },
  });

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="shadow-sm"
      >
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="fw-bold fs-4 d-flex align-items-center gap-2"
          >
            <img
              src="https://st3.depositphotos.com/5040187/18999/v/450/depositphotos_189998106-stock-illustration-logo-swoosh-ellipse-blue-letter.jpg"
              alt="Logo"
              width="40"
              height="40"
              className="rounded-circle shadow-sm"
              style={{ objectFit: "cover" }}
            />
            <span>
              <span className="text-primary">Do</span>WithMe
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/home" className="mx-2 nav-link">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact-now" className="mx-2 nav-link">
                Contact Us
              </Nav.Link>

              {/* <NavDropdown
                title={
                  <img
                    src={profileImg}
                    alt="profile"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #fff",
                    }}
                  />
                }
                id="nav-profile-dropdown"
                align="end"
                className="ms-3"
              >
                <NavDropdown.Item href="#action/1">My Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3">Logout</NavDropdown.Item>
              </NavDropdown> */}

              {showSecondaryNav && (
                <Button
                  variant="outline-light"
                  size="sm"
                  className="ms-3"
                  onClick={() => setOpen(!open)}
                  aria-controls="secondary-nav"
                  aria-expanded={open}
                >
                  More Options
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Animated secondary nav */}
      <animated.div
        style={{
          overflow: "hidden",
          ...animation,
          background:
            "linear-gradient(90deg, rgba(78,84,200,1) 0%, rgba(143,148,251,1) 100%)",
          position: "sticky",
          top: "56px",
          zIndex: 1030,
        }}
        id="secondary-nav"
      >
        <Container className="h-100 d-flex align-items-center">
          <Nav className="justify-content-center w-100">
            {["Games", "option2", "option3"].map((opt) => (
              <Nav.Link
                key={opt}
                as={NavLink}
                to={`/home/${opt}`}
                className="text-white mx-3 secondary-nav-link"
              >
                {opt.charAt(0).toUpperCase() + opt.slice(1).replace(/\d/, '')}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </animated.div>

      <style>{`
        .secondary-nav-link {
          position: relative;
          font-weight: 600;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }
        .secondary-nav-link::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -5px;
          left: 0;
          background: white;
          transition: width 0.3s ease;
          border-radius: 3px;
        }
        .secondary-nav-link:hover,
        .secondary-nav-link.active {
          color: #f0f0f0;
        }
        .secondary-nav-link:hover::after,
        .secondary-nav-link.active::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
