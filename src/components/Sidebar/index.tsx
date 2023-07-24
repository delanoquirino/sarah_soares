"use client"

import { AiOutlineClose } from 'react-icons/ai';
import * as S from './styles'
import { Link } from 'react-scroll';

interface SidebarProps {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Sidebar = ( { sidebar, setSidebar }:SidebarProps ) => {

  const closeSidebar = () => {
    setSidebar(false)
  }

  return (
    <S.Container propsidebar={sidebar}>

      <AiOutlineClose onClick={closeSidebar} />
      <S.Content>
        <Link to="sectionInfo" spy={true} smooth={true} offset={50} duration={500} onClick={closeSidebar}>Treinamento Pessoal</Link>
       
        <Link to="sectionPrograms" spy={true} smooth={true} offset={50} duration={500} onClick={closeSidebar}>Saúde e Nutrição</Link>
       
        <Link to="sectionContact" spy={true} smooth={true} offset={50} duration={500} onClick={closeSidebar}>Entre em Contato</Link>
       
      </S.Content>
     
    </S.Container>
  )
}