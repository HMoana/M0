// IMPORTS
import React, { Fragment } from "react";

// PAGES & COMPONENTS
import Profiles from "../components/Profiles/Profiles";

// CUSTOM HOOKS
import useScrollToTop from "../hooks/useScrollToTop";

const ProfilesPage = () => {
  useScrollToTop();
  return (
    <Fragment>
      <Profiles page={true} />
    </Fragment>
  );
};

export default ProfilesPage;
