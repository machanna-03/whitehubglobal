import React from "react";

import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import ServicesBanner from "./MissionBanner";
import MissionBanner from "./MissionBanner";
import MissionVision from "../../MissionVission";
import JobOpeningsSection from "./JobOpeningsSection ";

const MissionHomepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MissionBanner />
      <JobOpeningsSection />
      <MissionVision />
      <Footer />
    </div>
  );
};

export default MissionHomepage;
