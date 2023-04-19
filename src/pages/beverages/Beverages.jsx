import React, { useState } from "react";

import { beverages } from "../../data/data";

import arrow from "../../assets/special/arrow.svg";
import "./Beverages.style.css";
import Card from "./Card";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Beverages = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Header />

      <div className="beverages-container">
        <div className="acai-bowls" onClick={() => setShow(!show)}>
          <p>Acai Bowls</p>
          <hr />
          <img src={arrow} alt="" className={`${!show ? "hidden" : ""}`} />
        </div>

        {
          <div className="beverages__menu">
            {show &&
              beverages.map((item) => (
                <Card
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  id={item.id}
                  qty={item?.qty}
                />
              ))}
          </div>
        }
      </div>

      <Footer />
    </>
  );
};

export default Beverages