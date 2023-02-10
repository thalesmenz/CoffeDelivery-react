import { ShoppingCart } from "phosphor-react";
import {  useState, useContext } from "react";
import { AmountOfCoffes } from "../../../../contexts/AmountOfCoffes";
import { Abuy, ButtonCounter, ButtonCounterneg, ContainerBuy, ContainerCartAndCounter, ContainerCoffe, ContainerImg, ContainerPreco, Counter, H1, Img, P1, Preco, Rs, Texts } from "./styles";

interface coffeProps {
    h1: string
    p: string
    img: string
}


export function Coffe({ h1, p, img }: coffeProps) {

    const { CoffesinCart, setCoffesinCart, setCoffesinListForBuy, CoffesinListForBuy } = useContext(AmountOfCoffes)

    const [NumbersOfCoffes, setNumbersOfCoffes] = useState(0)

    function subtrair() {
        if(NumbersOfCoffes > 0) {
            setNumbersOfCoffes(NumbersOfCoffes - 1)
        }
    }

    function addItemCart() {
        setCoffesinCart({
            img: img,
            p:p,
            h1:h1,
            NumbersOfCoffes: NumbersOfCoffes
        })
        
            setCoffesinListForBuy([...CoffesinListForBuy, CoffesinCart])

        }
        console.log(CoffesinListForBuy)
    

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
                    <ButtonCounterneg onClick={subtrair}>_</ButtonCounterneg>
                       <p>{NumbersOfCoffes}</p> 
                    <ButtonCounter onClick={() => {
                        setNumbersOfCoffes(NumbersOfCoffes + 1)
                    }}>+</ButtonCounter>
                </Counter>
                <Abuy onClick={addItemCart}>
                    <ShoppingCart />
                </Abuy>
                </ContainerCartAndCounter>
            </ContainerBuy>
        </ContainerCoffe>
    )
}