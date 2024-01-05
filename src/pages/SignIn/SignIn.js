import React, { useState } from "react";
import "./SignIn.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogleSignin = async () => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleTwitterSignin = async () => {
    const provider = await new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <h1>Sign In</h1>
      <MDBRow className="d-flex justify-content-center align-items-center mt-5">
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol
          col="4"
          md="6"
          className="d-flex align-items-center justify-content-center flex-column "
        >
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn
              floating
              size="md"
              tag="a"
              className="me-2"
              color="danger"
              onClick={handleGoogleSignin}
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn
              floating
              size="md"
              tag="a"
              className="me-2"
              color="danger"
              onClick={handleTwitterSignin}
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn floating size="md" tag="a" className="me-2" color="danger">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <div className="w-75">
            <MDBInput
              className="mb-4"
              label="Email address"
              id=""
              type="email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              className="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between mb-4 flex-column">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <Link to="/forget">Forgot password?</Link>
          </div>

          <div
            className="text-center text-md-start mt-4 pt-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <MDBBtn
              className="mb-0 px-5 "
              size="lg"
              onClick={handleSignIn}
              color="danger"
            >
              Login
            </MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account?{" "}
              <Link to="/signup" className="link-danger">
                Register
              </Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>

      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>
          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="facebook-f" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="twitter" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="google" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="linkedin-in" size="md" />
          </MDBBtn>
        </div>
      </div> */}
    </MDBContainer>
  );
};

export default SignIn;
