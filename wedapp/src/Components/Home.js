import React from "react";
import BackgroundImg from "../Images/img.jpg";
import Wedding from "./Wedding";
const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          height: "85vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "darken",
        }}
      >
        <div>
          <p
            style={{
              color: "#FFFAFA",
              fontSize: "50px",
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "capitalize",
              paddingTop: "140px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            A trip to India remains incomplete without witnessing the splendor
            of an Indian wedding.
          </p>
          <p
            style={{
              color: "#FFFAFA",
              fontSize: "25px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            WeddingBellsConnect gives travelers the chance <br /> to be on the
            guest list of a genuine cultural celebration.
          </p>
        </div>
      </div>

      <Wedding />
    </>
  );
};

export default Home;
