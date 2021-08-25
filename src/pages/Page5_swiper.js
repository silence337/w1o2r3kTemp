import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; //https://swiperjs.com/react
import "swiper/swiper.scss"; // node_module 에 설치된 scss 파일

const ExampleSwiper = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h4>swiper 모듈을 설치해서 사용해본다.</h4>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ExampleSwiper;
