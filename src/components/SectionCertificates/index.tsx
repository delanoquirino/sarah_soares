
//style
import * as S from "./styles";

// component


//Image
import Image from "next/image";

import CERTIFICADO2 from "../../../public/certificado/CERTIFICADO2.jpg";
import CERTIFICADO3 from "../../../public/certificado/CERTIFICADO3.jpg";
import CERTIFICADO5 from "../../../public/certificado/CERTIFICADO5.jpg";
import CERTIFICADO6 from "../../../public/certificado/CERTIFICADO6.jpg";
import CERTIFICADO7 from "../../../public/certificado/CERTIFICADO7.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SectionCertificates = () => {
  return (
    <S.SectionContainer id="sectionCertificates">
      <S.Container>
        <div>
          <h1> Certificados</h1>
        </div>
        <S.Container_Slide>

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            pagination={{
              type: 'fraction',
            }}
            modules={[Pagination, Navigation]}
          >

            <SwiperSlide>
              <S.Container_Image >
                <Image src={CERTIFICADO2} fill={true} alt="crossfit" />
              </S.Container_Image>
            </SwiperSlide>
            <SwiperSlide>
              <S.Container_Image >
                <Image src={CERTIFICADO3} fill={true} alt="crossfit" />
              </S.Container_Image>
            </SwiperSlide>

            <SwiperSlide>
              <S.Container_Image >
                <Image src={CERTIFICADO5} fill={true} alt="crossfit" />
              </S.Container_Image>
            </SwiperSlide>
            <SwiperSlide>
              <S.Container_Image >
                <Image src={CERTIFICADO6} fill={true} alt="crossfit" />
              </S.Container_Image>
            </SwiperSlide>
            <SwiperSlide>
              <S.Container_Image >
                <Image src={CERTIFICADO7} fill={true} alt="crossfit" />
              </S.Container_Image>
            </SwiperSlide>



          </Swiper>
        </S.Container_Slide>
      </S.Container>
    </S.SectionContainer>
  );
};
