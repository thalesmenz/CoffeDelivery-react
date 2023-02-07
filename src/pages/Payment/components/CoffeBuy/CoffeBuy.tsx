import { Trash } from "phosphor-react"
import expressoTradicional from "../../../../assets/coffes/expressoTradicional.svg"
import { ButtonCounter, ContainerContent, TextsContainer, ButtonCounterneg, ButtonRemove, ContainerCoffeBuy, ContainerPreco, Counter, Preco, Rs, ButtonsContent } from "./styles"

export function CoffeBuy() {
    return (
        <ContainerCoffeBuy>
            <img src={expressoTradicional} alt="" />
            <ContainerContent>
                <TextsContainer>
                    <p>Expresso Tradicional</p>
                    <ContainerPreco>
                        <Rs>R$</Rs>      
                        <Preco>9,90</Preco>  
                    </ContainerPreco>
                </TextsContainer>
            <ButtonsContent>
                <Counter>
                    <ButtonCounterneg>_</ButtonCounterneg>
                        1
                    <ButtonCounter>+</ButtonCounter>
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