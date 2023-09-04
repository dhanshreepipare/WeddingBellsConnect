import React from "react";
import profile from "../Images/profile.jpg";

const Contact = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#BC8F8F",
          height: "35vh",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            paddingTop: "35px",
          }}
        >
          CONTACT US
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "Roboto', sans-serif",
          }}
        >
          Who are we?
        </p>
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
            backgroundColor: "#fff",
            boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
            width: "70vw",
            height: "30vh",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontFamily: "'Hind', sans-serif",
              fontWeight: "bold",
              paddingLeft: "20px",
              paddingTop: "15px",
            }}
          >
            CONTACT
          </p>
          <p
            style={{
              fontFamily: "'Hind', sans-serif",
              textAlign: "start",
              paddingLeft: "20px",
              paddingRight: "10px",
              paddingBottom: "10px",
              fontWeight: "200",
              lineHeight: "1.7",
              fontSize: "16px",
            }}
          >
            Whether you want to find a wedding to join, open your wedding up to
            travelers, or even if you just want to say hi, drop us a line.{" "}
            <b style={{ color: "#FF69B4", textDecoration: "underline" }}>
              contact@weddingbellsconnect.com
            </b>
          </p>
        </div>
      </div>
      <div
        style={{
          paddingTop: "10px",
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
            height: "50vh",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontFamily: "'Hind', sans-serif",
              fontWeight: "bold",
              paddingLeft: "20px",
              paddingTop: "15px",
            }}
          >
            FOUNDERS
          </p>
          <div
            style={{
              fontFamily: "'Hind', sans-serif",
              textAlign: "start",
              paddingLeft: "40px",
              paddingRight: "10px",
              paddingBottom: "10px",
              fontWeight: "200",
              fontSize: "16px",
            }}
          >
            <img
              src={profile}
              alt="profile pic"
              style={{ width: "60px", borderRadius: "50%" }}
            />
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Dhanshree Pipare{" "}
            </div>
            <p>
              Co-Founder <br /> India
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingTop: "10px",
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
            height: "40vh",
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
            OUR MISSION
          </p>
          <p
            p
            style={{
              fontFamily: "'Hind', sans-serif",
              textAlign: "start",
              paddingLeft: "30px",
              paddingRight: "10px",
              paddingBottom: "10px",
              fontWeight: "300",
              fontSize: "40px",
            }}
          >
            We invite people to share their culture and connect through life
            events.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
