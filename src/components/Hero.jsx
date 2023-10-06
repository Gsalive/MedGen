import React from "react";
import "../styles/hero.css";
import Slideshow from "./SlideShow";
import { TypeAnimation } from "react-type-animation";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "../components/SlideShow";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
      <h1 style={{fontFamily:" 'Teko', sans-serif", fontSize:"4rem"}}> 
          Where Health, <br />
          Meets Innovation
        </h1>
          <h3>
          <TypeAnimation
            sequence={[
              "CARING FOR LIFE",
              1000,
              "CARING FOR YOU",
              1000,
              "CARING FOR HEALTH",
              1000,
              "CARING FOR FUTURE",
              1000
            ]}
            speed={0}
            repeat={Infinity}
          />
          </h3>
        
        <p >
        Med-Gen Solutions: Your Health, Your Way! Seamlessly manage health data and schedule telemedicine appointments. 
        Discover top-notch medical devices in our Healthcare Marketplace. Immerse in innovation at our Virtual Medical Expo. 
        Get personalized health advice with our AI Symptom Checker.
        Connect with a vibrant healthcare community and shape the future with us!        
        </p>
      </div>
      <div className="hero-img">
       <Slideshow/>
      </div>
    </section>
  );
};

export default Hero;
