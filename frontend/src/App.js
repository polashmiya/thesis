import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Submission from "./components/Submission";
import Profile from "./components/Profile";
import Blogs from "./components/Blogs";
import BlogsSinglePage from "./components/BlogsSinglePage";
import Contact from "./components/Contact";
import Users from './components/Users';
import SubmissionList from './components/SubmissionList';
import Cse from "./components/Cse";
import EEE from "./components/EEE";
import CE from "./components/CE";

axios.defaults.baseURL = "http://localhost:3000/";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const authSetter = (auth) => {
    setIsAuth(auth);
    localStorage.setItem("isAuth", auth);
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login isAuth={isAuth} authSetter={authSetter} />,
    },
    {
      path: "/profile",
      element: <Profile isAuth={isAuth} authSetter={authSetter} />,
    },
    {
      path: "/blogs",
      element: <BlogsSinglePage isAuth={isAuth} authSetter={authSetter} />,
    },
    {
      path: "/contact",
      element: <Contact isAuth={isAuth} authSetter={authSetter} />,
    },
    {
      path: "/signup",
      element: <Signup isAuth={isAuth} authSetter={authSetter} />,
    },
    {
      path: "/",
      element: <Home isAuth={isAuth} authSetter={authSetter} />,
    },
    {
      path: "/submission",
      element: <Submission isAuth={isAuth} authSetter={authSetter} />,
    },
    {
      path: "/users",
      element: <Users isAuth={isAuth} authSetter={authSetter} />,
    },
    {
      path: "/submissionList",
      element: <SubmissionList isAuth={isAuth} authSetter={authSetter} />,
    },
    {
      path: "/cse",
      element: <Cse isAuth={isAuth} authSetter={authSetter} />,
    },
    {
      path: "/eee",
      element: <EEE isAuth={isAuth} authSetter={authSetter} />,
    },
    {
      path: "/ce",
      element: <CE isAuth={isAuth} authSetter={authSetter} />,
    },
  ]);

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"));
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
