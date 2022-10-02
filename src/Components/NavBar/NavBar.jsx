import React, { useState } from "react";
import Mono from "../NavBar/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import classes from "../../Styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../../utility/Backdrop/backdrop";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  let main_class = [classes.main_container];
  let url = window.location.href.split("/");
  url = url[url.length-1];

  if (showMediaIcons) {
    main_class.push(classes.sidebar);
  }

  const navbarHandler = () => {
    setShowMediaIcons((show) => !show);
    setIsBackdrop(true);
  };

  const [isBackdrop, setIsBackdrop] = useState(false);

  const backdropClicked = () => {
    setIsBackdrop(false);
    setShowMediaIcons(false);
  };

  return (
    <>
      <div className={classes.logo2}>
          <img src={Mono} />
        </div>

      <Backdrop backdropClicked={backdropClicked} isBackdrop={isBackdrop} />

      <nav className={main_class.join(" ")}>
        <div className={classes.logo}>
          <img src={Mono} />
        </div>

        <div className={classes.navItem1}>
          <NavLink to="/" className={url === "" ? classes.active : ""}>
            home
          </NavLink>
          <NavLink
            to="/Gallery"
            className={url === "Gallery" ? classes.active : ""}
          >
            gallery
          </NavLink>
          <NavLink
            to="/Sponsors"
            className={url === "Sponsors" ? classes.active : ""}
          >
            sponsors
          </NavLink>
          <NavLink
            to="/Activities"
            className={url === "Activities" ? classes.active : ""}
          >
            activities
          </NavLink>
        </div>
        <div className={classes.navItem2}>
          <NavLink to="/About" className={url === "About" ? classes.active : ""}>
            about
          </NavLink>
          <NavLink
            to="/Contacts"
            className={url === "Contact" ? classes.active : ""}
          >
            contact
          </NavLink>
        </div>
      </nav>
      <div className={classes.social_media} onClick={() => navbarHandler()}>
        <GiHamburgerMenu size={"30px"} color="#b3b3b3" />
      </div>
    </>
  );
};

export default Navbar;
