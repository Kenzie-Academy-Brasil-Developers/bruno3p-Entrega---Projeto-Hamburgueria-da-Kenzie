import "./App.css";
import Buycart from "./Components/Buycart";
import Foodlist from "./Components/FoodList";
import {  useState } from "react";
import Nav from "./Components/Nav";
import './index.css'
import './colors.css'

function App() {
  const [foods, setFoods] = useState([]);
  const [foodscart, setFoodscart] = useState([]);
  const [dataFilter,setdataFilter] = useState([])
  console.log(dataFilter)
  
  
  return (
    <div className="App">
      <Nav  foods={foods}  setFoods={setFoods} setdataFilter={setdataFilter} />

      <div className="DisplayFlex" >
      
      <Foodlist   foods={foods} setFoods={setFoods} foodscart={foodscart} setFoodscart={setFoodscart}  dataFilter={dataFilter} />
      

        <Buycart foods={foods} foodscart={foodscart} setFoodscart={setFoodscart} />
      </div>
    </div>
  );
}

export default App;
