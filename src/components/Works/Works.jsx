import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <div style={{ color: darkMode ? "white" : "" }}>
           About me
          </div>
          <span style={{color:"blue"}}>Saeedrazman</span>
          <span style={{fontSize:"20px", marginBottom:"10%"}}>
            I love programing from my chaildhood but i started learning that in 2022 by the time that i accepted for univercity.
            <br />
            I started by Htmle,css the base of programing after that i choose Frontend and  read alot about that, after that i find a path to be a good frantend doveloper.
            <br />
            JavaScript is the first corse that i watch ,after that React.js,Typescript,RestApi,Redux,Node.js,Express...
            <br />
            after watching the corses , i start to reading the librery of the corsess that i watched.
            <br />
             so I started makeing websites by html css at first ,after that by react and js  and at the end my project was compleated and useing typescript and redux... in it .
            <br />
              I prefer to stop backend and being professional in Frontend.
            <br />
              My english is good too in foure skills of english and i work on that from the time that im in grade five .
            <br />
            Im studing mechanic engineering in univercity of urmia.
            <br />
            I put my CV in services part you can see that .
          </span>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        
      </div>
      
    </div>
  );
};

export default Works;
