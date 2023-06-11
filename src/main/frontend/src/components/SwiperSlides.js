import React, { useState } from 'react'
import SwiperSlideContent from 'components/SwiperSlideContent'


// swiper
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const SwiperSlides = () => {

    SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

    const swiperList = [
        {   
            id: 1,
            style:"mailPageSlideImg1",
            tit_sceneb: "Story로 뭉쳐",
            tit_scene: "더 넓고 깊어집니다",
            desc_scene1: "티스토리가 브런치스토리, 카카오스토리와 함께",
            desc_scene2: "Story로 새롭게 출발합니다.",
            wrap_btn:"https://notice.tistory.com/2637",
        },
        {   
            id: 2,
            style:"mailPageSlideImg2",
            tit_sceneb: "티스토리 모바일홈",
            tit_scene: "새로워졌어요",
            desc_scene1: "'오늘의 이슈'부터 '주목받는 블로그'까지",
            desc_scene2: "새로운 모바일홈에서 살펴보세요.",
            wrap_btn:"https://notice.tistory.com/2635"
        }
    ];

    return (
        <Swiper style={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    left: "0px",
                    top: "0px",
                    }}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                // pagination={{ clickable: false }}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
                loop={true}
                >
            {swiperList.map((swiper) => {
                return(
                    <SwiperSlide className={`scene_slide ${swiper.style}`} key={swiper.id}>
                        <SwiperSlideContent swiper={swiper}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default SwiperSlides;