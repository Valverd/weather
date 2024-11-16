import { IoLocation } from "react-icons/io5";
import { MdDeviceThermostat } from "react-icons/md";


export default function CityCard() {
    return (
        <div className="w-2/3 bg-gradient-to-br from-slate-200 to-slate-400 dark:bg-slate-800 shadow-lg mt-10 m-auto rounded-lg p-4">
            <p className="flex items-center">Piracicaba <IoLocation size={20} /></p>
            <div className="flex justify-center items-center gap-4 my-24">
                <p>Nov. 23, Sáb</p>
                <div className="flex">
                    <MdDeviceThermostat size={45} />
                    <h1 className="text-7xl">25°C</h1>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="text-center">
                    <p>Umidade</p>
                    <p>99%</p>
                </div>
                <div className="text-center">
                    <p>Visibiliade</p>
                    <p>8km</p>
                </div>
                <div className="text-center">
                    <p>Pressão do Ar</p>
                    <p>1005hPa</p>
                </div>
                <div className="text-center">
                    <p>Vento</p>
                    <p>2mph</p>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}