import React from "react";
import "./Landing.css";
import Button from "react-bootstrap/Button";
import BrandSLider from "../brandslider/BrandSLider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/GlobalState";

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="landing">
      {/* <div className="overlay"></div> */}
      <div className="landing-content">
        {/* <h3>Welcome to the world of job interviews...</h3> */}
        <h3>Make Your job interviews...</h3>
        <h1>
          Test <span>YourSelf.!</span>
        </h1>
        <p>
          Simulate realistic interviews for over 120 different job positions and
          level up your skills in no time.
        </p>
        <div className="btns">
          <Button
            variant="dark"
            onClick={
              user ? () => navigate("/interview") : () => navigate("/signin")
            }
          >
            Start interview
          </Button>
          <Button
            className="lastbtn"
            variant="light"
            onClick={
              user ? () => navigate("/iterviewee") : () => navigate("/signin")
            }
          >
            Become a interviewee
          </Button>
        </div>
        <div className="brands"></div>
      </div>
    </div>
  );
};

export default Landing;
