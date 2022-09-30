import React from "react";
import NavBar from "../NavBar/NavBar";
import bg from "../HomePage/bg.png";
import moon from "../HomePage/moon2.png";
import SocialFollow from "../HomePage/socialFollow.jsx";
// import '../../Styles/socialFollow.css'
import classes from '../../Styles/homePage.module.css'
const HomePage = () => {

    return (
        <div>
            <NavBar />
            <div className={classes.home}>
                <div className={classes.bg_layer}></div>
                <img src={bg} className={classes.bg_img} />
                <img src={moon} alt="!!" className={classes.moon_rise} />

                <div className={classes.text_cont}>
                <div className={classes.text_show}>PHOTOGRAPHY CLUB</div>
                </div>
                <SocialFollow />
            </div>
        </div>
    )
}

export default HomePage;
