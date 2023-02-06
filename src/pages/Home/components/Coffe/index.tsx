import { ShoppingCart } from "phosphor-react";
import { ButtonCounter, ButtonCounterneg, ContainerBuy, ContainerCartAndCounter, ContainerCoffe, ContainerImg, ContainerPreco, Counter, H1, Img, P1, Preco, Rs, Texts } from "./styles";

interface coffeProps {
    h1: string
    p: string
    img?: string
}

export function Coffe({ h1, p, img }: coffeProps) {
    return (
        <ContainerCoffe>
            <ContainerImg>
                <Img src={img} alt="" />
            </ContainerImg>
            <Texts>
            <H1>{h1}</H1>
            <P1>{p}</P1>  
            </Texts>
            <ContainerBuy>
                <ContainerPreco>
                    <Rs>R$</Rs>      
                    <Preco>9,90</Preco>  
                </ContainerPreco>
                <ContainerCartAndCounter>
                <Counter>
                    <ButtonCounterneg>_</ButtonCounterneg>
                        1
                    <ButtonCounter>+</ButtonCounter>
                </Counter>
                <ShoppingCart />
                </ContainerCartAndCounter>
            </ContainerBuy>
        </ContainerCoffe>
    )
}