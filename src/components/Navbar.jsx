import React from 'react';
import "./navbar.scss";
import Sidebar from './sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <h4 className="sau">Saurabh Singh</h4>
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

export default Navbar;
