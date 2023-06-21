import { styled } from "styled-components"

export const SectionContainer = styled.div`
 background-color: white;
 border-top: 5px solid red;


`
export const Container = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  padding: 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  @media (max-width: 1024px) {
    display:flex;
    flex-direction: column;
    padding: 80px 30px;
    

  }
`

export const Container_Content = styled.div`
  border-right: 2px #EC1C23 solid;
  span {
    
    display: block;
    margin-bottom: 20px;
    font-style: italic;
    font-weight: bold;
    color: #EC1C23;
    

  }

  h1 {
    color: #2A3281;
    font-size: 2.813em;
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 2px #EC1C23 solid;
    h1 {
   
    font-size: 2.688em;
   
  }
  }

  button {
    margin-bottom: 50px;
  }

`
export const Container_Content_Text = styled.div`
  padding-right: 140px;
  margin-bottom: 60px;
  p { font-size: 1.313em}

  @media (max-width: 1024px) {
    
      padding-right: 0%;
      p { font-size: 1.125em}
  }

`


export const Container_Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  div {
    display: inline-block;
    margin-bottom: 50px;
    padding-left: 20px;
    
  }

  h2 {
    font-style: italic;
    color: #2A3281;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    div {
        margin-bottom: 20px;
    padding-left: 0;
    p {
      margin: 0;
    }
  }

}
  
`
export const Card_Title = styled.span`
 display: flex;
 align-items: center;
 gap: 10px;
 svg {
  height: 30px;
  width: auto;
  color: red;
 }
 
`