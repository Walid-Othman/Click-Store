// import Swiper core and required modules
import {  Pagination,  A11y,Autoplay  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import type { SwiperType } from '../types/type';


export default function SwiperP ({children}:SwiperType){
  return (
    <Swiper
      // install Swiper modules
      modules={[ Pagination, A11y,Autoplay ]}
      // spaceBetween={-30}
      // slidesPerView={4}
       breakpoints={{
    320: { slidesPerView:1 , spaceBetween:-30 },
    640: { slidesPerView: 2,spaceBetween:-80 },
    1024: { slidesPerView: 3,spaceBetween:-100 },
    1280: { slidesPerView: 4,spaceBetween:-100 },
  }}
      autoplay ={{
        delay:3000,
        // disableOnInteraction: true
      }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => <SwiperSlide key={index}>{child}</SwiperSlide>)
        : <SwiperSlide>{children}</SwiperSlide>}
    </Swiper>
  );
};