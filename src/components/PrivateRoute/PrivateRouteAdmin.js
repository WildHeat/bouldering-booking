import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRouteAdmin = ({ children }) => {
  const admin = localStorage.getItem("admin") === "true";
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) navigate("/");
  }, [admin, navigate]);
  return <>{admin ? children : <></>};</>;
};

export default PrivateRouteAdmin;
