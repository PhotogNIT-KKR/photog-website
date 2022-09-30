import React, { useState } from "react";
import Mono from "../NavBar/Mono.png";
import { GiHamburgerMenu } from "react-icons/gi";
import classes from "../../Styles/NavBar.module.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  let main_class = [classes.main_container];

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
          <NavLink to="/">home</NavLink>
          <NavLink to="/Gallery">gallery</NavLink>
          <NavLink to="/Sponsors">sponsors</NavLink>
          <NavLink to="/Activities">activities</NavLink>
        </div>
        <div className={classes.navItem2}>
          <NavLink to="/About">about</NavLink>
          <NavLink to="/Contacts">contact</NavLink>
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
