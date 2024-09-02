import { styled } from "styled-components";

export const SectionContainer = styled.div`
  background-color: #130d2e;
  border-top: 5px solid red;
`;
export const Container = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  padding: 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  justify-content: center;
  gap: 8rem;

  @media (max-width: 640px) {
    padding-top: 2em;
    padding-bottom: 2em;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    min-height: 50vh;
  }
`;

export const Container_Content = styled.div`
  h1 {
    color: #ec1c23;

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
`;

export const Container_Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;
