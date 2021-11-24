import React from 'react';
import "../components/styles/NavTabs.css";
import logo from "../images/transp-logo1.png";

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <>
         
           <div id="navbar">
           <a  href="#landing" onClick={() => handlePageChange('Landing')}
            className="nav">
            <img id="logo" src={logo}/>
          </a>
          <a href="#home" onClick={() => handlePageChange('Home')}
           className="nav" id="nav-about">
            ABOUT
          </a>
          <a href="#about" onClick={() => handlePageChange('About')}
           className="nav" id="nav-port">
           PORTFOLIO
          </a>
          
          <a href="#blog" onClick={() => handlePageChange('Blog')}
           className="nav" id="nav-res">
            RESUME
          </a>
          <a  href="#contact" onClick={() => handlePageChange('Contact')}
            className="nav" id="nav-con">
            CONTACT  
          </a>
     </div>
  </>
    );
  }
  
  export default NavTabs;