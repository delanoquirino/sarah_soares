import React from "react";

//components
import { Button } from "../Button";

//react-icons
import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";

//styles
import * as S from "./styles";

export const SectionHome = () => {
  return (
    <S.SectionContainer>
      <S.Container id="sectionHome">
        <S.Content>
          <h1>SARAH SOARES</h1>
          <p>
            Ajudando as pessoas a viver vidas mais felizes e saudáveis através
            do condicionamento física, nutrição adequada e uma mentalidade
            aprimorada.
          </p>
          <Button hoverColor="white" />
        </S.Content>
        <S.Icons>
          <S.SocialLink
            href="https://www.instagram.com/treinadora_sarahsoares/"
            target="_blank"
          >
            <BsInstagram />
          </S.SocialLink>
          <S.SocialLink href="https://wa.link/67z1ua" target="_blank">
            <BsWhatsapp />
          </S.SocialLink>
          
        </S.Icons>
      </S.Container>
    </S.SectionContainer>
  );
};
