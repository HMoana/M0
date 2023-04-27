// IMPORTS
import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  // USE EFFECT HOOK ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // ACCESSING WINDOW in DOM, & ADDING EVENT LISTENER to call 'handleResize' FUNCTION
    window.addEventListener("resize", handleResize);

    handleResize();
    // UNMOUNTS THEN EVENT LISTENER REMOVES
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default useWindowSize;
