import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Images/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        style={{ backgroundColor: "#000" }}
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand to="/" as={Link}>
            <img
              src={Logo}
              alt="LogoImg"
              style={{ borderRadius: "30%", marginRight: "10px" }}
            />
            WeddingBellsConnect
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            data-bs-target="#responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ marginLeft: " 150px", textAlign: "end" }}>
              <Nav.Link
                eventKey="1"
                as={Link}
                to="/"
                style={{
                  marginRight: "25px",
                  color: "#FFFAFA",
                }}
              >
                HOME
              </Nav.Link>

              <Nav.Link
                eventKey="3"
                as={Link}
                to="/wedding"
                style={{ marginRight: "25px", color: "#FFFAFA" }}
              >
                WEDDINGS
              </Nav.Link>

              <Nav.Link
                eventKey="2"
                as={Link}
                to="/contact"
                style={{ marginRight: "25px", color: "#FFFAFA" }}
              >
                CONTACT US
              </Nav.Link>
              <Nav.Link
                eventKey="5"
                as={Link}
                to="/faq"
                style={{ marginRight: "25px", color: "#FFFAFA" }}
              >
                FAQ
              </Nav.Link>
              <Nav.Link
                eventKey="6"
                as={Link}
                to="/login"
                style={{
                  marginRight: "25px",
                  color: "#FFFAFA",
                }}
              >
                LOGIN
              </Nav.Link>
              <Nav.Link
                eventKey="6"
                as={Link}
                to="/register"
                style={{
                  marginLeft: "25px",
                  color: "#000",
                  textAlign: "center",
                  width: "150px",
                  border: "none",
                  borderRadius: "7px",
                  fontWeight: "500",
                  backgroundColor: isHovering ? "#FFE4E1" : "#FFC0CB",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                REGISTER
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
