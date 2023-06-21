import { Button } from './../Button/style';
import { styled } from "styled-components"

export const SectionContainer = styled.div`
 background-color: #130D2E;
 border-top: 5px solid red;

`
export const Container = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  padding: 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  justify-content: center;
  
  
  

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 40px 0;
    min-height: 50vh;
    
  }
`

export const Container_Content = styled.div`
  
  h1 {
    color: #EC1C23;
    font-size: 45px;
    margin-bottom: 40px;
    text-transform: uppercase;

    
  }
  margin-bottom: 60px;
  p { 
    color: #fff;
    font-size: 21px}


  button {
    width: 100%;
  }
  
  @media (max-width: 1024px) {
    h1 {
   
    font-size: 2.688em;
       
  }

  p { 
    font-size: 1.125em}
    
  }

  button {
    margin-top: 40px;
  }
 

`



export const Container_Image = styled.div`
 
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
   display: none;
    
  }
`