import React, { useState } from "react";
import "./NavBar.css";
// import Logo from "../images/LOgo.png";
import { Button, Container } from "react-bootstrap";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/GlobalState";
import { auth } from "../../firebase";
import { uid } from "uid";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const uuid = uid();

  const handleSignOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <Container
      className="navContainer"
      // style={{ position: "sticky", top: "0" }}
    >
      <header>
        <div className="logo">
          <span style={{ color: "red", fontWeight: "bold", fontSize: "30px" }}>
            S.M.S.M
          </span>
        </div>
        <nav className={mobile ? "navMobDown" : "navMob"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/categories">Jobs Categories</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contactus">Contact Us</Link>
          <div className="mobBtn">
            {user ? (
              <Button variant="danger" onClick={handleSignOut}>
                Log Out
              </Button>
            ) : (
              <Button variant="light" onClick={() => navigate("/signin")}>
                Log In
              </Button>
            )}
            {user ? (
              <Button>Profile</Button>
            ) : (
              <Button variant="warning" onClick={() => navigate("/signup")}>
                JOIN
              </Button>
            )}
          </div>
        </nav>
        <div className="buttons">
          {user ? (
            <Button variant="danger" onClick={handleSignOut}>
              Log Out
            </Button>
          ) : (
            <Button variant="light" onClick={() => navigate("/signin")}>
              Log In
            </Button>
          )}
          {/* <Button variant={user ? "danger" : "light"} onClick={handleSignOut}>
            {user ? "log Out" : "Log In"}
          </Button> */}
          {user ? (
            <Button onClick={() => navigate(`/profile`)}>
              {/* <Button onClick={() => navigate(`/profile/${uuid}`)}> */}
              Profile
            </Button>
          ) : (
            <Button variant="warning" onClick={() => navigate("/signup")}>
              JOIN
            </Button>
          )}
        </div>
        <div className="icons" onClick={() => setMobile(!mobile)}>
          {mobile ? (
            <button>
              <FaTimes />
            </button>
          ) : (
            <button>
              <FaBars />
            </button>
          )}
        </div>
      </header>
    </Container>
  );
};

export default NavBar;
