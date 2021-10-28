import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.Header}>
      <nav>
        <h1>Crypto currencies</h1>
      </nav>
    </header>
  );
};

export default MainNavigation;
