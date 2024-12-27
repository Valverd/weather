import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";



export default function Footer() {
    return (
        <footer className="shadow-customized dark:bg-slate-800 dark:shadow-customizedDark">
            <div className="max-w-container m-auto flex justify-between px-6 py-4">
                <h1 className="text-lg flex items-center gap-1">Developed By Renan <CiHeart size={25}/></h1>
                <div className="flex gap-2">
                    <Link to={'https://github.com/Valverd'} target="_blank">
                        <FaGithub size={30}/>
                    </Link>
                    <Link to={'https://www.linkedin.com/in/renan-valverde/'} target="_blank">
                        <FaLinkedin size={30}/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}