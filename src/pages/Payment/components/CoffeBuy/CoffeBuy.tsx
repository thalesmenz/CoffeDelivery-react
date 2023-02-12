import { Trash } from "phosphor-react"
import { useContext, useState } from "react"
import { AmountOfCoffes } from "../../../../contexts/AmountOfCoffes"
import { ButtonCounter, ContainerContent, TextsContainer, ButtonCounterneg, ButtonRemove, ContainerCoffeBuy, ContainerPreco, Counter, Preco, Rs, ButtonsContent } from "./styles"

interface coffeProps {
    img: string
    h1: string
    NumbersOfCoffes: number
} 

export function CoffeBuy({img, h1, NumbersOfCoffes}:coffeProps) {
    
    const { CoffesinListForBuy, 
            setCoffesinListForBuy, 
            AmountPricesCoffes, 
            setAmountPricesCoffes 
        } = useContext(AmountOfCoffes)


    const [CounterCount, setCounterCount] = useState(NumbersOfCoffes)

    const [DeleteCoffe, setDeleteCoffe] = useState(h1)

    const priceTotalCoffe = CounterCount * 9.90

    function handleRemover() {
        const newCoffesinListForBuy = CoffesinListForBuy.filter(item => {
            return item.h1 != DeleteCoffe
        })
        setCoffesinListForBuy(newCoffesinListForBuy)
        setAmountPricesCoffes([...AmountPricesCoffes, -9.90 * CounterCount])
    }

    function handleRemoveCount() {
        if(CounterCount > 0) {
            setCounterCount(CounterCount - 1)
            setAmountPricesCoffes([...AmountPricesCoffes, -9.90])
        }
    }

    function handleAddCounter() {
        setCounterCount(CounterCount + 1)
        setAmountPricesCoffes([...AmountPricesCoffes, 9.90])
    }
    
    return (
        <ContainerCoffeBuy>
            <img src={img} alt="" />
            <ContainerContent>
                <TextsContainer>
                    <p>{h1}</p>
                    <ContainerPreco>
                        <Rs>R$</Rs>      
                        <Preco>{priceTotalCoffe.toFixed(2)}</Preco>  
                    </ContainerPreco>
                </TextsContainer>
            <ButtonsContent>
                <Counter>
                    <ButtonCounterneg onClick={handleRemoveCount}>_</ButtonCounterneg>
                        <p>{CounterCount}</p>
                    <ButtonCounter onClick={handleAddCounter}>+</ButtonCounter>
                </Counter>
                <ButtonRemove onClick={handleRemover}>
                    <span>
                        <Trash />
                    </span>
                        <p>
                            REMOVER
                        </p>
                </ButtonRemove>
            </ButtonsContent>
                
            </ContainerContent>
        </ContainerCoffeBuy>
    )
}