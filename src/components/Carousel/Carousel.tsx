import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import CityCard from '../CityCard/CityCard';
import { useContext, useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { Context } from '../../contexts/Context';
import { PropsCity } from '../../types/types'


export default () => {

  const [index, setIndex] = useState<number>()

  const { setCityID } = useContext(Context)
  const { cityCards }: { cityCards: PropsCity[] | null } = useContext(Context);

  useEffect(() => {
    if (cityCards && index !== undefined) {
      setCityID(cityCards[index].place_id)
    }
  }, [index])

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
            slideShadows: false,
          }}
          breakpoints={{
            200: {
              navigation: {
                enabled: false
              }
            },
            490: {
              navigation: {
                enabled: true
              }
            },
            850: {
              coverflowEffect: {
                depth: 1000,
                modifier: 1,
                rotate: 50,
                scale: 2,
                stretch: 0
              }

            }
          }}
          className='w-full'
          onSlidesLengthChange={(slide) => {
            slide.activeIndex = slide.slides.length - 1
            setIndex(slide.activeIndex)
          }}
          onSlideChange={(slide) => {
            setIndex(slide.activeIndex)
          }}
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

