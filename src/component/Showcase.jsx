import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './swiper.css';

// import required modules
import { EffectCreative ,Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Showcase( {slides} ) {

  // const image = '../../public/M1m.PNG';
  // const image_2 = '../../public/M1mLogin.PNG';
  // const image_3= '../../public/M1mSignup.PNG';

  // const slides = [
  //   { id: 1, title: 'Image 1', image: image },
  //   { id: 2, title: 'Image 2', image: image_2 },
  //   { id: 3, title: 'Image 3', image: image_3 },
  // ];

  return (
    <>
      <Swiper
        grabCursor={false}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative,Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
              {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.image} alt="" srcset="" />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
