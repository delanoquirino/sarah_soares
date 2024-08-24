import { styled } from "styled-components";

export const SectionContainer = styled.div`
  background-color: #fafafa;
  border-top: 5px solid red;
`;
export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  align-content: center;
  justify-content: center;
    padding: 100px 0;
  h1 {
    color: #EC1C23;
   
    margin-bottom: 40px;
    text-transform: uppercase;
+
    font-style: italic;
    font-weight: bold
    
  }
   
`;

export const Container_Content = styled.div`
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
  width: 80%;
  height: 500px;
`;
