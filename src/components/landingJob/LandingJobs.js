import React from "react";
import "./LandingJobs.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { landingjobs } from "../../db";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const LandingJobs = () => {
  const navigate = useNavigate();
  return (
    <div className="landingjobContainer">
      <span>Jobs Categories</span>
      <div className="jobContent">
        {landingjobs.map((item) => (
          <MDBCard className="box" key={item.id}>
            <MDBCardImage
              src={item.img}
              position="top"
              alt="..."
              style={{ height: "250px" }}
              className="cardImg"
            />
            <MDBCardBody>
              <MDBCardTitle style={{ color: "black" }}>
                {item.title}
              </MDBCardTitle>
              <MDBCardText style={{ color: "#aaa" }}>{item.desc}</MDBCardText>
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
      <Button variant="dark" onClick={() => navigate("/categories")}>
        Explore More...{" "}
      </Button>
    </div>
  );
};

export default LandingJobs;
