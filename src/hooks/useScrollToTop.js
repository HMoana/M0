// IMPORTS
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// MAKE SURE PAGE LOADS AT THE TOP OF THE PAGE
const useScrollToTop = () => {
  const { pathname } = useLocation();
  // USE EFFECT HOOK ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default useScrollToTop;
