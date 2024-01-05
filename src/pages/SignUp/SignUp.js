import React, { useState } from "react";
import "./SignUp.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { ref, set } from "firebase/database";
import { uid } from "uid";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const Register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password, name)
      .then((auth) => {
        writeDatabase();
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //write

  const writeDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      name,
      email,
      password,
      uuid,
    });
  };

  return (
    <MDBContainer fluid>
      <MDBCard
        className="text-black m-5"
        style={{ borderRadius: "25px", height: "90vh" }}
      >
        <h1 className="mt-4">Sign Up</h1>
        <MDBCardBody
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center justify-content-center"
            >
              {/* <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p> */}

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  id="form1"
                  type="text"
                  style={{ width: "300px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  id="form2"
                  type="email"
                  style={{ width: "300px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Password"
                  id="form3"
                  type="password"
                  style={{ width: "300px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* 
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="form4"
                  type="password"
                  style={{ width: "300px" }}
                />
              </div> */}

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn
                className="mb-4"
                size="lg"
                color="danger"
                onClick={Register}
              >
                Register
              </MDBBtn>
              <div>
                Have already an account?{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/signin")}
                >
                  Login Here
                </span>
              </div>
            </MDBCol>
            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default SignUp;
