
import "../styles/Contact.css";
import React, {useState} from 'react';
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  let [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

    const handleInputChange = (e) => {
      const nameField = document.querySelector('#name').value;
      const emailField = document.querySelector('#emailInput').value;
      const messageBox = document.querySelector('#messageBox').value;

     if (!nameField || !emailField || !messageBox) {
       alert('Please fill out the required fields');
     } else {
       setContact({
         name: nameField,
         email: emailField,
         message: messageBox
       })
     }
     if (!validateEmail(emailField)) {
      alert('Email is invalid');
      return;
    }
  }

    const handleFormSubmit = () => {
      alert('Thank you for your message');
      
  }
  return (
    <div id="con-cont">
    <div id="con-cont-1">
    <div id="form-container">
    <h1 id="get-in-touch">Get In Touch</h1>
      <form>
        <input type="text" id="name" name="fullName" placeholder="Name" className="input"/>
       
        <input type="email" id="emailInput"  name="email" placeholder="Email" className="input"/>
        <br/>
        <textarea  name="message" id="messageBox" placeholder="Your message (•◡•) /" className="mesBox"/>
        <br/>
        <div id="button-div"> 
        <button type="submit" onClick={handleFormSubmit} className="button" text="Send">Send</button>
        </div>
      </form>
    </div>
    </div>
    <h1 id="get-in-touch">Connect with me</h1>
    <div id="con-cont-2">
    <a href="https://codepen.io/jayladenae" target="_blank" rel="noreferrer"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" className="icon-contact" alt="jayladenae" height="30" width="40" /></a>
<a href="https://dev.to/jayladenae" target="_blank" rel="noreferrer"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg" alt="jayladenae" height="30" width="40" className="icon-contact"/></a>
<a href="https://twitter.com/jaydenaen" target="_blank" rel="noreferrer"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" className="icon-contact" alt="jaydenaen" height="30" width="40" /></a>
<a href="https://linkedin.com/in/jaylanewton" target="_blank" rel="noreferrer"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" className="icon-contact" alt="jaylanewton" height="30" width="40" /></a>

<a href="https://codesandbox.com/jayladenae" target="_blank" rel="noreferrer"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg" alt="jayladenae" height="30" width="40" className="icon-contact"/></a>

    </div>
    </div>
  );
}