import React from "react";
import { Icon } from '@iconify/react';
import classes from '../../Styles/socialFollow.module.css'


export default function SocialFollow() {
  return (
    <div className={classes.social_container}>
      <a
        href="https://www.facebook.com/PhotographyNITkkr/"
        className={`${classes.facebook} ${classes.social}`}
      >
        <Icon icon="akar-icons:facebook-fill" className={classes.icn} height="4vh" />
      </a>

      <a
        href="https://www.instagram.com/photog.nitkkr"
        className={`${classes.instagram} ${classes.social}`}
      >
        <Icon icon="ant-design:instagram-filled" className={classes.icn} height="5vh" />
      </a>
    </div>
  );
}