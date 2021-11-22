import React from 'react';

const myInfo = {
    github: 'https://github.com/jayladenae',
    linkedIn: 'https://www.linkedin.com/in/jaylanewton/',
    stackOverflow: 'https://stackoverflow.com/story/jayladenae'
};


function Footer () {
    return  ( <> 
    <div >
    <a href={myInfo.github}><i  className="fab fa-github-alt fa-3x icon"></i></a>
    <a href={myInfo.linkedIn}> <i  className="fab fa-linkedin fa-3x icon"></i></a>
    <a href={myInfo.stackOverflow}><i className="fab fa-stack-overflow fa-3x icon"></i></a>
    </div>
    </>
    );
}

export default Footer;