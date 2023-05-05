// IMPORTS
import React, { Fragment } from "react";

// PAGES & COMPONENTS
import SearchBar from "../../UI/SearchBar/SearchBar";
import ProfilesData from "./Data/Data.json";
import classes from "./Hero.module.scss";

// IMAGE
import Dojo from "./../../assets/dojo2.jpg";

// HOME PAGE VARIABLE DISPLAY HOME PAGE IF 'NOT DYNAMIC'
const HomePageContent = () => {
  return (
    <Fragment>
      <h1 className={classes["hero__content--title"]}>The way of Bushidō</h1>
      <span className={classes["hero__content--tagline"]}>
        A path to Harmony
      </span>

      <div className={classes["hero__content--cta"]}>
        <SearchBar placeholder="Search apprentices..." data={ProfilesData} />
      </div>
    </Fragment>
  );
};

const Hero = ({ isDynamic, children }) => {
  return (
    <div className={classes.container}>
      <img src={Dojo} alt="dojo" className={classes.dojo} />
      <div className={classes.hero}>
        <div className={classes.hero__content}>
          {/* WILL DISPLAY 'children' if 'isDynamic' */}
          {!isDynamic && <HomePageContent />}
          {isDynamic && (
            <h1 className={classes["hero__content--title"]}>{children}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
