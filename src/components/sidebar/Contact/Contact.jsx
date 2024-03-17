import React from 'react';
import "./contact.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import emailjs from 'emailjs-com'; // Corrected import
import { useRef } from 'react';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, {
        YOUR_PUBLIC_KEY: 'YOUR_PUBLIC_KEY_VALUE', // Update with your public key
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact">
      <div className="textcon">
        <h1>Contact Me</h1>
        <div className='h'>
          <h4>Adress :Greater Noida , 201310</h4>
          <h4>P.no: +91-8810873052</h4>
          <h4>E-mail:  Saurabhiitr01@gmail.com</h4>
        </div>
      </div>
      <div className="left">
        <form ref={formRef} onSubmit={sendEmail}>
          <input className="io" type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder='Message' name="message" />
          <Button variant="outlined" type="submit">Send</Button> {/* Added type="submit" */}
        </form>
      </div>
      <div className="wrapper">
      
        <div className="social">
          <a href="https://github.com/saurabh4323" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-2708-singh" target="_blank" rel="noopener noreferrer">
            <img src="link.png" alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com/@SaurabhInsight" target="_blank" rel="noopener noreferrer">
            <img src="youtube.png" alt="YouTube" />
          </a>
          <a href="https://www.instagram.com/saurabh.insight/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src="instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
