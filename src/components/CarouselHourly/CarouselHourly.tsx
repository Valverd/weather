import Hourly from "../Hourly/Hourly";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'

export default function CarouselHourly() {
    return (
        <div className='max-w-6xl my-40 m-auto'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesOffsetAfter={50}
                slidesOffsetBefore={50}
                navigation
                breakpoints={{
                    250: {
                        slidesPerView: 2,
                        centeredSlides: true,
                        slidesOffsetAfter: 0,
                        slidesOffsetBefore: 0
                    },
                    521: {
                        slidesPerView: 3,
                        centeredSlides: false,
                    },
                    700: {
                        slidesPerView: 4,
                        centeredSlides: false,
                    },
                    896: {
                        slidesPerView: 5,
                        centeredSlides: false,
                    },
                    1250: {
                        slidesPerView: 7,
                        centeredSlides: false,
                    },
                }}
            >
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
                <SwiperSlide style={{ width: '112px', height: '112px' }}><Hourly /></SwiperSlide>
            </Swiper>
        </div>
    )
}