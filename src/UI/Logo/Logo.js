// IMPORTS
import React from "react";

// PAGES & COMPONENTS
import classes from "./Logo.module.scss";

// IMAGE
import HeniLogo from "../../assets/HeniLogo.png";

const Logo = () => {
  return (
    <a href="/" className={classes.logo}>
      <img src={HeniLogo} alt="logo" />
      <span>The Kimura Dojo</span>
    </a>
  );
};

export default Logo;
