import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import Card from './card.jsx'

import { Swiper, SwiperSlide } from "swiper/react";
import {dataProjects} from './../data/projects.js'
import "swiper/css";
import "swiper/css/bundle"
SwiperCore.use([EffectCoverflow, Pagination]);



const SlideCards = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
      {dataProjects.map((e,i)=><SwiperSlide key={i+"f"}>
         <Card 
         title={e.title}
         img={e.image} 
         resume={e.resume}
         version={e.version}
         stack={e.stack}
         code={e.code}
         preview={e.preview}
         status={e.hasOwnProperty('status')?e.status:null}
          />
        </SwiperSlide>)}
      </Swiper>
    </>
  );
};

export default SlideCards;