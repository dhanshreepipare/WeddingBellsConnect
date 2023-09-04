import React from "react";
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import facebook from "../Images/facebook.png";
import snapchat from "../Images/snapchat.png";
import twitter from "../Images/twitter.png";
import youtube from "../Images/youtube.png";
import instagram from "../Images/instagram.png";
import paypal from "../Images/paypal.png";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "black", height: "60vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          <Nav.Link
            as={Link}
            style={{
              color: "#FFFAFA",
              fontWeight: "600",
              fontFamily: "Roboto', sans-serif",
              fontSize: "20px",
              marginLeft: "30px",
              marginRight: "30px",
            }}
            to="/"
          >
            <img
              src={Logo}
              alt="footer Logo"
              style={{ borderRadius: "30%", marginRight: "10px" }}
            />
            WeddingBellsConnect
          </Nav.Link>

          <Nav.Link
            as={Link}
            style={{
              color: "#FFFAFA",
              marginLeft: "30px",
              marginRight: "30px",
            }}
            to="/contact"
          >
            CONTACT US
          </Nav.Link>

          <Nav.Link
            as={Link}
            style={{
              color: "#FFFAFA",
              marginLeft: "30px",
              marginRight: "30px",
            }}
            to="/privacy"
          >
            PRIVACY NOTICE
          </Nav.Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "60px",
          }}
        >
          <Nav.Link as={Link} to="https://www.facebook.com/" target="_blank">
            <img
              src={facebook}
              alt="facebook logo"
              style={{ width: "40px", marginLeft: "25px", marginRight: "25px" }}
            />
          </Nav.Link>
          <Nav.Link as={Link} to="https://www.twitter.com/" target="_blank">
            <img
              src={twitter}
              alt="twitter logo"
              style={{ width: "40px", marginLeft: "25px", marginRight: "25px" }}
            />
          </Nav.Link>
          <Nav.Link as={Link} to="https://www.youtube.com/" target="_blank">
            <img
              src={youtube}
              alt="youtube logo"
              style={{ width: "40px", marginLeft: "25px", marginRight: "25px" }}
            />
          </Nav.Link>
          <Nav.Link as={Link} to="https://www.instagram.com/" target="_blank">
            <img
              src={instagram}
              alt="instagram logo"
              style={{ width: "40px", marginLeft: "25px", marginRight: "25px" }}
            />
          </Nav.Link>
          <Nav.Link as={Link} to="https://www.snapchat.com/" target="_blank">
            <img
              src={snapchat}
              alt="snapchat logo"
              style={{ width: "40px", marginLeft: "25px", marginRight: "25px" }}
            />
          </Nav.Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img src={paypal} alt="paypal logo" style={{ width: "80px" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "#fff" }}>
            {" "}
            © 2023 All rights reserved &nbsp; | &nbsp; WeddingBellsConnect
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
