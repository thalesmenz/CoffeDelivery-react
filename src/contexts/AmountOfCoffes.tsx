import { createContext, ReactNode, useState } from "react";

interface AmountOfCoffesProviderProps {
    children: ReactNode
}

interface AmountOfCoffesContextType {
    CoffesinCart: CoffesinCartProps
    setCoffesinCart: (value: CoffesinCartProps) => void
    CoffesinListForBuy: CoffesinCartProps[]
    setCoffesinListForBuy: (value: CoffesinCartProps[]) => void
}

interface CoffesinCartProps {
    img: string
    h1: string
    p: string
    NumbersOfCoffes: number
}

export const AmountOfCoffes = createContext({} as AmountOfCoffesContextType)

export function AmountOfCoffesProvider({ children }: AmountOfCoffesProviderProps) {    

    const [CoffesinCart, setCoffesinCart] = useState<CoffesinCartProps>({} as CoffesinCartProps)

    const [CoffesinListForBuy, setCoffesinListForBuy] = useState<CoffesinCartProps[]>([] as CoffesinCartProps[])


    return (
      <AmountOfCoffes.Provider value={{CoffesinCart, setCoffesinCart, setCoffesinListForBuy, CoffesinListForBuy}}>
            {children}
      </AmountOfCoffes.Provider>
    )
}