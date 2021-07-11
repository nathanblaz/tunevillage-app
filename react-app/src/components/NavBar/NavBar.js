import React, { useEffect, useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);

  const demoFunc = async (e) => {
    e.preventDefault();
    dispatch(demoLogin());

    history.push("/");
  };

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <nav id="navbar">
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
            to="/artists"
            exact={true}
            activeClassName="active"
          >
            Artists
          </NavLink>
          <div id="menu-container">
            <button id="user-button" onClick={openMenu}>
              <i className="avatar-circle" />
            </button>
            {showMenu && (
              <div id="user-menu">
                <div className="user-menu-buttons">
                  Hey{" "}
                  <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>!
                </div>
                <div className="user-menu-buttons">
                  <LogoutButton />
                </div>
              </div>
            )}
          </div>
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
