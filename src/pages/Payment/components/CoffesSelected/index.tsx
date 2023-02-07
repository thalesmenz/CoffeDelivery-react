import { CoffeBuy } from "../CoffeBuy/CoffeBuy";
import { ContainerCoffeSelected, P1, P2 } from "./styles";

export function CoffesSelected() {
    return (
        <>     
        <CoffeBuy />
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