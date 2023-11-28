import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import ChatButton from "../components/ChatButton";
import Eye from "../components/Eye";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <HomeCircles />
      <Contact />
      <Footer />
      <ChatButton/>
      <Eye/>
    </>
  );
};

export default Home;
