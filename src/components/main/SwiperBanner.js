import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Pagination, Navigation, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import styled from 'styled-components';


SwiperCore.use([EffectFade, Pagination, Navigation, Autoplay]);

const SwiperBlock = styled.div`
  position: relative;
  width: 700px;
  height: 600px;
  left: 0;
  right: 0;
  background-color:pink;
  margin: 100px auto 0 auto;
  .swiper-container{
      height:100%;
  }
  .swiper-slide > img {
      width: 100%;
      height: 100%;
  }
`;

const components = () => {
    return (
        <SwiperBlock>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides
                effect="fade"
                navigation
                loop
                autoplay
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/ko/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"/></SwiperSlide>
                <SwiperSlide><img src="https://yt3.ggpht.com/ytc/AAUvwngtfTisHi3IvVe12-puwoGyVng4fMPRrXFhfDfT=s900-c-k-c0xffffffff-no-rj-mo"/></SwiperSlide>
                <SwiperSlide><img src="https://cdn.clien.net/web/api/file/F01/10511553/5016c93648dfc9.jpg"/></SwiperSlide>
                <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/ko/b/bc/%EC%84%BC%EA%B3%BC_%EC%B9%98%ED%9E%88%EB%A1%9C%EC%9D%98_%ED%96%89%EB%B0%A9%EB%B6%88%EB%AA%85_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"/></SwiperSlide>
            </Swiper>
        </SwiperBlock>
      );
};



export default components;