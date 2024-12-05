import { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Context } from "../../contexts/Context";
import { PropsCity } from '../../types/types'


interface PropsCityFound {
    name: string
    place_id: string
    adm_area1: string
    adm_area2: string
    country: string
    lat: string
    lon: string
    timezone: string
    type: string
}

export default function Modal() {
    const { showModal, setShowModal, searchCity, setCityCards } = useContext(Context)
    const apiKey = import.meta.env.VITE_API_KEY
    const [cityFound, setCityFound] = useState<boolean>()
    const [cities, setCities] = useState([])

    useEffect(() => {
        fetch(`https://www.meteosource.com/api/v1/free/find_places?key=${apiKey}&text=${searchCity}`).then((res) => res.json())
            .then(((data) => {
                if (data.length == 0) {
                    setCityFound(false)
                    return
                }
                data.length = 5
                setCityFound(true)
                setCities(data)
                console.log(data)
            }))
    }, [searchCity])

    async function handleCityChoose(city: PropsCityFound){
        await fetch(`https://www.meteosource.com/api/v1/free/point?key=${apiKey}&place_id=${city.place_id}&sections=current&units=metric`).then((res) => res.json())
            .then((data: PropsCity) => {
                data.place_id = city.place_id
                data.name = city.name
                data.state = city.adm_area1
                setCityCards((cards) => cards ? [...cards, data] : [data])
                console.log(data)
                setShowModal(!showModal)
            })
    }


    return (
        <div
            className={`fixed inset-0 z-40 flex justify-center items-center transition-all duration-500 ease-in-out ${showModal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >            <div className="absolute inset-0 bg-black opacity-70 z-40" onClick={() => setShowModal(!showModal)}></div>

            <div className="absolute overflow-y-auto m-auto left-0 right-0 top-1/4 z-50 bg-white dark:bg-slate-800 w-1/2 h-1/2 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between">
                    <h1 className="text-2xl mb-6">Cidades</h1>
                    <IoClose className="inline-block rounded-full p-1 hover:bg-[#eee] dark:hover:bg-[#212d41] cursor-pointer transition duration-300" size={35} onClick={() => setShowModal(!showModal)} />
                </div>
                <div>
                    {
                        cityFound ?
                            cities.map((city: PropsCityFound, i) => <p key={i} onClick={() => handleCityChoose(city)} className="border-b-[1px] border-slate-700 p-3 transition duration-300 cursor-pointer hover:bg-[#eee] dark:hover:bg-[#212d41]">{city.name}, {city.adm_area1} - {city.country}</p>)
                            :
                            <p>Cidade "{searchCity}" não encontrada...</p>

                    }
                </div>
            </div>
        </div>
    )
}
