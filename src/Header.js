import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
  const yOffset = -80; // height of navbar
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

function Header() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // Keep the navbar visible at all times to prevent layout shifts during scroll transitions

  // Determine active states
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  return (
    <Navbar
      expanded={expanded}
      onToggle={(expand) => setExpanded(expand)}
      expand="lg"
      fixed="top"
      className={`custom-navbar px-4 ${showNavbar ? "show" : "hide"}`}
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand-text" onClick={() => setExpanded(false)}>
          Garcia & J. Smith Therapists
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={isHome && !location.hash ? "active" : ""}
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#services"
              scroll={scrollWithOffset}
              className={location.hash === "#services" ? "active" : ""}
              onClick={() => setExpanded(false)}
            >
              Services
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth
              to="/#about"
              scroll={scrollWithOffset}
              className={location.hash === "#about" ? "active" : ""}
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#contact"
              scroll={scrollWithOffset}
              className={location.hash === "#contact" ? "active" : ""}
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;