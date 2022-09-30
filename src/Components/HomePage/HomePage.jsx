import React from "react";
import NavBar from "../NavBar/NavBar";
import classes from "../../Styles/home.module.css";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className={classes.main_container}>
        <h1>Home Page</h1>
      </div>
    </div>
  );
};
export default HomePage;
