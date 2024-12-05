import { PropsCity } from '../../types/types'
import { FaRegSun } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdDeviceThermostat } from "react-icons/md";

const sun = "bg-gradient-to-br from-yellow-200 to-sky-500 to-50%"
const cloudy = "bg-gradient-to-br from-slate-200 to-slate-400 dark:bg-gradient-to-br dark:to-slate-600 dark:from-slate-300"
const rain = "bg-gradient-to-br from-slate-600 to-slate-300 dark:from-slate-700 dark:to-slate-400"
const textColor = "text-white dark:text-black"

export default function CityCard({ city }: { city: PropsCity}) {

    function capitalizeWords(text: string) {
        if (!text) return "";
        return text
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }      

    return (
        <div className={`w-[800px] ${cloudy} ${textColor} shadow-lg mt-10 m-auto rounded-lg p-4`}>
            <p className="flex items-center justify-end">{city.name}, {city.state} <IoLocation size={20} /></p>
            <div className="flex justify-center items-center gap-4 my-24">
                <p>{capitalizeWords(new Date().toLocaleDateString('pt-BR', {month: 'short', day:'2-digit', weekday: 'short'}))}</p>
                <div className="flex gap-2 items-center">
                    <MdDeviceThermostat size={70} />
                    <h1 className="text-7xl">{city.current.temperature.toFixed(1)}°C</h1>
                    <FaRegSun size={70} />
                </div>
            </div>
            <div className="flex justify-around">
                <div className="text-center">
                    <p>Umidade</p>
                    <p>99%{}</p>
                </div>
                <div className="text-center">
                    <p>Visibilidade</p>
                    <p>8 km</p>
                </div>
                <div className="text-center">
                    <p>Pressão do Ar</p>
                    <p>1005 hPa</p>
                </div>
                <div className="text-center">
                    <p>Vento</p>
                    <p>2 m/s</p>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}