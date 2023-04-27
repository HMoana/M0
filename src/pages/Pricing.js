// IMPORTS
import React, { Fragment } from "react";

// PAGES & COMPONENTS
import Hero from "../components/Hero/Hero";

// CUSTOM HOOK
import useScrollToTop from "../hooks/useScrollToTop";

const Pricing = () => {
  useScrollToTop();
  return (
    <Fragment>
      <Hero isDynamic>Pricing</Hero>
    </Fragment>
  );
};

export default Pricing;
