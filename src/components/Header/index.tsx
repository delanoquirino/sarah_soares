import Image from "next/image";
import React from "react";

// image
import logo from "../../../public/logo.svg";

//styles
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <div>
          <Image width={40} height={50} alt="logo" src={logo} />
        </div>
        <div>
          <S.List>
            <li>
              <S.List_Link href="/">Treinamento Pessoal</S.List_Link>
            </li>
            <li>
              <S.List_Link href="section_info">Saúde e Nutrição</S.List_Link>
            </li>
            <li>
              <S.List_Link href={"/"}>Entre em Contato</S.List_Link>
            </li>
          </S.List>
        </div>
      </S.Container>
    </S.Header>
  );
};
