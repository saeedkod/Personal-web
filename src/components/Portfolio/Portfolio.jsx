import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/Screenshot (62).png";
import Mech from "../../img/Screenshot (63).png";
import HOC from "../../img/Screenshot (65).png";
import MusicApp from "../../img/Screenshot (60).png";
import AppleStore from "../../img/Screenshot (69).png"
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span style={{color:"blue"}} >Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
                <a href="https://mech-delta.vercel.app/">
             <img src={Mech} alt="" />
                </a>
        </SwiperSlide>
        <SwiperSlide>
             <a href="https://barber-eta-dun.vercel.app/">
          <img src={HOC} alt="" />
             </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://ubdated.vercel.app/" >
          <img src={Sidebar} alt="" />
            </a>
        </SwiperSlide>
        <SwiperSlide>
             <a href="https://vercel.com/saeeds-projects-1296ed65/apple-store-z2nw/25kurFDoKDFEaN5GY1bBHtrhXQXM"  >
          <img src={AppleStore} alt="" />
             </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
