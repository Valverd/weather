export default function Hourly() {
    const sun = "bg-gradient-to-br from-yellow-200 to-sky-500 to-50%"
    const sunAndClouds = "bg-gradient-to-br from-yellow-100 from-20% via-slate-50 to-indigo-300 to-60%"
    const cloudy = "bg-gradient-to-br from-slate-200 to-slate-400 dark:bg-gradient-to-br dark:to-slate-600 dark:from-slate-300"
    const rain = "bg-gradient-to-br from-slate-600 to-slate-300 dark:from-slate-700 dark:to-slate-400"
    const textColor = "text-white dark:text-black"

    return (
        <div className={`w-28 ${sun} ${textColor} h-28 shadow-lg rounded-lg flex justify-center items-center`}>
            teste
        </div>
    )
}