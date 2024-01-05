import React, { useEffect, useState } from "react";

const ScrollButton = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "red",
      }}
    >
      {backToTopBtn && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "12px",
            height: "50px",
            width: "50px",
            borderRadius: "50px",
            fontSize: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "20px",
          }}
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
