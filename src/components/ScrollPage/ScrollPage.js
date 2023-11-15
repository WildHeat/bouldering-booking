import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/climb") {
      window.scroll(0, 100000);
      return;
    }
    window.scroll(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTop;
