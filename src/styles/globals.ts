"use client";
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    
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
`