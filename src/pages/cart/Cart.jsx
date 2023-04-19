import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartSelector, ordersSelector } from "../../redux/selectors";

import yellow from "../../assets/common/yellow.svg";
import back from "../../assets/common/back.svg";
import arrow from "../../assets/special/arrow.svg";

import "./Cart.style.css";
import ItemsCard from "./ItemsCard";
import CartFooter from "./CartFooter";

const Cart = () => {
  const [showCurrent, setShowCurrent] = useState(true);
  const [showPrevious, setShowPrevious] = useState(true);

  const { items } = useSelector(cartSelector);
  const { orders } = useSelector(ordersSelector);

  const numberOfItems = Object.entries(items).reduce(
    (total, [id, item]) => item.qty + total,
    0
  );

  return (
    <div className="cart">
      <header>
        <div>
          <Link to={-1}>
            {" "}
            <img src={back} alt="" />
          </Link>

          <h2>Place Order</h2>
        </div>
        <img src={yellow} alt="" />
      </header>

      <div
        className="current-order"
        onClick={() => setShowCurrent(!showCurrent)}
      >
        <p>Current Order</p>
        <hr />
        <img src={arrow} alt="" className={`${!showCurrent ? "hidden" : ""}`} />
      </div>

      {showCurrent && !!Object.entries(items).length && (
        <div className="cart__item-container">
          {Object.entries(items).map(([id, item]) => (
            <ItemsCard
              name={item.name}
              price={item.price}
              qty={item.qty}
              id={item.id}
            />
          ))}
        </div>
      )}

      <div
        className="current-order"
        onClick={() => setShowPrevious(!showPrevious)}
      >
        <p>Previous Order</p>
        <hr />
        <img
          src={arrow}
          alt=""
          className={`${!showPrevious ? "hidden" : ""}`}
        />
      </div>

      {showPrevious && !!orders.length && (
        <div className="cart__item-container">
          {orders.map((item) => (
            <ItemsCard
              name={item.name}
              price={item.price}
              qty={item.qty}
              id={item.id}
              previousOrder={true}
            />
          ))}
        </div>
      )}

      <CartFooter noOfItems={numberOfItems} items={items} />
    </div>
  );
};

export default Cart;
