import React from 'react'
import Banner from './Banner'
import AboutUs from './AboutUs'
import MissionVision from './MissionVission'
import Service from './Service'
import WhyChooseUs from './WhyChooseUs'
import OurPhilosophy from './OurPhilosophy'
import Industries from './Industries'
import Navbar from './common/Navbar'
import Header from './common/Header'
import Footer from './common/Footer'


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Banner />
      <AboutUs />
      <MissionVision />
      <OurPhilosophy />
      <Service />
      <Industries />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default HomePage