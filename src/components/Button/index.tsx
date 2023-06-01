import React from "react";

//styles
import * as S from "./style";
import { Link } from "react-scroll";

interface ButtonProps {
  hoverColor: string;
}

export const Button = ({ hoverColor }: ButtonProps) => {
  return <S.Button color={hoverColor}><Link to="sectionContact" spy={true} smooth={true} offset={50} duration={500}>Entre em Contato</Link></S.Button>;
};
