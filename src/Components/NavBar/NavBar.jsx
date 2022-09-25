
import React, { useState } from "react";
import '../../Styles/NavBar.css';
// import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
             <div className="logo">
          <h2>
            <span>P</span>hoto
            <span>G</span>raphy
          </h2>
        </div>

         <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/Sponsors">Sponsors</NavLink>
            </li>
            <li>
              <NavLink to="/Activities">Activities</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contacts">Contact</NavLink>
            </li>
            
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              {/* <GiHamburgerMenu /> */}
            </a>
          </div>
        </div>
      </nav>

    
    </>
  );
};

export default Navbar;