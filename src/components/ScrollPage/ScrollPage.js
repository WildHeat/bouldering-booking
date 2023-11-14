import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    if (pathname === "/climb") {
      window.scroll(0, 100000);
      return;
    }
    window.scroll(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTop;
