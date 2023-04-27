// IMPORTS
import React, { useEffect, useState } from "react";
import Logo from "../../UI/Logo/Logo";

// REACT ICONS
import { CgMenuRight, CgClose } from "react-icons/cg";

// CUSTOM HOOKS
import useWindowSize from "../../hooks/useWindowSize";

// PAGES & COMPONENTS
import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";

const Header = () => {
  // USE STATE HOOK ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [menuOpen, setMenuOpen] = useState(false);

  // CUSTOM USE EFFECT HOOK TO GET WINDOW SIZE OF DOM ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size, menuOpen]);

  // FUNCTION TRIGGERED WHEN HAMBURGER ICON CLICKED ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const handleMenuToggle = () => {
    setMenuOpen((p) => !p);
  };

  // FUNCTION IF ASIDE MENU NOT OPEN = HAMBURGER ICON / OPEN = CLOSE ICON ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const menuToggle = !menuOpen ? (
    <CgMenuRight onClick={handleMenuToggle} />
  ) : (
    <CgClose onClick={handleMenuToggle} />
  );

  return (
    <header className={classes.header}>
      <Logo />
      <Nav />
      <div className={classes.header__menu}>
        <div className={classes.header__menu__toggle}>{menuToggle}</div>
        <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
          <Nav isMenu menuToggle={handleMenuToggle} />
        </aside>
      </div>
    </header>
  );
};

export default Header;
