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
      <S.Container>
        <S.Content>
          <h1>SARAH SOARES</h1>
          <p>
            Ajudando as pessoas a viver vidas mais felizes e saudáveis através
            do condicionamento física, nutrição adequada e uma mentalidade
            aprimorada.
          </p>
          <Button />
        </S.Content>
        <S.Icons>
          <S.SocialLink
            href="https://www.instagram.com/treinadora_sarahsoares/"
            target="_blank"
          >
            <BsInstagram />
          </S.SocialLink>
          <S.SocialLink>
            <BsWhatsapp />
          </S.SocialLink>
          <S.SocialLink>
            <BsFacebook />
          </S.SocialLink>
        </S.Icons>
      </S.Container>
    </S.SectionContainer>
  );
};
