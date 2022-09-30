import React from "react";
import NavBar from "../NavBar/NavBar";
import classes from '../../Styles/activities.module.css'

const Activities = () => {
    
    return (
        <div>
            <NavBar/>
            <div className={classes.main_container}>
            <h1>Activities are here .Changes to be done here</h1>
            </div>
        </div> 
    )
}

export default Activities;