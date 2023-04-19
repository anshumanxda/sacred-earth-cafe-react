import React, { useState } from "react";

import { main } from "../../data/data";

import arrow from "../../assets/special/arrow.svg";
import "./Special.style.css";
import Card from "./Card";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Special = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Header />

      <div className="special-container">
        <div className="banner">
          <h2>
            Welcome to <br />
            Sacred Earth Cafe
          </h2>
        </div>

        <div className="today-special" onClick={() => setShow(!show)}>
          <p>Today's Special</p>
          <hr />
          <img src={arrow} alt="" className={`${!show ? "hidden" : ""}`} />
        </div>

        {
          <div className="menu">
            {show &&
              main.map((item) => (
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

export default Special;
