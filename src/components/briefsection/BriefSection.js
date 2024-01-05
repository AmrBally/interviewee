import React from "react";
import "./BriefSection.css";

const BriefSection = () => {
  return (
    <div className="briefContainer">
      <h1>
        A headless CMS <span>and so much more</span>
      </h1>
      <p>
        S.M.S.M delivers content anywhere (just like a headless CMS). <br />{" "}
        Beyond that, S.M.S.M gives you <span>total composability.</span> A fully
        decoupled, real-time content back end. <br /> Entirely customizable
        content workspaces. <span>Be ready for what's next.</span>
      </p>
    </div>
  );
};

export default BriefSection;
