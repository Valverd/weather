import { ReactNode } from "react";
import Nav from "../Nav/Nav";

type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Nav />
            <div className="max-w-7xl m-auto h-screen font-poppins">
                {children}
            </div>
        </>
    )
}