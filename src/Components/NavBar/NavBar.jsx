
import React, { useState } from "react";
import Mono from "../NavBar/Mono.png";
import '../../Styles/NavBar.css';
// import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
             <div className="logo">
          <img src={Mono}/>
        </div>

         <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/Gallery">gallery</NavLink>
            </li>
            <li>
              <NavLink to="/Sponsors">sponsors</NavLink>
            </li>
            <li>
              <NavLink to="/Activities">activities</NavLink>
            </li>
            <li className="menu-link1">
              <NavLink to="/About">about</NavLink>
            </li>
            <li>
              <NavLink to="/Contacts">contact</NavLink>
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