import styled  from "styled-components";

export const Cardcart = styled.li`
background-color:  var(---color-background);
  
  border-radius: 5px;
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
  img {
    width: 60px;
    height: 60px;
    background-color: var(---color-secundary);
    margin-left: 23px;
    border-radius: 5px;
  }
  
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 12px;
    color: var(---color-gray);
  }




`