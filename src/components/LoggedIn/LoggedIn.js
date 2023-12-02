import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LoggedIn = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      localStorage.getItem("jwt") === null ||
      localStorage.getItem("jwt") === undefined
    ) {
      localStorage.setItem("jwt", "");
      localStorage.setItem("loggedin", false);
      localStorage.setItem("admin", false);
      return;
    }

    const checkUser = async () => {
      await fetch(process.env.REACT_APP_BASE_URL + "/api/v1/users/get-user", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("loggedin", true);
            return response.json();
          }
          throw response;
        })
        .then((user) => {
          if (user.role === "ADMIN") {
            localStorage.setItem("admin", true);
          } else {
            localStorage.setItem("admin", false);
          }
        })
        .catch(() => {
          localStorage.setItem("jwt", "");
          localStorage.setItem("admin", false);
          localStorage.setItem("loggedin", false);
        });
    };
    checkUser();
  }, [pathname]);
  return null;
};

export default LoggedIn;
