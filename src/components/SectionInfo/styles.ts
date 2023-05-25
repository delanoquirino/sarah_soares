import { styled } from "styled-components"

export const SectionContainer = styled.div`
 background-color: white;
 border-top: 5px solid red;

`
export const Container = styled.div`
  max-width: 1440px;
  
  min-height: calc(100vh - 54px);
  padding: 30px;
  padding-top: 80px;
  margin: 0 auto;
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`



export const Container_Content = styled.div`

  h1 {
    color: #2A3281;
    font-size: 45px;
    margin-bottom: 60px;
  }

`
export const Container_Content_Text = styled.div`
  padding-right: 140px;
  margin-bottom: 60px;
  p { font-size: 21px}

`
export const Container_Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  div {
    display: inline-block;
    margin-bottom: 50px;
    padding-left: 20px;
    
  }
  

`