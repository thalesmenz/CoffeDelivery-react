import { ShoppingCart } from "phosphor-react";
import {  useState, useContext } from "react";
import { AmountOfCoffes } from "../../../../contexts/AmountOfCoffes";
import { Abuy, ButtonCounter, ButtonCounterneg, ContainerBuy, ContainerCartAndCounter, ContainerCoffe, ContainerImg, ContainerPreco, Counter, H1, Img, P1, Preco, Rs, Texts } from "./styles";
import { toast } from 'react-toastify' ;   
import 'react-toastify/dist/ReactToastify.min.css' ; 

interface coffeProps {
    h1: string
    p: string
    img: string
}


export function Coffe({ h1, p, img }: coffeProps) {

    const { setCoffesinListForBuy, 
            CoffesinListForBuy, 
            setAmountPricesCoffes,
            AmountPricesCoffes
            } = useContext(AmountOfCoffes)

    const [NumbersOfCoffes, setNumbersOfCoffes] = useState(0)

    function subtrair() {
        if(NumbersOfCoffes > 0) {
            setNumbersOfCoffes(NumbersOfCoffes - 1)
        }
    }

    function addItemCart() {
        const coffe = {
            img: img,
            p:p,
            h1:h1,
            NumbersOfCoffes: NumbersOfCoffes,
        }

        setCoffesinListForBuy([...CoffesinListForBuy, coffe])
        
        calcPriceCoffe(NumbersOfCoffes)

        toast.success("Seu item foi adicionado ao carrinho com sucesso", {
            position: toast.POSITION.TOP_LEFT
        })
    }
    
    function calcPriceCoffe(AmountCoffes: number) {
        const priceCoffe = 9.90 * AmountCoffes
        
        setAmountPricesCoffes([...AmountPricesCoffes, priceCoffe])
    }

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