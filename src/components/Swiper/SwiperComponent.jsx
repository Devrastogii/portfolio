import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SwiperComponent({images1}) {

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
      </Swiper>
    </div>      
    </>
  );
}
