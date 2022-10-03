import styled from "styled-components";

export const Card = styled.li`
  background-color: var(---color-white);
  border: 2px solid var(---color-secundary);
  border-radius: 5px;
  height: 300px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 177px;
    height: 150px;
    background-color: var(---color-background);
  }
  div {
    width: 270px;
    height: 150px;
    background-color: var(---color-background);
    display: flex;
    justify-content: center;
    
  }
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 12px;
    color: var(---color-gray);
  }
  button {
    background-color: var(---color-primary);
    border-radius: 8px;
    border: 2px solid var(---color-primary);
    width: 106px;
    height: 40px;
    color: var(---color-white);
    font-size: 14px;
  }
  p{
   font-size: 14px;
   color: var(---color-primary);
  }
  section{
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   height: 150px;
   margin-left: 21px;
   margin-bottom: 23px;
  }
`;
