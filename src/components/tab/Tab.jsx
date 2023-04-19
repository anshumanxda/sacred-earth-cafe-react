import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { uiSelector } from "../../redux/selectors";
import { setCurrentTab } from "../../redux/reducer/ui";
import "./Tab.style.css";

const Tab = () => {
  const { currentTab } = useSelector(uiSelector)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleClick = (e) => {
    const { route } = e.currentTarget.dataset;
    dispatch(setCurrentTab(route))
    navigate('/' + route)
  };

  return (
    <div className="tab-container">
      <div
        className={`items ${currentTab === "special" ? "active-tab" : ""}`}
        data-route="special"
        onClick={handleClick}
      >
        <p>Special</p>
        <hr />
      </div>

      <div
        className={`items ${currentTab === "main" ? "active-tab" : ""}`}
        data-route="main"
        onClick={handleClick}
      >
        <p>Main</p>
        <hr />
      </div>

      <div
        className={`items ${currentTab === "desserts" ? "active-tab" : ""}`}
        data-route="desserts"
        onClick={handleClick}
      >
        <p>Desserts</p>
        <hr />
      </div>

      <div
        className={`items ${currentTab === "beverages" ? "active-tab" : ""}`}
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
