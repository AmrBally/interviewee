import React, { useState } from "react";
import "./Categores.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { jobsCategoties } from "../../db";

const Categores = () => {
  const [item, setItems] = useState(jobsCategoties);

  const menuItems = [...new Set(jobsCategoties.map((val) => val.category))];

  const filterItems = (cat) => {
    const newItems = jobsCategoties.filter((newval) => newval.category === cat);
    setItems(newItems);
  };

  return (
    <div className="categotyjobContainer">
      <h1>
        Jobs <span>Categories</span>
      </h1>
      <div className="categoryNavbar">
        <ul>
          <li onClick={() => setItems(jobsCategoties)}>All</li>
          {menuItems.map((val) => {
            return <li onClick={() => filterItems(val)}>{val}</li>;
          })}
        </ul>
      </div>
      <div className="jobContent">
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
              <MDBCardTitle style={{ color: "black" }}>
                {val.title}
              </MDBCardTitle>
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
    </div>
  );
};

export default Categores;
