import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const Card = ({ item }) => {
  return (
    <div>
      {item.map((val) => (
        <MDBCard className="box" key={val.id}>
          <MDBCardImage
            src={val.img}
            position="top"
            alt="..."
            style={{ height: "250px" }}
            className="cardImg"
          />
          <MDBCardBody>
            <MDBCardTitle style={{ color: "black" }}>{val.title}</MDBCardTitle>
            <MDBCardText style={{ color: "#aaa" }}>{val.desc}</MDBCardText>
            <MDBBtn
              href="#"
              style={{ backgroundColor: "rgba(255, 0, 0, 0.801)" }}
            >
              Select
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
};

export default Card;
