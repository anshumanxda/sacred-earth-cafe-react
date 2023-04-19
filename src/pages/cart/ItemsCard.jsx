import React from "react";
import { useDispatch, useSelector } from "react-redux";

import veg from "../../assets/common/veg.svg";
import AddItems from "../../components/common/AddItems/AddItems";

import { addToCart, removeFromCart } from "../../redux/reducer/cart";
import { cartSelector } from "../../redux/selectors";

import "./ItemsCard.style.css";

const ItemsCard = ({ img, name, price, id, qty, previousOrder }) => {
  const dispatch = useDispatch();
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
    <div className="items-card">
      <div className="price-name">
        <img src={veg} alt="" />
        <div>
          <p className="name">{name}</p>
          <p className="price">{price}</p>
        </div>
      </div>

      {previousOrder ? (
        <p>{qty}</p>
      ) : (
        <AddItems
          qty={qty}
          id={id}
          name={name}
          price={price}
          addHandler={handleAdding}
          minusHandler={handleRemoving}
        />
      )}
    </div>
  );
};

export default ItemsCard;
