import React from "react";

//style
import * as S from "./styles";

// component
import { Button } from "../Button";

//Image
import Image from "next/image";
import crossfit from "../../../public/logo3.png";

export const SectionPrograms = () => {
  return (
    <S.SectionContainer id="sectionPrograms">
      <S.Container>
        <S.Container_Image>
          <Image src={crossfit} width={250} height={500} alt="crossfit" />
        </S.Container_Image>
        <S.Container_Content>
          <h1> Alcance seu potencial máximo e transforme sua vida!</h1>
          <p>
          Chegou a hora de abandonar a espera e se dedicar a ficar em forma! Com meu apoio, você vai esculpir o corpo dos seus sonhos, que se encaixará perfeitamente no seu estilo de vida. Não é justo abrir mão das coisas que você ama fazer, não é mesmo? Eu vou te guiar em todas as etapas da transformação do seu corpo, desde a nutrição até o exercício, levando você a alcançar sua melhor versão em todos os aspectos da vida, até mesmo em um nível molecular.
          </p>
          <p>
          Acredito que a personalização é fundamental para obter os melhores resultados possíveis, por isso meus programas de treinamento são adaptados para atender às suas metas individuais de condicionamento físico e ao seu nível atual. Independentemente de ser um iniciante ou um entusiasta experiente do fitness, minha masterclass de fitness foi projetada especialmente para você, para que possa alcançar seus objetivos e desfrutar plenamente da vida!
          </p>
          <Button hoverColor="red" />
        </S.Container_Content>
      </S.Container>
    </S.SectionContainer>
  );
};
