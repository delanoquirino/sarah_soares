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
      font-size: 1.5rem; 
		  
    }

    h2 {
      font-size: 1.5rem; 
		 
    }

    p,a {
      font-size: 1rem; 
		  

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

    @media (min-width: 768px) {
  body {
    h1 {
      font-size: 3.75rem;
		 
    }
    h2 {
      font-size: 2.25rem; 
		  
    }
    p,a {
      font-size: 1.25rem; 
		   
    }
    
  }
}

@media (min-width: 640px) {
  body {
    h1 {
      font-size: 3rem; 
		  
    }
    h2 {
      font-size: 1.875rem; 
		
    }

    p,a {
      font-size: 1.125rem; 
		   
    }
   
  }
}

`