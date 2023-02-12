import { createContext, ReactNode, useState } from "react";

interface AmountOfCoffesProviderProps {
    children: ReactNode
}

interface AmountOfCoffesContextType {
    CoffesinListForBuy: CoffesinCartProps[]
    setCoffesinListForBuy: (value: CoffesinCartProps[]) => void
    AmountPricesCoffes: number[]
    setAmountPricesCoffes: (value: number[]) => void
}

interface CoffesinCartProps {
    img: string
    h1: string
    p: string
    NumbersOfCoffes: number
}

export const AmountOfCoffes = createContext({} as AmountOfCoffesContextType)

export function AmountOfCoffesProvider({ children }: AmountOfCoffesProviderProps) {    

    const [CoffesinListForBuy, setCoffesinListForBuy] = useState<CoffesinCartProps[]>([])

    const [AmountPricesCoffes, setAmountPricesCoffes] = useState<number[]>([])


    return (
      <AmountOfCoffes.Provider 
      value={{ 
      setCoffesinListForBuy, 
      CoffesinListForBuy, 
      setAmountPricesCoffes,
      AmountPricesCoffes
      }}>
            {children}
      </AmountOfCoffes.Provider>
    )
}