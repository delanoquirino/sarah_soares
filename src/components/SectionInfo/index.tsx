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

export const SectionInfo = () => {
  return (
    <S.SectionContainer >
      <S.Container id="sectionInfo">
        <S.Container_Content>
          <span>EVERYBODY IS DIFFERENT</span>
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
        <S.Container_Card>
          <div>
            <S.Card_Title>
              <BsFillHeartPulseFill />
              <h2>Analise Corporal</h2>
            </S.Card_Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              necessitatibus fuga beatae suscipit fugiat tempora rem molestias,
              veniam aut iste odio repudiandae numquam omnis dolore ipsa facilis
              incidunt rerum eum!
            </p>
          </div>
          <div>
            <S.Card_Title>
              <IoIosFitness />
              <h2>Programas de Fitness</h2>
            </S.Card_Title>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              necessitatibus fuga beatae suscipit fugiat tempora rem molestias,
              veniam aut iste odio repudiandae numquam omnis dolore ipsa facilis
              incidunt rerum eum!
            </p>
          </div>
          <div>
            <S.Card_Title>
              <FaAppleAlt />
              <h2>Saude e Nutrição</h2>
            </S.Card_Title>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              necessitatibus fuga beatae suscipit fugiat tempora rem molestias,
              veniam aut iste odio repudiandae numquam omnis dolore ipsa facilis
              incidunt rerum eum!
            </p>
          </div>
          <div>
            <S.Card_Title>
              <AiOutlineCalendar />
              <h2>Flexibilidade</h2>
            </S.Card_Title>

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
