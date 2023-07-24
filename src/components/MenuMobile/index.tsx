"use client"

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Sidebar } from '../Sidebar'; 
import * as S from "./styles";

export const MenuMobile = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar); 

  return (
    <S.Container>
      <GiHamburgerMenu onClick={showSiderbar} />
      {sidebar && <Sidebar sidebar={setSidebar} setSidebar={setSidebar} />}
    </S.Container>
  );
};
