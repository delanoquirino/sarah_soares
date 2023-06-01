import { useForm, SubmitHandler } from "react-hook-form";

// react-icons
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

// styles
import * as S from "./styles";
import Image from "next/image";

// image
import crossfit from "../../../public/logo3.png";
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
  return (
    <>
      <S.SectionContainer >
        <S.Container >
          <S.Content id="sectionContact">
            <h2>Get in Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
              eros.
            </p>
            <S.Icon>
              <S.Icon_Item>
                <MdOutlineEmail /> <span>email@email.com</span>
              </S.Icon_Item>
              <S.Icon_Item href="https://wa.link/67z1ua" target="_blank">
                <BsWhatsapp />
                <span>(86) 99466-4490</span>
              </S.Icon_Item>
              <S.Icon_Item href="https://www.instagram.com/treinadora_sarahsoares/" target="_blank">
                <BsInstagram /> <span>@treinadora_sarahsoares</span>
              </S.Icon_Item>
            </S.Icon>
          </S.Content>
          <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
            <h3>Say Hello</h3>
            <S.FormData>
              <S.FLabel>Nome:</S.FLabel>
              <S.FInput type="text" name="nome" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Email:</S.FLabel>
              <S.FInput type="email" name="email" />
            </S.FormData>
            <S.FormData>
              <S.FLabel>Mensagem:</S.FLabel>
              <S.FTextArea name="mensagem" rows={5} cols={40} />
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
            <Link  href="https://wa.link/67z1ua" target="_blank">
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
          Sarah Soares - Copyright ® 2023 - Todos os Direitos Reservados.
        </span>
      </S.Footer>
    </>
  );
};
