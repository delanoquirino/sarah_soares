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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10em;
  padding-bottom: 10em;

  @media (max-width: 640px) {
    padding-top: 8em;
  padding-bottom: 8em;
}

`

export const Container_Content = styled.div`
  border-bottom: 2px #EC1C23 solid;
  span {
    
    display: block;
    font-style: italic;
    font-weight: bold;
    color: #EC1C23;
     }
  h1 {
    color: #2A3281;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

`
export const Container_Content_Text = styled.div`
  margin-bottom: 60px;
  
 
`


export const Container_Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 60px;
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