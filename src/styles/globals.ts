"use client";
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    font-size: 100%;

   
    
    h1 {
      margin: 0;
    }

    a {
      text-decoration: none;
    }

    li{
      list-style: none;
    }

    button {
      border: none;
    }
    
  }

  @media (max-width: 1240px) {
  body {
    font-size: 95%; /* Tamanho da fonte para telas menores que 768px */
  }
}

    @media (max-width: 768px) {
  body {
    font-size: 90%; /* Tamanho da fonte para telas menores que 768px */
  }
}

@media (max-width: 480px) {
  body {
    font-size: 80%; /* Tamanho da fonte para telas menores que 480px */
  }
}

`