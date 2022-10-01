import React, { useState, useEffect } from "react";
import Mono from "../NavBar/Mono.png";
import { GiHamburgerMenu } from "react-icons/gi";
import classes from "../../Styles/NavBar.module.css";
import { useLocation } from 'react-router-dom';

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  let main_class = [classes.main_container];
  let location = useLocation().pathname.split('/')[1];

  if (showMediaIcons) {
    main_class.push(classes.sidebar);
  }

  const navbarHandler = () => {
    setShowMediaIcons((show) => !show);
  };

  return (
    <>
      <nav className={main_class.join(" ")}>
        <div className={classes.logo}>
          <img src={Mono} />
        </div>
        <div className={classes.navItem1}>
          <NavLink to="/" className={location == "" ? classes.active : ""} active>home</NavLink>
          <NavLink to="/Gallery" className={location == "Gallery" ? classes.active : ""}>gallery</NavLink>
          <NavLink to="/Sponsors" className={location == "Sponsors" ? classes.active : ""}>sponsors</NavLink>
          <NavLink to="/Activities" className={location == "Activities" ? classes.active : ""}>activities</NavLink>
        </div>
        <div className={classes.navItem2}>
          <NavLink to="/About" className={location == "About" ? classes.active : ""}>about</NavLink>
          <NavLink to="/Contacts" className={location == "Contact" ? classes.active : ""}>contact</NavLink>
        </div>
      </nav>
      <div className={classes.social_media}>
          <a href="#" onClick={() => navbarHandler()}>
            <GiHamburgerMenu size={"30px"} />
          </a>
        </div>
    </>
  );
};

export default Navbar;
