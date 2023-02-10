import { Trash } from "phosphor-react"
import { useState } from "react"
import { ButtonCounter, ContainerContent, TextsContainer, ButtonCounterneg, ButtonRemove, ContainerCoffeBuy, ContainerPreco, Counter, Preco, Rs, ButtonsContent } from "./styles"

interface coffeProps {
    img: string
    h1: string
    NumbersOfCoffes: number
} 

export function CoffeBuy({img, h1, NumbersOfCoffes}:coffeProps) {
    
    const [CounterCount, setCounterCount] = useState(NumbersOfCoffes)
    
    return (
        <ContainerCoffeBuy>
            <img src={img} alt="" />
            <ContainerContent>
                <TextsContainer>
                    <p>{h1}</p>
                    <ContainerPreco>
                        <Rs>R$</Rs>      
                        <Preco>9,90</Preco>  
                    </ContainerPreco>
                </TextsContainer>
            <ButtonsContent>
                <Counter>
                    <ButtonCounterneg onClick={() => {
                        if(CounterCount > 0) {
                            setCounterCount(CounterCount - 1)
                        }}}>_</ButtonCounterneg>
                        {CounterCount}
                    <ButtonCounter onClick={() => {
                        setCounterCount(CounterCount + 1)
                    }}>+</ButtonCounter>
                </Counter>
                <ButtonRemove>
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