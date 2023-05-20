import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Menu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {isLoading === true && (
        <Box sx={{ display: "flex" }} className="box">
          <CircularProgress />
        </Box>
      )}
      <div className="menu-container">
        <ul className="menu-ul">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/aboutus"}>
            <li>Aboutus</li>
          </Link>
          <Link to={"/contactus"}>
            <li>Contact Us</li>
          </Link>
          <Link
            onClick={() => {
              setIsLoading(true);
              localStorage.removeItem("users");
              let isAuth = localStorage.getItem("users");
              setTimeout(() => {
                setIsLoading(false);
                isAuth === null && navigate("/login");
              }, 2000);
            }}
          >
            <li>Log Out</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Menu;
