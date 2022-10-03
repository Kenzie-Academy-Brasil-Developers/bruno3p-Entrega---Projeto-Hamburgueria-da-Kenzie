import React from "react";

import { Cardcart } from "./style";

const Foodcart = ({ foods, foodscart, setFoodscart }) => {
  
  function remove(elemt) {
    const removeResult = foodscart.filter((element) => element !== elemt);
    setFoodscart(removeResult);
  }

  return foodscart.map((element) => (
    <Cardcart>
      <div>
        <img src={element.img} alt="" />
      </div>
      <div className="DivBuy">
        <div className="Datacart" >
        <h2>{element.name}</h2>
        <h3>{element.category}</h3>
        </div>
        <div>
        <button className="ButtonCart"  onClick={() => remove(element)}>remover</button>
        </div>
      </div>
    </Cardcart>
  ));
};

export default Foodcart;
