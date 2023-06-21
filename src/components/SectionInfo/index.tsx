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
         
          <h1>Descubra o seu potencial!</h1>
          <S.Container_Content_Text>
            <p>
            Chegou a hora de deixar de lado a espera e buscar sua melhor forma! Estou aqui para ajudá-lo a esculpir um corpo que se alinhe perfeitamente ao seu estilo de vida e a mantê-lo em todos os aspectos da vida. Por que abrir mão das coisas que você tanto gosta de fazer? Irei acompanhá-lo em todas as etapas da transformação do seu corpo, desde a nutrição até o exercício, explorando até mesmo a sua estrutura molecular.
            </p>
            <p>
            A personalização desempenha um papel fundamental na obtenção dos melhores resultados possíveis, por isso meus programas de treinamento são adaptados para atender às suas metas individuais de condicionamento físico e ao seu nível atual. Não importa se você é um iniciante ou um entusiasta experiente do fitness, minha masterclass de fitness foi cuidadosamente elaborada para ajudá-lo a atingir seus objetivos e desfrutar plenamente da vida. Descubra o seu potencial único e embarque nessa jornada de transformação!
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
            Entendemos que cada indivíduo é único, e é por isso que nossa análise corporal abrange diversos aspectos, desde a composição corporal até o funcionamento metabólico. Utilizando tecnologia de ponta e conhecimentos especializados, identificamos áreas de melhoria e pontos fortes para otimizar sua jornada de bem-estar.
            </p>
          </div>
          <div>
            <S.Card_Title>
              <IoIosFitness />
              <h2>Treino Personalizados</h2>
            </S.Card_Title>

            <p>
            Nossa abordagem personalizada leva em consideração suas habilidades, limitações e motivações. Com base nessas informações, criamos um plano de treinamento específico, combinando exercícios variados, nutrição adequada e suporte contínuo.
            </p>
          </div>
          <div>
            <S.Card_Title>
              <FaAppleAlt />
              <h2>Saude e Nutrição</h2>
            </S.Card_Title>

            <p>
            Oferecemos orientações práticas para incorporar escolhas alimentares saudáveis no seu dia a dia. Nossa abordagem visa criar uma relação positiva com a comida, para que você possa desfrutar de refeições deliciosas enquanto cuida da sua saúde.
            </p>
          </div>
          <div>
            <S.Card_Title>
              <AiOutlineCalendar />
              <h2>Flexibilidade</h2>
            </S.Card_Title>

            <p>
            Esteja você procurando agendar uma consulta, participar de uma sessão de treinamento ou receber orientações personalizadas, estamos prontos para encontrar o melhor horário para você. Nosso objetivo é proporcionar conveniência e facilitar sua participação em nossos serviços.
            </p>
          </div>
        </S.Container_Card>
      </S.Container>
    </S.SectionContainer>
  );
};
