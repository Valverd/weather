import { createContext, ReactNode, useState } from "react";

type PropsChildren = {
    children: ReactNode
}

type ContextProps = {
    dark: boolean
    setDark: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    searchCity: string,
    setSearchCity: React.Dispatch<React.SetStateAction<string>>
}

export const Context = createContext<ContextProps>({} as ContextProps)

export function ContextProvider({ children }: PropsChildren) {
    const [dark, setDark] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [searchCity, setSearchCity] = useState('')

    return (
        <Context.Provider value={{ dark, setDark, showModal, setShowModal, searchCity, setSearchCity}}>
            {children}
        </Context.Provider>
    )
}