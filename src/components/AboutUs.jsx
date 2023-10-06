import React from "react";
import image from "../images/doc.png";
import { blackwhite } from "@cloudinary/url-gen/actions/effect";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading" style={{fontSize:"4rem", marginLeft:"10rem" ,fontFamily:" 'Teko', sans-serif"}}>About Us</h2>
        <div className="about">
          <div className="abtimage">
            <img
              src={image}
              alt="hero"
              style={{ width: "300px", height: "400px" , marginLeft:"10rem"}}
            />
          </div>
          <div className="hero-content">
            <p className="abtp" style={{marginLeft:"5rem" ,width:"70%"}}>
            Med-Gen: Your Health Revolutionized! We blend innovation with your well-being, offering a personalized healthcare experience.
             Our AI diagnostics provide expert guidance, connecting you to healthcare pros when needed. 
          . Achieve wellness goals with ease. 
            Your wellness journey is now rewarding and engaging, all at your fingertips. Join us in shaping a brighter, healthier future with Med-Gen, where staying healthy is just the beginning - we're all about thriving in the modern world with the latest in healthcare tech and knowledge.
            </p>
         
         
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
