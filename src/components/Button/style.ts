import { styled } from "styled-components";

export const Button = styled.button`
width: 200px;
height: 44px;
background-color: #EC1C23;
border-radius: 5px;;

cursor: pointer;
color: #ffff;
 transition: background-color  0.4s ease;

 &:hover {
  background-color: transparent;
  border: 1px solid #EC1C23;
  color: ${(prop) => prop.color ? prop.color : '#ffff'};

}

`