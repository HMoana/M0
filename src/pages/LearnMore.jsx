// IMPORTS
import React, { Fragment } from "react";

// PAGES & COMPONENTS
import Hero from "../components/Hero/Hero";

// CUSTOM HOOK
import useScrollToTop from "../hooks/useScrollToTop";

const LearnMore = () => {
  useScrollToTop();
  return (
    <Fragment>
      <Hero isDynamic>Learn More</Hero>
    </Fragment>
  );
};

export default LearnMore;
