import { CiSearch } from "react-icons/ci";
import { Context } from '../../contexts/Context'
import { FormEvent, useContext, useState } from "react";
import { toast } from 'react-toastify'

export default function SearchBar() {
    const [city, setCity] = useState('')
    const { showModal, setShowModal, setSearchCity } = useContext(Context)

    function handleSearchCity(e: FormEvent) {
        e.preventDefault()
        if(city != ""){
            setSearchCity(city)
            setCity('')
        } else {
            toast.error('Escreva o nome de alguma cidade...')
        }
    }

    function handleButtonClick(){
        if(city != ""){
            setShowModal(!showModal)
        }
    }

    return (
        <form className="w-6/12 shadow-lg dark:shadow-dark dark:bg-slate-800 rounded-lg p-2 flex m-auto mt-4" onSubmit={handleSearchCity}>
            <input className="outline-none w-full bg-zinc-100 dark:bg-slate-800" placeholder="Procurar cidade..." onChange={(e) => setCity(e.target.value)} value={city} />
            <button className="transition-all duration-500 hover:scale-110" onClick={handleButtonClick} type="submit">
                <CiSearch size={30} />
            </button>
        </form>
    )
}