import React from "react";

//style
import * as S from "./styles";

// component
import { Button } from "../Button";

//react-icons
import { BsFillHeartPulseFill } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { FaAppleAlt } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

//Image
import Image from "next/image";
import cross from "../../../public/crossfit.png";
import crossfit from "../../../public/logo3.png";

export const SectionPrograms = () => {
  return (
    <S.SectionContainer id="#section_info">
      <S.Container>
        <S.Container_Content>
          <h1>MAXIMIZE SUA VIDA</h1>
          <S.Container_Content_Text>
            <p>
              Pare de esperar para entrar forma! Ajudarei você a esculpir o
              corpo que se encaixa no seu estilo de vida e ajudarei você a
              mantê-lo em todos os aspectos da vida. Por que desistir das coisas
              que você gosta de fazer? Vou guiá-lo por todas as etapas de
              transformação do seu corpo, da nutrição ao exercício até a sua
              estrutura molecular.
            </p>
            <p>
              A personalização é essencial para obter os melhores resultados
              possíveis, razão pela qual meus programas de treino são
              modificados para atender às suas metas individuais de
              condicionamento físico e nível de condicionamento físico. Se você
              é novo no treino ou é um fã experiente de fitness, meu fitness
              masterclass foi projetado para você atingir seus objetivos e
              aproveitar sua vida!
            </p>
          </S.Container_Content_Text>
          <Button hoverColor="red" />
        </S.Container_Content>
        <S.Container_Image>
          <Image src={crossfit} width={300} height={550} alt="crossfit" />
        </S.Container_Image>
      </S.Container>
    </S.SectionContainer>
  );
};
