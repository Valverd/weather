import { CiSearch } from "react-icons/ci";
import { Context } from '../../contexts/Context'
import { FormEvent, useContext, useState } from "react";

export default function SearchBar() {
    const [city, setCity] = useState('')
    const { showModal, setShowModal, setSearchCity } = useContext(Context)

    function handleSearchCity(e: FormEvent) {
        e.preventDefault()
        setSearchCity(city)
        setCity('')
    }

    return (
        <form className="w-6/12 shadow-lg dark:shadow-dark dark:bg-slate-800 rounded-lg p-2 flex m-auto mt-4" onSubmit={handleSearchCity}>
            <input className="outline-none w-full dark:bg-slate-800" placeholder="Procurar cidade..." onChange={(e) => setCity(e.target.value)} value={city} />
            <button className="transition-all duration-500 hover:scale-110" onClick={() => setShowModal(!showModal)} type="submit">
                <CiSearch size={30} />
            </button>
        </form>
    )
}