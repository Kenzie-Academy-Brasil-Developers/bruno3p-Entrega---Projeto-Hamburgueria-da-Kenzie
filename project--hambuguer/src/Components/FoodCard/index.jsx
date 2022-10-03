import React from "react";
import Foodcart from "../cartFood";
import { Card } from "./styles";

const FoodCard = ({ foodscart, setFoodscart, foods, dataFilter }) => {
  function addCart(event) {
    const id = event.target.id;
    const result = foodscart.some((element) => element.id == id);

    return foods.map((element) => {
      !result &&
        element.id == id &&
        setFoodscart([
          ...foodscart,
          {
            id: element.id,
            name: element.name,
            category: element.category,
            img: element.img,
            price: parseInt(element.price.toFixed(1)),
          },
        ]);
    });
  }

  return (
    <>
      {dataFilter.length == 0 &&
        foods.map((element, index) => (
          <Card key={index}>
            <div>
              <img src={element.img} alt="" />
            </div>
            <section>
              <h2>{element.name}</h2>
              <h3>{element.category}</h3>
              <p>R$ {parseFloat(element.price.toFixed(1))},00</p>
              <button id={element.id} onClick={(event) => addCart(event)}>
                Adicionar
              </button>
            </section>
          </Card>
        ))}
      {dataFilter.length > 0 &&
        dataFilter.map((element, index) => (
          <Card key={index}>
            <div>
              <img src={element.img} alt="" />
            </div>
            <section>
              <h2>{element.name}</h2>
              <h3>{element.category}</h3>
              <p>R$ {parseFloat(element.price.toFixed(1))},00</p>
              <button id={element.id} onClick={(event) => addCart(event)}>
                Adicionar
              </button>
            </section>
          </Card>
        ))}
    </>
  );
};

export default FoodCard;
