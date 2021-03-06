import React from 'react';
import "../components/styles/NavTabs.css";
import pdf from "../docs/resume.pdf";
import logo from "../images/transp-logo1.png";

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <>
         
           <div id="navbar">
           <a  href="#landing" onClick={() => handlePageChange('Landing')}
            className="nav">
            <img id="logo" alt="my-logo" src={logo}/>
          </a>
          <a href="#home" onClick={() => handlePageChange('Home')}
           className="nav" id="nav-about">
            ABOUT
          </a>
          <a href="#about" onClick={() => handlePageChange('About')}
           className="nav" id="nav-port">
           PORTFOLIO
          </a>
          
          <a href={pdf} target="_blank" rel="noreferrer" onClick={() => handlePageChange('Blog')}
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