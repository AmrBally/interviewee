import React from "react";
import "./levelSection.css";

const levelsection = [
  {
    id: 1,
    name: "Exceed",
    title: "customer expectations",
    color: "white",
    desc: "Unleash your team’s creative expression to deliver experiences that drive customer engagement and sustain greater revenue.",
  },
  {
    id: 2,
    name: "Level up",
    title: "content velocity",
    color: "red",
    desc: "Centralize content for stakeholders across your business to resolve silos, maximize reuse, and ensure trustworthy content.",
  },
  {
    id: 3,
    name: "Future-proof",
    title: "your enterprise",
    color: "aqua",
    desc: "Adopt a truly composable content architecture that’s interoperable with tomorrow’s disruptive tech.",
  },
];

const LevelSection = () => {
  return (
    <div className="levelSection">
      <h1>Welcome to the Composable Era</h1>
      <div className="levelContent">
        {levelsection.map((item) => (
          <div key={item.id} className="box">
            <h1 style={{ color: `${item.color}` }}>{item.name}</h1>
            <h6>{item.title}</h6>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelSection;
