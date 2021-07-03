import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";
import logo from "./tunevillage-logo.svg";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

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
      {user ? (
        <>
          <NavLink
            className="navlinks"
            to="/users"
            exact={true}
            activeClassName="active"
          >
            Users
          </NavLink>
          <LogoutButton />
        </>
      ) : (
        <>
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
            to="/login"
            exact={true}
            activeClassName="active"
          >
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default NavBar;
