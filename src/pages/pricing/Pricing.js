import React from "react";
import { pricingList } from "../../db";
import { FaCheck } from "react-icons/fa";
import "./Pricing.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/GlobalState";

const Pricing = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  return (
    <div className="pricingContainer">
      <div className="header">
        <h1>Subscripton Plans </h1>
        <p>Pricing to fit the needs of any compain size.</p>
      </div>
      <div className="pricingContent">
        {pricingList.map((item) => {
          return (
            <div
              className="box"
              style={{
                background: `${item.backGroundColor}`,
                color: `${item.color}`,
              }}
              key={item.id}
            >
              <h3>{item.plan}</h3>
              <span>{item.price}</span>
              {/* <h5>{item.populer || "---"}</h5> */}
              <div className="servContainer">
                {item.service.map((service) => {
                  return (
                    <p className="serv">
                      <span>{<FaCheck />}</span>
                      {service}
                    </p>
                  );
                })}
              </div>
              <p>{item.info}</p>
              <Button
                variant={item.btnColor}
                onClick={() =>
                  user ? navigate("/checkout") : navigate("/signin")
                }
              >
                {item.button}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
