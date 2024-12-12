import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";



export default function Footer() {
    return (
        <footer className="shadow-customized dark:bg-slate-800 dark:shadow-customizedDark">
            <div className="max-w-container m-auto flex justify-between px-6 py-4">
                <h1 className="text-lg flex items-center gap-1">Developed By Renan <CiHeart size={25}/></h1>
                <div className="flex gap-2">
                    <FaGithub size={30}/>
                    <FaLinkedin size={30}/>
                </div>
            </div>
        </footer>
    )
}