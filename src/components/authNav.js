// src/components/authNav.js

import React from "react";

import AuthenticationButton from "./authenticationButton";
import NavLinks from './navLinks'

const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    <NavLinks />
    <AuthenticationButton />
  </div>
);

export default AuthNav;