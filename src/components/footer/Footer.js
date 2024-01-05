import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="bg-light text-center text-white">
      <MDBContainer className="p-4 pb-0">
        {/* <section className="">
          <form action="">
            <MDBRow
              className="d-flex justify-content-center"
              style={{ color: "black" }}
            >
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up if you are Interviewee</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput type="email" label="Email address" className="mb-4" />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="dark" type="submit" className="mb-4">
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section> */}

        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 10.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://amr.com/">
          amr-bally.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
