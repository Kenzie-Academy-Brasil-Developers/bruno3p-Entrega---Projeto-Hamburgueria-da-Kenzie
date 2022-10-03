import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  height: 326px;
  margin-left: 16px;
  width: 100%;

  

  @media(min-width:1000px){
    flex-wrap:wrap;
    height: 80%;
    width: 950px;
  }


`;
