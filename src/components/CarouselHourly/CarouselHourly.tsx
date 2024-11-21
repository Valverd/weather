import Hourly from "../Hourly/Hourly";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'

export default function CarouselHourly() {
    return (
        <div className='w-10/12 mt-20 m-auto'>
            <Swiper
                modules={[Navigation]}
                slidesPerView={10}
                navigation
                breakpoints={{
                    250:{
                        slidesPerView: 2,
                        centeredSlides: true
                    },
                    521:{
                        slidesPerView: 3,
                        centeredSlides: true
                    },
                    672:{
                        slidesPerView: 4,
                        centeredSlides: true
                    },
                    896:{
                        slidesPerView: 6,
                    },
                    1152:{
                        slidesPerView: 8,
                    },
                }}
            >
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
                <SwiperSlide style={{width: '112px', height: '112px'}}><Hourly /></SwiperSlide>
            </Swiper>
        </div>
    )
}