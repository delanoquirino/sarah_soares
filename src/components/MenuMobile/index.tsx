import React, { useState } from "react";

//react-icons
import { GiHamburgerMenu } from "react-icons/gi";

//styles
import * as S from "./styles";
import { Sidebar } from "../Sidebar";

export const MenuMobile = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <S.Container>
      <GiHamburgerMenu onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar}/>}
    </S.Container>
  );
};
