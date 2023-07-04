import React from "react";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Footer from "./Footer";
import NavMenu from "./NavMenu";

const Home = ({ authSetter, isAuth }) => {
  return (
    <>
      <NavMenu isAuth={isAuth} authSetter={authSetter} />
      <Banner />
      {isAuth && <Blogs />}
      <Footer />
    </>
  );
};

export default Home;
