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
  padding-top: 8em;
  padding-bottom: 8em;
  
  @media (max-width: 640px) {
    padding-top: 5em;
    padding-bottom: 5em;
  }
  

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    min-height: 50vh;
    
  }
`

export const Container_Content = styled.div`
  
  h1 {
    color: #EC1C23;
   
    margin-bottom: 40px;
    text-transform: uppercase;

    
  }
  margin-bottom: 60px;
  p { 
    color: #fff;
   }


  button {
    width: 100%;
  }
  
  button {
    margin-top: 20px;
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