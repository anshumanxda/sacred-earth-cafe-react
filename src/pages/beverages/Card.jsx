import React from "react";
import { useDispatch, useSelector } from "react-redux";

import veg from "../../assets/common/veg.svg";
import AddItems from "../../components/common/AddItems/AddItems";

import { addToCart, removeFromCart } from "../../redux/reducer/cart";
import { cartSelector } from "../../redux/selectors";

import "./Card.style.css";

const Card = ({ img, name, price, id, qty }) => {
  const dispatch = useDispatch();
  const { items } = useSelector(cartSelector);

  const handleAdding = (id, name, price) => {
    dispatch(
      addToCart({
        id,
        name,
        price,
      })
    );
  };

  const handleRemoving = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="beverages__card-container">
      <img className="card__image" src={img} alt="" />

      <div className="beverages__card__details">
        <p>{name}</p>

        <div className="beverages__price-items" >
          <div className="beverages__price-veg">
            <img src={veg} alt="" />
            <p>{price}</p>
          </div>

          <AddItems
            qty={items?.[id]?.qty}
            addHandler={handleAdding}
            minusHandler={handleRemoving}
            id={id}
            name={name}
            price={price}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
