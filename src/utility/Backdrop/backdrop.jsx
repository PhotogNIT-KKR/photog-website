import React from "react";
import classes from '../Backdrop/backdrop.module.css'

const backdrop = (props) => {

  return (
    <div className={classes.backdrop} onClick={props.backdropClicked} style={{
        display : props.isBackdrop ? 'block' : 'none'
    }}>

    </div>
  );
};

export default backdrop;
