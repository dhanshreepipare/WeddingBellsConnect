import React from "react";
import loginimg from "../Images/img4.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import img2 from "../Images/img2.jpg";

const Login = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isHov, setIsHov] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseEnterR = () => {
    setIsHover(true);
  };

  const handleMouseLeaveR = () => {
    setIsHover(false);
  };

  const handleMouseEnterB = () => {
    setIsHov(true);
  };

  const handleMouseLeaveB = () => {
    setIsHov(false);
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img2})`,
          height: "85vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingLeft: "100px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            <img src={loginimg} alt="loginimg" style={{ width: "35vw" }} />
          </div>
          <div>
            <p
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "30px",
                fontFamily: "'Hind', sans-serif",
                paddingTop: "70px",
                paddingLeft: "150px",
              }}
            >
              Login to your account
            </p>

            <Nav.Link
              eventKey="6"
              as={Link}
              to="https://www.facebook.com/"
              style={{
                display: "flex",
                width: "30vw",
                border: "none",
                borderRadius: "3px",
                fontWeight: "500",
                paddingLeft: "16px",
                paddingTop: "7px",
                paddingBottom: "7px",
                fontSize: "22px",
                marginLeft: "150px",
                textAlign: "center",
                backgroundColor: isHovering ? "#DCDCDC" : "#4267b3",
                color: isHovering ? "#000" : "#fff",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Nav.Link
                as={Link}
                to="https://www.facebook.com/"
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  fontFamily: "'Roboto', sans-serif",
                  paddingLeft: "15px",
                  paddingRight: "60px",
                }}
              >
                f
              </Nav.Link>
              Continue with Facebook
            </Nav.Link>

            <p
              style={{
                fontSize: "15px",
                paddingLeft: "150px",
                paddingTop: "22px",
              }}
            >
              Not yet registered?
            </p>
            <div style={{ display: "flex", paddingLeft: "150px" }}>
              <Nav.Link
                eventKey="6"
                as={Link}
                to="/register"
                style={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  textAlign: "center",
                  marginRight: "15px",
                  width: "15vw",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "500",
                  fontSize: "16px",
                  backgroundColor: isHover ? "#FFE4E1" : "#BC8F8F",
                  color: isHover ? "#000" : "#fff",
                }}
                onMouseEnter={handleMouseEnterR}
                onMouseLeave={handleMouseLeaveR}
              >
                Register a wedding
              </Nav.Link>
              <Nav.Link
                eventKey="6"
                as={Link}
                to="/wedding"
                style={{
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  textAlign: "center",
                  marginRight: "15px",
                  width: "15vw",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "500",
                  fontSize: "16px",
                  backgroundColor: isHov ? "#FFE4E1" : "#BC8F8F",
                  color: isHov ? "#000" : "#fff",
                }}
                onMouseEnter={handleMouseEnterB}
                onMouseLeave={handleMouseLeaveB}
              >
                Book a wedding
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
