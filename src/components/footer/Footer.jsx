import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import user from "../../assets/footer/user.svg";
import home from "../../assets/footer/home.svg";
import cart from "../../assets/footer/cart.svg";

import { setCurrentTab } from "../../redux/reducer/ui";

import "./Footer.style.css";
import { cartSelector } from "../../redux/selectors";

const Footer = () => {
  const { items } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const handleNavigate = (e) => {
    const { route } = e.currentTarget.dataset;
    dispatch(setCurrentTab(route));
  };

  return (
    <div className="footer">
      <Link to="/special" data-route="special" onClick={handleNavigate}>
        <img src={user} alt="" />
      </Link>
      <Link to="/special" data-route="special" onClick={handleNavigate}>
        <img src={home} alt="" />
      </Link>
      <Link to="/place-order" data-route="cart" onClick={handleNavigate}>
        <div className="cart-icon">
          <img src={cart} alt="" />

          {!!Object.entries(items).length && (
            <span className="cart-count-bubble">{Object.entries(items).length}</span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Footer;
