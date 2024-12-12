import React, { ComponentType, useContext, useEffect, useState } from 'react'
import { PropsCity } from '../../types/types'
import { IoLocation } from "react-icons/io5";
import { MdDeviceThermostat } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoMdCloudOutline } from "react-icons/io";
import { IoRainyOutline } from "react-icons/io5";
import { IoIosThunderstorm } from "react-icons/io";
import { Context } from '../../contexts/Context';

const sun = "bg-gradient-to-br from-yellow-200 to-sky-500 to-50%"
const cloudy = "bg-gradient-to-br from-slate-200 to-slate-400 dark:bg-gradient-to-br dark:to-slate-600 dark:from-slate-300"
const rain = "bg-gradient-to-br from-slate-600 to-slate-300 dark:from-slate-700 dark:to-slate-400"

export default function CityCard({ city }: { city: PropsCity }) {
    const [weather, setWeather] = useState('')
    const [icon, setIcon] = useState<ComponentType<{ size?: number }>>()
    const { setCityID } = useContext(Context)

    useEffect(() => {
        switch (city.current.summary) {
            case 'Sunny':
            case 'Partly sunny':
            case 'Mostly sunny':
                setWeather(sun)
                break
            case 'Mostly cloudy':
            case 'Cloudy':
            case 'Overcast':
                setWeather(cloudy)
                break
            case 'Fog':
            case 'Light rain':
            case 'Rain':
            case 'Possible rain':
            case 'Rain shower':
            case 'Thunderstorm':
                setWeather(rain)
                break
            default:
                setWeather(sun)
        }

        switch (city.current.summary) {
            case 'Sunny':
            case 'Mostly sunny':
                setIcon(() => IoSunnyOutline)
                break
            case 'Partly sunny':
            case 'Mostly cloudy':
                setIcon(() => IoPartlySunnyOutline)
                break
            case 'Cloudy':
            case 'Overcast':
                setIcon(() => IoMdCloudOutline)
                break
            case 'Fog':
            case 'Light rain':
            case 'Rain':
            case 'Possible rain':
            case 'Rain shower':
                setIcon(() => IoRainyOutline)
                break
            case 'Thunderstorm':
                setIcon(() => IoIosThunderstorm)
                break
            default:
                setIcon(() => IoSunnyOutline)
        }
    }, [])


    function capitalizeWords(text: string) {
        if (!text) return "";
        return text
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    return (
        <div className={`w-[800px] ${weather} cursor-pointer shadow-lg mt-10 m-auto rounded-lg p-4`} onClick={() => { setCityID(city.place_id) }}>
            <p className="flex items-center justify-end">{city.name}, {city.state} <IoLocation size={20} /></p>
            <div className="flex justify-center items-center gap-4 my-24">
                <p>{capitalizeWords(new Date().toLocaleDateString('pt-BR', { month: 'short', day: '2-digit', weekday: 'short' }))}</p>
                <div className="flex gap-2 items-center">
                    <MdDeviceThermostat size={70} />
                    <h1 className="text-7xl">{Math.floor(city.current.temperature)}°C</h1>
                    {icon && React.createElement(icon, { size: 70 })}
                </div>
            </div>
            <div className="flex justify-around">
                <div className="text-center">
                    <p>Precipitação</p>
                    <p>{city.current.precipitation.total} %</p>
                </div>
                <div className="text-center">
                    <p>Cobertura de Nuvens</p>
                    <p>{city.current.cloud_cover} %</p>
                </div>
                <div className="text-center">
                    <p>Vento</p>
                    <p>{city.current.wind.speed} m/s</p>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}