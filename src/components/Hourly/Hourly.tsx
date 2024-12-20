import { Context } from "../../contexts/Context";
import React, { ComponentType, useContext, useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoMdCloudOutline } from "react-icons/io";
import { IoRainyOutline } from "react-icons/io5";
import { IoIosThunderstorm } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { LuCloudMoon } from "react-icons/lu";


const sun = "bg-gradient-to-br from-yellow-200 to-sky-500 to-50%"
const cloudy = "bg-gradient-to-br from-slate-200 to-slate-400 dark:bg-gradient-to-br dark:to-slate-600 dark:from-slate-300"
const rain = "bg-gradient-to-br from-slate-600 to-slate-300 dark:from-slate-700 dark:to-slate-400"
const night = "bg-gradient-to-br from-gray-600 to-blue-900 to-40%"
const nightCloudy = "bg-gradient-to-br from-gray-600 via-blue-900 to-slate-600 to-90%"
const nightRain = "bg-gradient-to-br from-gray-600 via-slate-800 to-slate-600 to-90%"

export default function Hourly({ information }: any) {
    const { cityID } = useContext(Context)
    const [weather, setWeather] = useState('')
    const [hour, setHour] = useState<number>()
    const [icon, setIcon] = useState<ComponentType<{ size?: number }>>()


    function formatHour() {
        if (hour && hour < 10) {
            return `0${hour}:00`
        } else {
            return `${hour}:00`
        }
    }

    useEffect(() => {
        setHour(new Date(information.date).getHours())
        console.log(information.temperature)
        if (hour && hour < 19 && hour >= 7) {
            switch (information.summary) {
                case 'Sunny':
                case 'Mostly sunny':
                case 'Partly sunny':
                case 'Mostly cloudy':
                    setWeather(sun)
                    break
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

            switch (information.summary) {
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
        } else {
            switch (information.summary) {
                case 'Clear':
                case 'Partly clear':
                case 'Mostly clear':
                    setWeather(night)
                    break
                case 'Mostly cloudy':
                case 'Cloudy':
                case 'Overcast':
                    setWeather(nightCloudy)
                    break
                case 'Fog':
                case 'Light rain':
                case 'Rain':
                case 'Possible rain':
                case 'Rain shower':
                case 'Thunderstorm':
                    setWeather(nightRain)
                    break
                default:
                    setWeather(night)
            }

            switch (information.summary) {
                case 'Clear':
                case 'Mostly clear':
                    setIcon(() => FiMoon)
                    break
                case 'Partly clear':
                case 'Mostly cloudy':
                    setIcon(() => LuCloudMoon)
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
                    setIcon(() => FiMoon)
            }

        }
    }, [cityID])


    return (
        <div className={`w-full h-full cursor-pointer p-1 flex flex-col justify-between items-center gap ${weather} shadow-lg rounded-lg`}>
            <h1>{new Date(information.date).getHours() < 12 ? `${formatHour()} AM` : `${formatHour()} PM`}</h1>
            <div>{icon && React.createElement(icon, { size: 35 })}</div>
            <p>{Math.floor(information.temperature)}°C</p>
        </div>
    )
}