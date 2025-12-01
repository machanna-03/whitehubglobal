import React from "react";

import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

import WhyChooseUs from "../../WhyChooseUs";
import IndustryBanner from "./IndustryBanner";
import Industries from "../../Industries";
import IndustrySection from "./IndustrySection";

const IndustryHomepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <IndustryBanner />
      <IndustrySection />
      <Footer />
    </div>
  );
};

export default IndustryHomepage;
