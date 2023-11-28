import React from "react";
import image from "../images/doc.png";
import { blackwhite } from "@cloudinary/url-gen/actions/effect";

const chatbot = () => {
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
            bot 
            </p>
         
         
          </div>
        </div>
      </section>
    </>
  );
};

export default chatbot;
