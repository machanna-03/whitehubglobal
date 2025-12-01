import React from "react";

import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import OurPhilosophyBanner from "./OurPhilosophyBanner";
import JobSection from "./JobSection";

const OurPhilosophyHomepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <OurPhilosophyBanner />
      <JobSection />

      <Footer />
    </div>
  );
};

export default OurPhilosophyHomepage;
