// src/components/navBar.js

import React from "react";

// import MainNav from "./mainNav";
import AuthNav from "./authNav";

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          {/* <MainNav /> */}
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;