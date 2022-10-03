// import React, { Component } from "react";
import Container from "../Container";
import Foodcart from "../cartFood";
import "./Buycart.css";
// import { useState } from "react";
const Buycart = ({ foods, setFoodscart, foodscart }) => {
  const Total = foodscart.reduce((acc, atual) => acc + atual.price, 0);
  console.log(Total);

  function removeAll(elemt) {
    setFoodscart([]);
  }

  return (
    <>
      <div className="CointainerBuycart">
        <div className="Backgroundcolor">
          <h1 className="H1cart">Carrinho de Compras</h1>
        </div>
        <ul className="Ulbuycart">
          <Foodcart
            foods={foods}
            foodscart={foodscart}
            setFoodscart={setFoodscart}
          ></Foodcart>
        </ul>

        <div className="SizePage">
          <div className="Line"></div>
          <div className="DivValue">
            <h1 className="H1value">Total</h1>
            <p>R$ {Total},00</p>
          </div>
          <div>
            <button onClick={removeAll}  className="ButtonRemoveall">Remover todos</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buycart;
