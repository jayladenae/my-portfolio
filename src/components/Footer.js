import React from 'react';
import "./styles/Footer.css";
const myInfo = {
    github: 'https://github.com/jayladenae',
    linkedIn: 'https://www.linkedin.com/in/jaylanewton/',
    stackOverflow: 'https://stackoverflow.com/story/jayladenae'
};


function Footer () {
    return  ( <> 
    <div id="container-footer">
    <a href={myInfo.github}><i  className="fab fa-github-alt fa-2x icon"></i></a>
    <a href={myInfo.linkedIn}> <i  className="fab fa-linkedin fa-2x icon"></i></a>
    <a href={myInfo.stackOverflow}><i className="fab fa-stack-overflow fa-2x icon"></i></a>
    </div>
    </>
    );
}

export default Footer;