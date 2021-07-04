import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import { demoLogin } from "../../store/session";
import "./NavBar.css";
import logo from "./tunevillage-logo.svg";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const demoFunc = async (e) => {
    e.preventDefault();
    dispatch(demoLogin());

    history.push("/");
  };

  return (
    <nav className="navbar">
      <NavLink
        className="navlinks"
        to="/"
        exact={true}
        activeClassName="active"
      >
        <img id="logo" src={logo} alt="Tunevillage"></img>
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
          <button type="button" id="demo-button" onClick={demoFunc}>
            Demo
          </button>
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
