import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProtectRouting = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("users");
    if (!user) {
      navigate("/login");
    }
    console.log(user);
  }, []);
  return <>{children}</>;
};

export default ProtectRouting;
