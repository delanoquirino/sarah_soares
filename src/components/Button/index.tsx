import React from "react";

//styles
import * as S from "./style";

interface ButtonProps {
  hoverColor: string;
}

export const Button = ({ hoverColor }: ButtonProps) => {
  return <S.Button color={hoverColor}>Entre em Contato</S.Button>;
};
