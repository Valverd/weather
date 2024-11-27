import { HiOutlineMoon } from "react-icons/hi2";
import { useContext } from "react";
import { Context } from "../../contexts/Context";

export default function Switch() {
    const { dark, setDark } = useContext(Context)

    return (
        <div className="flex items-center gap-1">
            <input
                type="checkbox"
                className="
                    relative
                    appearance-none inline-block
                    h-[26px]
                    w-[50px]
                    cursor-pointer
                    rounded-full
                    bg-slate-300
                    shadow-md
                    transition-all
                    after:content-['']
                    after:absolute
                    after:top-[3px]
                    after:left-[3px]
                    after:h-5
                    after:w-5
                    after:rounded-full
                    after:bg-white
                    after:shadow-sm
                    after:transition-all
                    after:duration-[400ms]
                    checked:after:bg-slate-800
                    checked:after:translate-x-6
                "
                onChange={() => setDark(!dark)}
                checked={dark}
            />
            <HiOutlineMoon  size={22} color={dark ? "#fff" : "#000"} />
        </div>
    )
}