import React from 'react';
import "../styles/Landing.css"
import Memoji from "../../images/mymemoji.PNG";
export default function Landing() {
  return ( 
      <div id="container-land">
      <div >
      <img id="me" alt="my memoji" src={Memoji}></img>
      </div>

      <div id="landing-text">
       <p id="hiIm">hi i'm</p>
       <p id="myName">Jayla Newton</p>
       </div>
      </div>
  ) 
}