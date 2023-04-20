import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { uiSelector } from "../../redux/selectors";
import { setCurrentTab } from "../../redux/reducer/ui";
import "./Tab.style.css";

const Tab = () => {
  const { currentTab } = useSelector(uiSelector)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const location = useLocation()

  const handleClick = (e) => {
    const { route } = e.currentTarget.dataset;
    dispatch(setCurrentTab(route))
    navigate('/' + route)
  };

  return (
    <div className="tab-container">
      <div
        className={`items ${location.pathname === "/special" ? "active-tab" : ""}`}
        data-route="special"
        onClick={handleClick}
      >
        <p>Special</p>
        <hr />
      </div>

      <div
        className={`items ${location.pathname === "/main" ? "active-tab" : ""}`}
        data-route="main"
        onClick={handleClick}
      >
        <p>Main</p>
        <hr />
      </div>

      <div
        className={`items ${location.pathname === "/desserts" ? "active-tab" : ""}`}
        data-route="desserts"
        onClick={handleClick}
      >
        <p>Desserts</p>
        <hr />
      </div>

      <div
        className={`items ${location.pathname === "/beverages" ? "active-tab" : ""}`}
        data-route="beverages"
        onClick={handleClick}
      >
        <p>Beverages</p>
        <hr />
      </div>
    </div>
  );
};

export default Tab;
