import React from "react";

import plus from "../../../assets/common/plus.svg";
import minus from "../../../assets/common/minus.svg";

import './AddItems.style.css'

const AddItems = ({ qty, addHandler, minusHandler, id, name, price }) => {

  if (!qty) {
    return (
      <div onClick={() => addHandler(id, name, price)} className="no-items">
        <div className="plus-button">
          <img src={plus} alt="" />
        </div>
        <p>ADD</p>
      </div>
    );
  }

  return (
    <div className="items-added">
      <div onClick={() => minusHandler(id)} className="buttons">
        <img src={minus} alt="" />
      </div>
      <p>{qty}</p>

      <div onClick={() => addHandler(id, name, price)} className="buttons">
        <img src={plus} alt="" />
      </div>
    </div>
  );
};

export default AddItems;
