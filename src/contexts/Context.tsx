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
    cityCards: Array<object> | null,
    setCityCard: React.Dispatch<React.SetStateAction<Array<object> | null>>
}

export const Context = createContext<ContextProps>({} as ContextProps)

export function ContextProvider({ children }: PropsChildren) {
    const [dark, setDark] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [searchCity, setSearchCity] = useState('')
    const [cityCards, setCityCard] = useState<Array<object> | null>(null)

    return (
        <Context.Provider value={{ dark, setDark, showModal, setShowModal, searchCity, setSearchCity, cityCards, setCityCard}}>
            {children}
        </Context.Provider>
    )
}