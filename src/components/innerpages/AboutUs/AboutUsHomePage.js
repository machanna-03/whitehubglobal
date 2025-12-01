import React from "react";

import AboutBanner from "./AboutBanner";
import AboutUs from "../../AboutUs";
import StatsSection from "./StatsSection";
import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const AboutUsHomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutBanner />
      <AboutUs />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default AboutUsHomePage;
