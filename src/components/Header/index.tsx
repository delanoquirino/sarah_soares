import Image from "next/image";

// image
import logo from "../../../public/logo.svg";

//styles
import { Link } from "react-scroll";
import { MenuMobile } from "../MenuMobile";
import * as S from "./styles";


export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <Link to="sectionHome" spy={true} smooth={true} offset={50} duration={500}>
          <Image width={40} height={50} alt="logo" src={logo} />
        </Link>
        <MenuMobile />
        <S.Container_List>
          <S.List>
            <li>
              <S.List_Link to="sectionInfo" spy={true} smooth={true} offset={50} duration={500}>Descubra o seu Potencial</S.List_Link>
            </li>
            <li>
              <S.List_Link to="sectionPrograms" spy={true} smooth={true} offset={50} duration={500}>Transforme sua Vida</S.List_Link>
            </li>
            <li>
              <S.List_Link to="sectionCertificates" spy={true} smooth={true} offset={50} duration={500}>Certificados</S.List_Link>
            </li>
            <li>
              <S.List_Link to="sectionContact" spy={true} smooth={true} offset={50} duration={500}>Entre em Contato</S.List_Link>
            </li>

          </S.List>
        </S.Container_List>
      </S.Container>
    </S.Header>
  );
};
