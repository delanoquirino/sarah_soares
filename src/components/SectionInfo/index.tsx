import React from "react";

import * as S from "./styles";
import { Button } from "../Button";

export const SectionInfo = () => {
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
          <Button />
        </S.Container_Content>
        <S.Container_Card>
          <div>
            <h2>Analise Corporal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              necessitatibus fuga beatae suscipit fugiat tempora rem molestias,
              veniam aut iste odio repudiandae numquam omnis dolore ipsa facilis
              incidunt rerum eum!
            </p>
          </div>
          <div>
            <h2>Programas de Fitness</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              necessitatibus fuga beatae suscipit fugiat tempora rem molestias,
              veniam aut iste odio repudiandae numquam omnis dolore ipsa facilis
              incidunt rerum eum!
            </p>
          </div>
          <div>
            <h2>Saude e Nutrição</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              necessitatibus fuga beatae suscipit fugiat tempora rem molestias,
              veniam aut iste odio repudiandae numquam omnis dolore ipsa facilis
              incidunt rerum eum!
            </p>
          </div>
          <div>
            <h2>Flexibilidade</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              necessitatibus fuga beatae suscipit fugiat tempora rem molestias,
              veniam aut iste odio repudiandae numquam omnis dolore ipsa facilis
              incidunt rerum eum!
            </p>
          </div>
        </S.Container_Card>
      </S.Container>
    </S.SectionContainer>
  );
};
