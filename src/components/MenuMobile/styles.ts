
import { styled } from "styled-components";

export const Container = styled.div`
  svg {
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  display: none;
  

    @media (max-width: 1024px) {
      display: flex
  }
`

export const Sidebar = styled.div`
  background-color: red;
`