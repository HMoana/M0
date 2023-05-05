// IMPORTS
import React, { Fragment } from "react";

// PAGES & COMPONENTS
import Hero from "../components/Hero/Hero";

// UI
import Form from "../UI/Form/Form";

// CUSTOM HOOK
import useScrollToTop from "../hooks/useScrollToTop";

const Login = () => {
  useScrollToTop();
  return (
    <Fragment>
      <Hero isDynamic>
        <Form />
      </Hero>
    </Fragment>
  );
};

export default Login;
