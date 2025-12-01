import React from "react";

import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import ServicesBanner from "./ServicesBanner";
import Hero from "./Hero";
import ServiceCard from "./ServiceCard";

const ServiceHomepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ServicesBanner />
      <ServiceCard />
      {/* <Hero /> */}
      {/* <Consultant /> */}

      <Footer />
    </div>
  );
};

export default ServiceHomepage;
