import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/signup.css";
import useAxiosPost from "../hooks/useAxiosPost";
import NavMenu from "./NavMenu";

const initData = {
  email: "",
  password: "",
};

const Login = ({ authSetter ,isAuth}) => {
  const [users, setUsers] = useState({ ...initData });
  const [, login, loading] = useAxiosPost({});
  const navigate = useNavigate()

  const inputHandler = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login(
      `/auth/login`,
      users,
      (data) => {
        if (data?.hasOwnProperty("error")) {
          authSetter(false);
        } else {
          localStorage.setItem("user", JSON.stringify(data?.user));
          authSetter(true);
          navigate("/")
        }
      },
      true
    );
  };
  return (
    <><NavMenu isAuth={isAuth} authSetter={authSetter} />
      <div className="form-wrapper">
        <h1>Sign In</h1>
        <form onSubmit={submitHandler}>
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
          <div className="button-panel">
            <button className="button" type="submit">
              Sign In
            </button>
          </div>
        </form>
        <div className="form-footer">
          <p>
            <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
