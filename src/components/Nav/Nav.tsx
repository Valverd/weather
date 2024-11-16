import Clock from "../Clock/Clock"
import Switch from "../Switch/Switch"

export default function Nav() {

    return (
        <nav className="w-full absolute font-poppins shadow-md dark:bg-slate-800">
            <div className="max-w-container m-auto p-6 flex justify-between">
                <h1 className="text-2xl font-bold">Weather</h1>
                <div className="flex items-center gap-4">
                    <Clock />
                    <Switch />
                </div>
            </div>
        </nav>
    )
}