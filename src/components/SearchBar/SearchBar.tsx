import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
    return (
        <div className="w-6/12 shadow-lg dark:shadow-dark dark:bg-slate-800 rounded-lg p-2 flex m-auto mt-4">
            <input className="outline-none w-full dark:bg-slate-800" placeholder="Procurar cidade..." />
            <button className="transition-all duration-500 hover:scale-110">
                <CiSearch size={30} />
            </button>
        </div>
    )
}