import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Button } from "react-bootstrap";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => alert("Check your email"))
      .catch((error) => alert(error.message));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Reset Your Password</h1>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          className="mb-2"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="primary" onClick={handleReset}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default ForgetPassword;
