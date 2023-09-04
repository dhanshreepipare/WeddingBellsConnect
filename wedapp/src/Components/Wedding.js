import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { WeddingData } from "../Data/WeddingData";
import { Link } from "react-router-dom";

const Wedding = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(WeddingData);
    console.log(WeddingData);
  }, []);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontFamily: "Roboto', sans-serif",
          fontWeight: "bold",
          paddingTop: "60px",
        }}
      >
        WEDDINGS
        <p style={{ fontSize: "20px", fontWeight: "400" }}>
          Choose the wedding you would like to join
        </p>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          alignContent: "space-around",
          justifyContent: "space-around",
        }}
      >
        {users.map((currElem, key) => {
          return (
            <div key={key}>
              <Link
                to={`/wedding/cardwed/${key}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  style={{
                    width: "18rem",
                    marginBottom: "40px",
                    marginTop: "20px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={`${currElem.pic}`}
                    alt="Couple Image"
                    style={{ height: "50vh" }}
                  />
                  <Card.Body>
                    <Card.Title>{currElem.name}</Card.Title>
                    <Card.Text>{currElem.location}</Card.Text>
                    <Card.Text>{currElem.date}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Wedding;
