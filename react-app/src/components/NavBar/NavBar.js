import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";
import logo from "./tunevillage-logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className="navlinks"
        to="/"
        exact={true}
        activeClassName="active"
      >
        <img id="logo" src={logo}></img>
      </NavLink>
      <NavLink
        className="navlinks"
        to="/login"
        exact={true}
        activeClassName="active"
      >
        Login
      </NavLink>
      <NavLink
        className="navlinks"
        to="/sign-up"
        exact={true}
        activeClassName="active"
      >
        Sign Up
      </NavLink>
      <NavLink
        className="navlinks"
        to="/users"
        exact={true}
        activeClassName="active"
      >
        Users
      </NavLink>
      <LogoutButton />
    </nav>
  );
};

export default NavBar;
