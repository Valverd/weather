import { FaCloudShowersHeavy } from "react-icons/fa";
import { Context } from "../../contexts/Context";
import { useContext, useEffect } from "react";

export default function Hourly() {
    const sun = "bg-gradient-to-br from-yellow-200 to-sky-500 to-50%"
    const sunAndClouds = "bg-gradient-to-br from-yellow-100 from-20% via-slate-50 to-indigo-300 to-60%"
    const cloudy = "bg-gradient-to-br from-slate-200 to-slate-400 dark:bg-gradient-to-br dark:to-slate-600 dark:from-slate-300"
    const rain = "bg-gradient-to-br from-slate-600 to-slate-300 dark:from-slate-700 dark:to-slate-400"
    
    return (
        <div className={`w-full h-full ${sun} shadow-lg rounded-lg`}>
            <h1 className="h-1/3 p-2 text-center">19:00 PM</h1>
            <FaCloudShowersHeavy className="h-1/3 w-full"/>
            <p className="h-1/3 text-center pt-2">28°C</p>
        </div>
    )
}