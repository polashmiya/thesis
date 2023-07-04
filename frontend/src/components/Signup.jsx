import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import useAxiosPost from "../hooks/useAxiosPost";
import NavMenu from "./NavMenu";

const initData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  registrationNumber: "",
};

const Signup = ({isAuth, authSetter}) => {
  const [, signup, loading] = useAxiosPost({});

  const [users, setUsers] = useState({ ...initData });

  const inputHandler = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    signup("/auth/sign-up", users, () => setUsers({ ...initData }), true);
  };

  return (
    <><NavMenu isAuth={isAuth} authSetter={authSetter} />
      <div className="form-wrapper">
        <h1>Sign Up</h1>
        <form onSubmit={signUpHandler}>
          <div className="form-item">
            <label htmlFor="firstName" />
            <input
              type="firstName"
              name="firstName"
              required="required"
              placeholder="First Name"
              value={users.firstName}
              onChange={inputHandler}
            />
          </div>
          <div className="form-item">
            <label htmlFor="lastName" />
            <input
              type="lastName"
              name="lastName"
              required="required"
              placeholder="Last Name"
              value={users.lastName}
              onChange={inputHandler}
            />
          </div>
          <div className="form-item">
            <label htmlFor="email" />
            <input
              type="email"
              name="email"
              required="required"
              placeholder="Email Address"
              value={users.email}
              onChange={inputHandler}
            />
          </div>
          <div className="form-item">
            <label htmlFor="registrationNumber" />
            <input
              type="registrationNumber"
              name="registrationNumber"
              required="required"
              placeholder="Registration No."
              value={users.registrationNumber}
              onChange={inputHandler}
            />
          </div>
          <div className="form-item">
            <label htmlFor="password" />
            <input
              type="password"
              name="password"
              required="required"
              placeholder="Password"
              value={users.password}
              onChange={inputHandler}
            />
          </div>
          <div className="form-item">
            <label htmlFor="confirmPassword" />
            <input
              type="password"
              name="confirmPassword"
              required="required"
              placeholder="Confirm Password"
              value={users.confirmPassword}
              onChange={inputHandler}
            />
          </div>
          <div className="button-panel">
            <button type="submit" className="button">
              Sign Up {loading && <Spin />}
            </button>
          </div>
        </form>
        <div className="form-footer">
          <p>
            <Link to="/login">Already have an account?</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
