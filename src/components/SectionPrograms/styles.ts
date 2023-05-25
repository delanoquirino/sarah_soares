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
  align-items: center;
`

export const Container_Content = styled.div`


  h1 {
    color: #EC1C23;
    font-size: 45px;
    margin-bottom: 40px;
  }

`
export const Container_Content_Text = styled.div`
  margin-bottom: 60px;
  p { 
    color: #fff;
    font-size: 21px}

`


export const Container_Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`