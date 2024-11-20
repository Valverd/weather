import Hourly from "../Hourly/Hourly";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'

export default function CarouselHourly() {
    return (
        <div className='w-full mt-12 m-auto'>
            <Swiper
                modules={[Navigation]}
                slidesPerView={10}
                navigation
            >
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
                <SwiperSlide><Hourly /></SwiperSlide>
            </Swiper>
        </div>
    )
}