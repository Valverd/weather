import { createContext, ReactNode, useState } from "react";

type PropsChildren = {
    children: ReactNode
}

type DarkContextProps = {
    dark: boolean
    setDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const DarkContext = createContext<DarkContextProps>({} as DarkContextProps)

export function DarkProvider({ children }: PropsChildren) {
    const [dark, setDark] = useState<boolean>(false)

    return (
        <DarkContext.Provider value={{ dark, setDark }}>
            {children}
        </DarkContext.Provider>
    )
}