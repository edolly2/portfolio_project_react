import Logo from "./bee.png";
import { NavLink } from "react-router-dom";
import React from "react";

const HeaderComponent = () => {
  return (
    <header className="p-4">
      <NavLink className="site-brand" to="/">
        <img className="site-brand-logo" src={Logo} alt="Logo" />
        <p className="site-brand-title">BeeBilingual</p>
      </NavLink>
    </header>
  );
};

export default HeaderComponent;
