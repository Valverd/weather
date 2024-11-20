import { ReactNode } from "react";
import Nav from "../Nav/Nav";
import { useContext } from "react";
import { DarkContext } from "../../contexts/dark";

type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    const { dark } = useContext(DarkContext)

    return (
        <div className={dark ? "dark" : ""}>
            <div className="dark:bg-slate-700 dark:text-white">
                <Nav />
                <section className="max-w-container min-h-screen m-auto font-poppins pt-24 px-6">
                    {children}
                </section>
            </div>
        </div >
    )
}