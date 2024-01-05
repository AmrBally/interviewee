import React from "react";
import NavBar from "../../components/navbar/NavBar";
import BriefSection from "../../components/briefsection/BriefSection";
import Landing from "../../components/landing/Landing";
import LevelSection from "../../components/levelsection/levelSection";
import LandingJobs from "../../components/landingJob/LandingJobs";
import Footer from "../../components/footer/Footer";
import ScrollButton from "../../components/scrollButton/ScrollButton";
import BrandSLider from "../../components/brandslider/BrandSLider";

const Home = () => {
  return (
    <>
      <NavBar />
      <Landing />
      <BrandSLider />
      <BriefSection />
      <LevelSection />
      <LandingJobs />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Home;
