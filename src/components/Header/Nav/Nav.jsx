// IMPORTS
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// UI
import Button from "../../../UI/Button/Button";

// PAGES & COMPONENTS
import classes from "./Nav.module.scss";
import LoginModal from "../../LoginModal/LoginModal";

const Nav = ({ isMenu, menuToggle }) => {
  // USE STATE HOOK FOR MODAL SET TO CLOSED
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
        <li onClick={menuToggle}>
          <Link to="/profiles">Profiles</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/learnmore">Learn More</Link>
        </li>
      </ul>
      <Button onClick={() => setOpenModal(true) && menuToggle}>
        Login
        {/* <Link to="/login">Login</Link> ~~~ MIGHT CHANGE TO LOGIN PAGE IN FUTURE? ~~~ */}
      </Button>
      {/* MODAL POP UP WINDOW FOR LOGIN */}
      <LoginModal open={openModal} onClose={() => setOpenModal(false)} />
    </nav>
  );
};

export default Nav;
