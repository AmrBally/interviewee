import React from "react";
import "./BrandSlider.css";

const BrandSLider = () => {
  return (
    <div className="container h-100">
      <div className="row align-items-center h-100">
        <div className="container rounded">
          <h1 className="text-center brandHeader"></h1>
          <div className="slider">
            <div className="logos">
              <i className="fab fa-js fa-4x"></i>
              <i className="fab fa-linkedin-in fa-4x"></i>
              <i className="fab fa-dribbble fa-4x"></i>
              <i className="fab fa-medium-m fa-4x"></i>
              <i className="fab fa-github fa-4x"></i>
            </div>
            <div className="logos">
              <i className="fab fa-js fa-4x"></i>
              <i className="fab fa-linkedin-in fa-4x"></i>
              <i className="fab fa-dribbble fa-4x"></i>
              <i className="fab fa-medium-m fa-4x"></i>
              <i className="fab fa-github fa-4x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSLider;
