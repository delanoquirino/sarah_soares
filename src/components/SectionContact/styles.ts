import { styled } from "styled-components";

export const SectionContainer = styled.div`
  background-color: #ffff;
`;
export const Container = styled.div`
  max-width: 1440px;
  min-height: 70vh;
  padding: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 20px;
  }
`;

export const Content = styled.div`
  margin-right: 130px;
  height: 70%;

  h2 {
    color: #ec1c23;
    text-transform: uppercase;
    font-style: italic;
  }

  svg {
    width: 20px;
    height: auto;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-right: 0;
  }
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a:hover {
    color: #ec1c23;
  }

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
    margin: 30px 0;
    gap: 30px;
  }

  @media (max-width: 540px) {
    gap: 10px;
    flex-direction: column;
  }
`;
export const Icon_Item = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #130d2e;
  width: fit-content;
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  gap: 30px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  @media (max-width: 824px) {
    margin-top: 40px;
    padding: 10px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FLabel = styled.label`
  font-weight: bold;
  color: #130d2e;
`;

export const FInput = styled.input`
  border: none;
  border-bottom: 1px solid #e7e7e7;
  outline: none;
  padding: 5px;
  color: #2a3281;
`;

export const FTextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid #e7e7e7;
  outline: none;
  padding: 5px;
`;

export const FButton = styled.button`
  padding: 10px;
  background-image: linear-gradient(to right, #ec1c23, #eb6569, #ff6b6e);
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-image, box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to right, #ff6b6e, #eb6569, #ec1c23);
  }
`;

export const FormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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
`;

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
    color: #ec1c23;
  }
`;
