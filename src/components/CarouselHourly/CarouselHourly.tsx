import Hourly from "../Hourly/Hourly";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'
import { Context } from "../../contexts/Context";
import { useContext, useEffect, useState } from "react";


export default function CarouselHourly() {
    const [hours, setHours] = useState<any[]>()
    const apiKey = import.meta.env.VITE_API_KEY
    const { cityID } = useContext(Context)

    useEffect(() => {

        async function updateHours() {
            await fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${cityID}&sections=hourly&timezone=America/Sao_Paulo&units=metric&key=${apiKey}`).then(res => res.json())
                .then((data) => {
                    setHours(data.hourly.data)
                })
        }

        updateHours()
    }, [cityID])

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
                {
                    hours && hours.map((hour, i) => {
                        return <SwiperSlide key={i}><Hourly information={hour} /></SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}