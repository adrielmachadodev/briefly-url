import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function ImageSlider() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide style={{height:'300px',width:'300px',backgroundColor:'#fff',color:'#000'}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{height:'300px',width:'300px',backgroundColor:'#fff',color:'#000'}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{height:'300px',width:'300px',backgroundColor:'#fff',color:'#000'}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{height:'300px',width:'300px',backgroundColor:'#fff',color:'#000'}}>Slide 4</SwiperSlide>
        <SwiperSlide style={{height:'300px',width:'300px',backgroundColor:'#fff',color:'#000'}}>Slide 5</SwiperSlide>
        <SwiperSlide style={{height:'300px',width:'300px',backgroundColor:'#fff',color:'#000'}}>Slide 6</SwiperSlide>
        <SwiperSlide style={{height:'300px',width:'300px',backgroundColor:'#fff',color:'#000'}}>Slide 7</SwiperSlide>
        <SwiperSlide style={{height:'300px',width:'300px',backgroundColor:'#fff',color:'#000'}}>Slide 8</SwiperSlide>
        <SwiperSlide style={{height:'300px',width:'300px',backgroundColor:'#fff',color:'#000'}}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}