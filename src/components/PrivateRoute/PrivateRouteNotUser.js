import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRouteNotUser = ({ children }) => {
  const isUser = localStorage.getItem("loggedin") === "true";
  const navigate = useNavigate();

  useEffect(() => {
    if (isUser) navigate("/");
  }, [navigate, isUser]);
  return !isUser ? children : <></>;
};

export default PrivateRouteNotUser;
