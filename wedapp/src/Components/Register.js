import React from "react";
import loginimg from "../Images/img4.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import img2 from "../Images/img2.jpg";

const Register = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHover, setIsHover] = useState(false);

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
              Register your wedding
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
                  width: "20vw",
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
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          paddingTop: "30px",
          backgroundColor: "#DCDCDC",
          paddingLeft: "180px",
          paddingBottom: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
            width: "70vw",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontFamily: "'Hind', sans-serif",
              fontWeight: "bold",
              paddingLeft: "20px",
              paddingTop: "20px",
            }}
          >
            Register your wedding
          </p>
          <div
            style={{
              fontFamily: "'Hind', sans-serif",
              textAlign: "start",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingBottom: "10px",
              fontWeight: "200",
              lineHeight: "1.7",
              fontSize: "16px",
            }}
          >
            <p style={{ fontWeight: "400", fontSize: "25px" }}>
              Start by creating your listing. Add your wedding details. Make
              sure you include essential and exciting hints about your wedding
              that might interest your future guests.
            </p>
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>
              Please note:
              <p style={{ fontWeight: "400" }}>
                &#x2022; Listing your wedding is free.
                <br />
                &#x2022; The exact location of your wedding and your details
                will only be revealed to people who book for your wedding via
                our secure &nbsp;&nbsp;&nbsp;website.
                <br />
                &#x2022; Before we publish your listing, we will contact you to
                confirm that all details are correct.
                <br />
                &#x2022; In order to facilitate registration for the couples, we
                allow their third party representative to register the wedding
                on behalf of the &nbsp;&nbsp;&nbsp;couple, however, please note
                that JMW reserves the right to contact the couple directly for
                the purposes associated with the &nbsp;&nbsp;&nbsp;services of
                JMW, including confirmation of information provided, payment
                details.
              </p>
            </div>
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>
              It's easy to register.
              <p style={{ fontWeight: "400" }}>
                Registration takes about 10 minutes. We will ask about your
                story and details of your wedding in 5 easy steps.
              </p>
            </div>
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>
              What’s in a listing?
              <p style={{ fontWeight: "400" }}>
                You will fill out a short questionnaire about yourself and your
                partner, as well as about your wedding events and ceremonies.
                You will be asked to upload a photo or even a video to enrich
                your listing. All this helps WeddingBellsConnect guests get a
                sense of what your wedding will be like.
              </p>
            </div>
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>
              Ceremony Guide
              <p style={{ fontWeight: "400" }}>
                On the registration form, you will be asked to nominate a
                trusted person who will be able to help your guests on your
                wedding day and prior to the wedding
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
              width: "70vw",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontFamily: "'Hind', sans-serif",
                fontWeight: "bold",
                paddingLeft: "20px",
                paddingTop: "20px",
              }}
            >
              Guests find your listing and book
            </p>
            <p
              style={{
                fontFamily: "'Hind', sans-serif",
                textAlign: "start",
                paddingLeft: "20px",
                paddingRight: "10px",
                paddingBottom: "10px",
                lineHeight: "1.7",
                fontWeight: "400",
                fontSize: "25px",
              }}
            >
              You’ll get notified via email once a booking is made for your
              wedding, including guest details. We encourage you to make contact
              with your guests prior to the wedding.
            </p>
            <div
              style={{
                backgroundColor: "white",
                boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
                width: "70vw",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "'Hind', sans-serif",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingTop: "20px",
                }}
              >
                Celebrate with your guests
              </p>
              <p
                style={{
                  fontFamily: "'Hind', sans-serif",
                  textAlign: "start",
                  paddingLeft: "20px",
                  paddingRight: "10px",
                  paddingBottom: "10px",
                  lineHeight: "1.7",
                  fontWeight: "400",
                  fontSize: "25px",
                }}
              >
                Greet your guests and share with them your culture and
                traditions as you enjoy and cherish every second of this
                life-changing experience.
              </p>
              <div
                style={{
                  backgroundColor: "white",
                  boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
                  width: "70vw",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "'Hind', sans-serif",
                    fontWeight: "bold",
                    paddingLeft: "20px",
                    paddingTop: "20px",
                  }}
                >
                  Receive your wedding gift
                </p>
                <p
                  p
                  style={{
                    fontFamily: "'Hind', sans-serif",
                    textAlign: "start",
                    paddingLeft: "20px",
                    paddingRight: "10px",
                    paddingBottom: "10px",
                    lineHeight: "1.7",
                    fontWeight: "400",
                    fontSize: "25px",
                  }}
                >
                  Contributions from travelers will be collected at the time of
                  booking and transferred to you a few days after you start your
                  joint journey as a married couple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
