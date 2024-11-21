import Hourly from "../Hourly/Hourly";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'

export default function CarouselHourly() {
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={8}
            navigation
            className="mt-14"
            slidesOffsetBefore={58}
        >
            <SwiperSlide ><Hourly /></SwiperSlide>
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
    )
}