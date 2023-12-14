import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRouteUser = ({ children }) => {
  const navigate = useNavigate();
  const isUser = localStorage.getItem("loggedin") === "true";

  useEffect(() => {
    if (!isUser) navigate("/login");
  });

  return isUser ? children : <></>;
};

export default PrivateRouteUser;
