import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Categores from "./pages/Categores/Categores";
import IntervieweeForm from "./pages/IntervieweeForm/IntervieweeForm";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useAuth } from "./context/GlobalState";
import ForgetPassword from "./pages/forgetPassword/ForgetPassword";
import UserProfile from "./pages/profile/UserProfile";
import { uid } from "uid";
import ScrollButton from "./components/scrollButton/ScrollButton";
import Pricing from "./pages/pricing/Pricing";
import CheckOut from "./pages/checkout/CheckOut";

function App() {
  const uuid = uid();

  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/categories"
          element={
            <>
              <NavBar />
              <Categores />
              <ScrollButton />
              <Footer />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              <NavBar />
              <Pricing />
              <ScrollButton />
              <Footer />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <NavBar />
              <CheckOut />
              <Footer />
            </>
          }
        />
        <Route path="/forget" element={<ForgetPassword />} />
        {/* <Route path={`/profile/${uuid}`} element={<UserProfile />} /> */}
        <Route path={`/profile`} element={<UserProfile />} />
        <Route
          path="/iterviewee"
          element={
            <>
              <NavBar />
              <IntervieweeForm />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
