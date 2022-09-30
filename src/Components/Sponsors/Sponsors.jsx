import React from "react";
import NavBar from "../NavBar/NavBar";
import classes from '../../Styles/sponsors.module.css'


const Sponsors= () => {
    
    return (
        <div>
            <NavBar/>
            <div className={classes.main_container}> 
            <h1>Sponsors are here</h1>
            </div>
        </div> 
    )
}

export default Sponsors;