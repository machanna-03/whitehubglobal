import React from "react";

import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

import WhyChooseUs from "../../WhyChooseUs";
import WhyChooseBanner from "./WhyChooseBanner";
import Consultant from "../ServicesPage/Consultant";
import MapComponent from "./MapComponent";

const ChooseUsHomepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <WhyChooseBanner />
      <Consultant />
      <MapComponent />
      <Footer />
    </div>
  );
};

export default ChooseUsHomepage;
