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

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
  
`

export const Content = styled.div`

margin-right: 130px;
height: 70%;

h2 {
  font-size: 36px;
  color:#EC1C23;
  text-transform: uppercase;
  font-style: italic;
}

p {
  font-size: 18px;
  line-height: 1.5;
}

span {

}

svg {
  width: 20px;
  height: auto;
}

@media (max-width: 1024px) {
      width: 100%;
      margin-right: 0;
  }
`
export const Icon = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

a:hover {
  
color: #EC1C23;

}

@media (max-width: 1024px) {
      width: 100%;
      flex-direction: row;
      margin: 30px 0;
      justify-content: center;
      gap: 30px;
  }

  @media (max-width: 540px) {
      gap: 10px;
      flex-direction: column;
     
  }
  
`
export const Icon_Item = styled.a`
display: flex;
align-items: center;
gap: 10px;
font-size: 16px;
text-decoration: none;
color: #130D2E;
width: fit-content;






`


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    margin-top: 40px;
    width: 100%;
  }
  
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


export const Footer = styled.footer`

display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

span {
  color: #ffff;
  padding: 20px;
}

@media (max-width: 540px) {
  span {
  font-size: 12px;
}
  }
  
`

export const Footer_Icons = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin: 20px 0;
  

  svg {
  color: #e7e7e7;
  height: auto;
  width: 30px;
  padding: 10px;
  }

  :hover {
    color:  #EC1C23;
  }

  
`