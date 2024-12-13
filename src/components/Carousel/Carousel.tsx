import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import CityCard from '../CityCard/CityCard';
import { useContext } from 'react';
import Modal from '../Modal/Modal';
import { Context } from '../../contexts/Context';
import { PropsCity } from '../../types/types'


export default () => {

  const { cityCards }: { cityCards: PropsCity[] | null } = useContext(Context);

  if (cityCards) {
    return (
      <div className='max-w-7xl mt-4 m-auto'>
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

          {
            cityCards?.map((city, i) => {
              return (
                <SwiperSlide key={i}><CityCard city={city} /></SwiperSlide>
              )
            })
          }
        </Swiper>
        <Modal />
      </div>
    );
  } else {

    return (
      <div className='max-w-7xl mt-4 m-auto'>
        <div className='text-center mt-20'>Escolha a cidade...</div>
        <Modal />
      </div>
    );
  }



};

