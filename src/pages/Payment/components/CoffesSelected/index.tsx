import { useContext } from "react";
import { AmountOfCoffes } from "../../../../contexts/AmountOfCoffes";
import { CoffeBuy } from "../CoffeBuy/CoffeBuy";
import { ContainerCoffeSelected, P1, P2 } from "./styles";

export function CoffesSelected() {

    const { CoffesinListForBuy } = useContext(AmountOfCoffes)

    return (
        <>     
        {CoffesinListForBuy.map(item => {
            console.log(item.h1)
            return (
                <CoffeBuy 
                img={item.img} 
                h1={item.h1}
                NumbersOfCoffes={item.NumbersOfCoffes}  />
            )
        })}
        <ContainerCoffeSelected>
            <div>
                <P2>Total de itens</P2>
                <P2>R$ 9,90</P2>
            </div>
            <div>
                <P2>Entrega</P2>
                <P2>R$ 3,50</P2>
            </div>
            <div>
                <P1>Total</P1>
                <P1>R$ 13,40</P1>
            </div>
            <button>Confirmar pedido</button>
        </ContainerCoffeSelected>
        </>

    )
}