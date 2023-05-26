import { styled } from "styled-components"

export const SectionContainer = styled.div`
background-color: #ffff;
 border-top: 5px solid red;

`
export const Container = styled.div`
  max-width: 1440px;
  min-height: 70vh;
  padding: 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  
`

export const Content = styled.div`

margin-right: 130px;


h2 {
  font-size: 26px;
}
  

`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
`;

export const FLabel = styled.label`
  font-weight: bold;
  color:  #130D2E;

`;

export const FInput = styled.input`
  border: none;
  border-bottom: 1px solid #e7e7e7;
  outline: none;
  padding: 5px;
  color: #2A3281;

`;

export const FTextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid #e7e7e7;
  outline: none;
  padding: 5px;

`;

export const FButton = styled.button`
  padding: 10px;
  background-image: linear-gradient(to right, #EC1C23,#eb6569, #FF6B6E);
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-image, box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to right,  #FF6B6E, #eb6569, #EC1C23);
  }
 
`;

export const FormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`
export const Icon = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
  
`
export const Icon_Item = styled.div`
display: flex;
align-items: center;
gap: 10px;
font-size: 16px;


  
`

export const Footer = styled.footer`

display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

span {
  color: #ffff;
}
  
`

export const Footer_Icons = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin: 30px 0;

div {
  color: #e7e7e7;
  svg {
  height: auto;
  width: 30px;
  padding: 10px;
  
}

  :hover {
    color:  #EC1C23;
  }
}
  
`