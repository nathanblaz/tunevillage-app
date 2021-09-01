import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="card">
      <form onSubmit={onSignUp}>
        <h2 className="title">Sign Up</h2>
        <ul classname="errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </ul>
        <div className="formInputContainer">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
            required
          ></input>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            required
          ></input>
          <label>Password</label>
          <input
            type="password"
            name="password"
            autoComplete="on"
            onChange={updatePassword}
            value={password}
            required
          ></input>
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            autoComplete="on"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required
          ></input>
        </div>
        <button className="submitBtn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
