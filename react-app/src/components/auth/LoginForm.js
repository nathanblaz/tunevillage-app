import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { login } from "../../store/session";
import "./LoginForm.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="card">
      <form onSubmit={onLogin}>
        <h2 className="title">Log In</h2>
        <p className="subtitle">
          Don't have an account? <NavLink to="/sign-up">Sign up</NavLink>
        </p>
        <div className="errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="formInputContainer">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="on"
            value={password}
            onChange={updatePassword}
            required
          />
          <button className="submitBtn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
