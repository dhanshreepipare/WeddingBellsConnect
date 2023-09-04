import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WeddingData } from "../Data/WeddingData";
import img2 from "../Images/img2.jpg";
import BackgroundImg from "../Images/bk.png";

const CardWed = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const selectedUser = WeddingData[parseInt(id)];
    setUser(selectedUser);
    console.log(selectedUser);
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${img2})`,
        height: "85vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingLeft: "10px",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            height: "70vh",
            width: "38vw",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <p
            style={{
              fontWeight: "700",
              fontSize: "45px",
              fontFamily: "monospace",
              paddingTop: "100px",
              textAlign: "center",
            }}
          >
            {user.bride}
            <br />
            &
            <br />
            {user.groom}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "20px" }}>
            <div
              style={{
                backgroundColor: "#000",
                color: "#fff",
                width: "15vw",
                paddingTop: "6px",
                paddingBottom: "6px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {user.firstDay}
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                color: "#000",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.5)",
                width: "15vw",
                height: "17vh",
                paddingTop: "12px",
              }}
            >
              {user.firstfun}
              <br />
              {user.firstDate}
              <br />
              {user.location}
            </div>
          </div>
          <div style={{ marginLeft: "50px" }}>
            <div
              style={{
                backgroundColor: "#000",
                color: "#fff",
                width: "15vw",
                paddingTop: "6px",
                paddingBottom: "6px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {user.secondDay}
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                color: "#000",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.5)",
                width: "15vw",
                height: "17vh",
                paddingTop: "12px",
              }}
            >
              {user.secondfun}
              <br />
              {user.secondDate}
              <br />
              {user.location}
            </div>
          </div>
          <div style={{ marginLeft: "60px" }}>
            <div>
              {" "}
              {user.thirdDay ? (
                <div
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    width: "15vw",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {user.thirdDay}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              {user.thirdDate ? (
                <div
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "16px",
                    fontWeight: "600",
                    boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.5)",
                    width: "15vw",
                    height: "17vh",
                    paddingTop: "12px",
                  }}
                >
                  {user.thirdfun}
                  <br />
                  {user.thirdDate} <br />
                  {user.location}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWed;
