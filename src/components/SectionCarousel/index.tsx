'use cliente'
//style

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import foto1 from "../../../public/fotos/foto1.jpg";
import foto10 from "../../../public/fotos/foto10.jpg";
import foto11 from "../../../public/fotos/foto11.jpg";
import foto12 from "../../../public/fotos/foto12.jpg";
import foto13 from "../../../public/fotos/foto13.jpg";
import foto14 from "../../../public/fotos/foto14.jpg";
import foto2 from "../../../public/fotos/foto2.jpg";
import foto3 from "../../../public/fotos/foto3.jpg";
import foto4 from "../../../public/fotos/foto4.jpg";
import foto5 from "../../../public/fotos/foto5.jpg";
import foto6 from "../../../public/fotos/foto6.jpg";
import foto7 from "../../../public/fotos/foto7.jpg";
import foto8 from "../../../public/fotos/foto8.jpg";
import foto9 from "../../../public/fotos/foto9.jpg";
import * as S from "./styles";

import Image from "next/image";
// component

const fotos = [
  {
    id: 1,
    src: foto1,
    title: "foto1",
  },
  {
    id: 2,
    src: foto2,
    title: "foto2",
  },
  {
    id: 3,
    src: foto3,
    title: "foto3",
  },
  {
    id: 4,
    src: foto4,
    title: "foto4",
  },
  {
    id: 5,
    src: foto5,
    title: "foto5",
  },
  {
    id: 6,
    src: foto6,
    title: "foto6",
  },
  {
    id: 7,
    src: foto7,
    title: "foto7",
  },
  {
    id: 8,
    src: foto8,
    title: "foto8",
  },
  {
    id: 9,
    src: foto9,
    title: "foto9",
  },
  {
    id: 10,
    src: foto10,
    title: "foto10",
  },
  {
    id: 11,
    src: foto11,
    title: "foto11",
  },
  {
    id: 12,
    src: foto12,
    title: "foto12",
  },
  {
    id: 13,
    src: foto13,
    title: "foto13",
  },
  {
    id: 14,
    src: foto14,
    title: "foto14",
  },

];

export const SectionCarousel = () => {
  return (
    <S.SectionContainer >
      <S.Container id="sectionCarousel">

        <S.Container_Slide>

          <Swiper
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-full"
          >

            {fotos.map((foto, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={foto.src}
                  alt="fotos"
                  width={300}
                  height={300}

                />
              </SwiperSlide>
            ))}




          </Swiper>
        </S.Container_Slide>

      </S.Container>
    </S.SectionContainer>
  );
};
