import styled from 'styled-components';

interface ContainerProps {
  propsidebar: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color:#0F0F15;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 48%;
  right: ${props => (props.propsidebar ? '0' : '-100%')};
  animation: showSidebar .4s;
  
   
  @media (max-width: 800px)
    {
      width: 100%
    }

  > svg {
    position: fixed;
    color:#D3D3D3;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
    }

     
  }

`;

export const Content = styled.div`
  margin-top: 100px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
    a {
     
      padding: 16px;
      width: 100%;
      text-align: center;
      transition: 0.2 ease-in-out;
      cursor: pointer;
     &:hover {
      
      background-color: #EC1C23;
     
     }
      
    }
`;

