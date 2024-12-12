import { ReactNode } from "react";
import Nav from "../Nav/Nav";
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import Footer from "../Footer/Footer";

type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    const { dark } = useContext(Context)

    return (
        <div className={dark ? "dark" : ""}>
            <div className="bg-zinc-100 dark:bg-slate-700 dark:text-white">
                <Nav />
                <section className="max-w-container min-h-[calc(100vh-62px)] m-auto font-poppins pt-24 px-6">
                    {children}
                </section>
                <Footer />
            </div>
        </div >
    )
}