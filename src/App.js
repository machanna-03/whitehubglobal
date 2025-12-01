import React from "react";
import { Grid } from "@mui/material";
import { ThemeProvider } from "./components/common/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUsHomePage from "./components/innerpages/AboutUs/AboutUsHomePage";
import ServiceHomepage from "./components/innerpages/ServicesPage/ServiceHomepage";
import MissionHomepage from "./components/innerpages/MissionAndVisionPage/MissionHomepage";
import OurPhilosophyHomepage from "./components/innerpages/OurPhilosophyPage/OurPhilosophyHomepage";
import IndustryHomepage from "./components/innerpages/IndustryPage/IndustryHomepage";
import ChooseUsHomepage from "./components/innerpages/ChooseUsPage/ChooseUsHomepage";

function App() {
  return (
    <ThemeProvider>
      <Grid>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<ChooseUsHomepage />} />
            <Route path="/our-service" element={<ServiceHomepage />} />
            <Route path="/looking-for-employees" element={<MissionHomepage/>} />
            <Route path="/looking for job" element={<OurPhilosophyHomepage />} />
            <Route path="/industry-we-serve" element={<IndustryHomepage />} />
            <Route path="/choose-us" element={<ChooseUsHomepage />} />
          </Routes>
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
