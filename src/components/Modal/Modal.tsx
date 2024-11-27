import { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Context } from "../../contexts/Context";


export default function Modal() {
    const { showModal, setShowModal, searchCity } = useContext(Context)
    const apiKey = import.meta.env.VITE_API_KEY

    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&limit=5&appid=${apiKey}&lang=pt_br`).then((res) => res.json()).then((data => console.log(data)))
    }, [searchCity])
  

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
                    <p className="border-b-[1px] border-slate-700 p-3 transition duration-300 cursor-pointer hover:bg-[#eee] dark:hover:bg-[#212d41]">Piracicaba, SP - BR</p>
                    <p className="border-b-[1px] border-slate-700 p-3 transition duration-300 cursor-pointer hover:bg-[#eee] dark:hover:bg-[#212d41]">Piracicaba, SP - BR</p>
                    <p className="border-b-[1px] border-slate-700 p-3 transition duration-300 cursor-pointer hover:bg-[#eee] dark:hover:bg-[#212d41]">Piracicaba, SP - BR</p>
                    <p className="border-b-[1px] border-slate-700 p-3 transition duration-300 cursor-pointer hover:bg-[#eee] dark:hover:bg-[#212d41]">Piracicaba, SP - BR</p>
                    <p className="border-b-[1px] border-slate-700 p-3 transition duration-300 cursor-pointer hover:bg-[#eee] dark:hover:bg-[#212d41]">Piracicaba, SP - BR</p>
                </div>
            </div>
        </div>
    )
}
