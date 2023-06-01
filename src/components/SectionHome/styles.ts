'use client'

import { styled } from "styled-components";

export const SectionContainer = styled.div`
 background-image: url('/bg2.png');
 background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;

`
export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`
export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 800px;
 
  h1 {
    
    font-size: 68px;
    color: #ffff;
  }

  p{
    color: #ffff;
    font-size: 22px;
  }

  @media (max-width: 800px){
    
  h1 {
    
    font-size: 43px;
    
  }

  p{
    line-height: 1.5;
    font-size: 18px;
  }
}

  
`
export const Content_Button = styled.button`
width: 200px;
height: 44px;
background-color: #EC1C23;
border-radius: 5px;
color: #ffff;
font-size: 20px;
 cursor: pointer;
 

 &:hover {
      background-color: transparent;
      border: 1px solid #EC1C23;
    }

`
export const Icons = styled.ul`
color: #fff;
display: flex;
gap: 20px;
padding: 0;
margin-top: 40px;

`
export const SocialLink = styled.a`
color: #9E9E9E;
border-radius: 50%;

:hover{
  color:#EC1C23;
}


`