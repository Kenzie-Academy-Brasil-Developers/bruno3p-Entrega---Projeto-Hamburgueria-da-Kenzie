import { useEffect } from "react";
import api from "../../services/api";
import Container from "../Container";
import FoodCard from "../FoodCard";
import { List } from "./style";
import './overflow.css'

const Foodlist = ({ setFoods, foods,foodscart,setFoodscart,dataFilter }) => {
  useEffect(() => {
    api
      .get(`/products`, {
        params: {
          limit: 10,
          offset: 0,
        },
      })
      .then((response) => {
        // console.log(response);
        const results = response.data;
        setFoods(results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Container className="Overflow" >
        <List>
          
          <FoodCard  dataFilter={dataFilter}  foodscart={foodscart} setFoodscart={setFoodscart} foods={foods} />
          
        </List>
      </Container>
    </>
  );
};

export default Foodlist;
