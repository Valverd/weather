import { FaCloudShowersHeavy } from "react-icons/fa";
import { Context } from "../../contexts/Context";
import React, { ComponentType, useContext, useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoMdCloudOutline } from "react-icons/io";
import { IoRainyOutline } from "react-icons/io5";
import { IoIosThunderstorm } from "react-icons/io";

const sun = "bg-gradient-to-br from-yellow-200 to-sky-500 to-50%"
const cloudy = "bg-gradient-to-br from-slate-200 to-slate-400 dark:bg-gradient-to-br dark:to-slate-600 dark:from-slate-300"
const rain = "bg-gradient-to-br from-slate-600 to-slate-300 dark:from-slate-700 dark:to-slate-400"
const night = "bg-gradient-to-br from-gray-600 to-blue-900 to-40%"
const nightCloudy = "bg-gradient-to-br from-gray-600 via-blue-900 to-slate-600 to-90%"
const nightRain = "bg-gradient-to-br from-gray-600 via-slate-800 to-slate-600 to-90%"

export default function Hourly({ hour }: any) {
    const [weather, setWeather] = useState('')
    const [icon, setIcon] = useState<ComponentType<{ size?: number }>>()
    const hourNumber = new Date(hour.date).getHours()

    function formatHour(time: string) {
        if (hourNumber < 10) {
            return `0${hourNumber}:00`
        } else {
            return `${hourNumber}:00`
        }
    }

    useEffect(() => {
        switch (hour.summary) {
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

        switch (hour.summary) {
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


    return (
        <div className={`w-full h-full cursor-pointer p-1 flex flex-col justify-between items-center gap ${nightRain} shadow-lg rounded-lg`}>
            <h1>{new Date(hour.date).getHours() <= 12 ? `${formatHour(hour.date)} AM` : `${formatHour(hour.date)} PM`}</h1>
            <div>{icon && React.createElement(icon, { size: 35 })}</div>
            <p>{Math.floor(hour.temperature)}°C</p>
        </div>
    )
}