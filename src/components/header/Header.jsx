import React from "react";

import logo from "../../assets/header/logo.svg";
import hash from "../../assets/header/hash.svg";
import person from "../../assets/header/person.svg";

import "./Header.style.css";

import Tab from "../tab/Tab";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">

        <div className="header__items">
          <img src={logo} alt="" />
          <h1>Sacred Earth Cafe</h1>
        </div>

        <div className="header__items buttons">
          <div>
            <img src={person} alt="" />
          </div>
          <div>
            <img src={hash} alt="" />
          </div>
        </div>
      </header>

      <Tab />
    </div>

  );
};

export default Header;
