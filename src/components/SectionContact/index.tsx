import { SubmitHandler, useForm } from "react-hook-form";

// react-icons
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

// styles
import * as S from "./styles";


// image

import Link from "next/link";

type FormValues = {
  nome: string;
  email: string;
  mensagem: string;
};

export const SectionContact = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  const dataAtual = new Date();
  const ano = dataAtual.getFullYear();
  return (
    <>
      <S.SectionContainer >
        <S.Container >
          <S.Content id="sectionContact">
            <h2>Entre em contato</h2>
            <p>
              Quer começar a treinar alguma modalidade esportiva e não sabe por onde começar? Vem comigo que te ajudo! Uma boa preparação irá te ajudar a chegar ao seu objetivo
            </p>
            <S.Icon>
              <S.Icon_Item href="https://wa.link/67z1ua" target="_blank">
                <BsWhatsapp />
                <span>(86) 99466-4490</span>
              </S.Icon_Item>
              <S.Icon_Item href="https://www.instagram.com/sarahsoares_treinadora/" target="_blank">
                <BsInstagram /> <span>@treinadora_sarahsoares</span>
              </S.Icon_Item>
            </S.Icon>
          </S.Content>
          <S.FormContainer onSubmit={handleSubmit(onSubmit)}>


            <S.FormData>
              <S.FLabel>Nome:</S.FLabel>
              <S.FInput type="text" name="nome" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Email:</S.FLabel>
              <S.FInput type="text" name="email" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Idade:</S.FLabel>
              <S.FInput type="email" name="age" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Peso:</S.FLabel>
              <S.FInput type="email" name="weight" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Altura:</S.FLabel>
              <S.FInput type="email" name="height" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Contato:</S.FLabel>
              <S.FInput type="email" name="contact" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Endereço:</S.FLabel>
              <S.FInput type="email" name="adress" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Possui alguma doença crônica? Se sim,qual?</S.FLabel>
              <S.FInput type="email" name="adress" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Faz uso de algum medicamento?se sim, qual?
              </S.FLabel>
              <S.FInput type="email" name="adress" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Tem alguma lesão?se sim, qual?
              </S.FLabel>
              <S.FInput type="email" name="adress" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Sente dor? Onde? De 0 a 10 qual nível da dor?
              </S.FLabel>
              <S.FInput type="email" name="adress" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Qual sua maior dificuldade no dia a dia?
              </S.FLabel>
              <S.FInput type="email" name="adress" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Qual seu maior objetivo
              </S.FLabel>
              <S.FInput type="email" name="adress" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Como é sua alimentação? Ruim;regular; ótima
              </S.FLabel>
              <S.FInput type="email" name="adress" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Dorme bem? Quantas horas por dia?
              </S.FLabel>
              <S.FInput type="email" name="adress" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Diga em uma palavra o que define sua saúde hoje
              </S.FLabel>
              <S.FInput type="email" name="adress" />
            </S.FormData>

            <S.FButton type="submit">Enviar</S.FButton>

          </S.FormContainer>
        </S.Container>
      </S.SectionContainer>
      <S.Footer>
        <S.Footer_Icons>
          <div>
            <Link href="/">
              <MdOutlineEmail />
            </Link>

          </div>
          <div>
            <Link href="https://wa.link/67z1ua" target="_blank">
              <BsWhatsapp />
            </Link>
          </div>
          <div>
            <Link href="https://www.instagram.com/treinadora_sarahsoares/"
              target="_blank">
              <BsInstagram />
            </Link>
          </div>
        </S.Footer_Icons>
        <span>
          Sarah Soares - Copyright ® {ano} - Todos os Direitos Reservados.
        </span>
      </S.Footer>
    </>
  );
};
