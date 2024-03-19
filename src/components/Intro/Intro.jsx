import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {

  const transition = { duration: 2, type: "spring" };


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
     
      <div className="i-left">
        <div className="i-name">
         
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span style={{color: "blue" }}> Saeedrazman</span>
          <span>
            Frontend Developer and Im working on this field for 3 years and have some project 
          </span>
        </div>
        <Link to="contact"  smooth={true} spy={true}>
          <button className="button i-button">Contact</button>
        </Link>
     
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
     
      <div className="i-right">
        
        <img src={boy} alt="" />
    
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

 

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
