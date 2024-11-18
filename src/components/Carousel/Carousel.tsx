import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import CityCard from '../CityCard/CityCard';

export default () => {
  return (
    <div className='max-w-7xl mt-4'>
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        spaceBetween={500}
        slidesPerView={1}
        navigation
        effect='coverflow'
        coverflowEffect={{
          depth: 1000,
          modifier: 1,
          rotate: 50,
          scale: 2,
          slideShadows: false,
          stretch: 0
        }}
        className='w-full'
      >
        <SwiperSlide><CityCard /></SwiperSlide>
        <SwiperSlide><CityCard /></SwiperSlide>
        <SwiperSlide><CityCard /></SwiperSlide>
        <SwiperSlide><CityCard /></SwiperSlide>
        <SwiperSlide><CityCard /></SwiperSlide>
        <SwiperSlide><CityCard /></SwiperSlide>
        <SwiperSlide><CityCard /></SwiperSlide>
      </Swiper>
    </div>
  );
};
