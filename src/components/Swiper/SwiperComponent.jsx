import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SwiperComponent({images1}) {

  // console.log(images1);

  return (
    <>
    <div className="rounded-2xl">
    <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">

        {Object.keys(images1).map((key) => {
          return (
            <SwiperSlide>
          <img src={key} />       
        </SwiperSlide> 
          )
        })}
{/* 
{images1.map((image) => (
          <SwiperSlide>
          <img src={image} />
          {console.log(image)}
        </SwiperSlide>           
      ))} */}

        {/* {images1.map((image) => (
          <SwiperSlide>
          <img src={image} />
        </SwiperSlide>           
      ))} */}
       
        {/* <SwiperSlide>
            <img src={props.img1} alt="" />
        </SwiperSlide>        
        <SwiperSlide>
            <img src={props.img2} alt="" />
        </SwiperSlide>        

        
          <SwiperSlide>
            <img src={props.img3} alt="" />
        </SwiperSlide>                   
        <SwiperSlide>
            <img src={props.img4} alt="" />
        </SwiperSlide>        
        <SwiperSlide>
            <img src={props.img5} alt="" />
        </SwiperSlide>        
        <SwiperSlide>
            <img src={props.img6} alt="" />
        </SwiperSlide>        
        <SwiperSlide>
            <img src={props.img7} alt="" />
        </SwiperSlide>        
        <SwiperSlide>
            <img src={props.img8} alt="" />
        </SwiperSlide>           */}
              
      </Swiper>
    </div>      
    </>
  );
}
