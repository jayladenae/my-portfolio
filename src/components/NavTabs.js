import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <>
           <header>
        
          <button href="#home" onClick={() => handlePageChange('Home')}
           className="btn btn1 btn--stripe">
            About Me
          </button>
      
    
          <button href="#about" onClick={() => handlePageChange('About')}
           className="btn btn2 btn--stripe">
           My Work
          </button>
  
          <h1> Jayla Newton</h1>
        
          <button  href="#blog" onClick={() => handlePageChange('Blog')}
           className="btn btn3 btn--stripe">
            Resume
          </button>
  
          <button  href="#contact" onClick={() => handlePageChange('Contact')}
            className="btn btn4 btn--stripe">
            Contact Me
          </button>
     </header>
  </>
    );
  }
  
  export default NavTabs;