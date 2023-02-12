import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AmountOfCoffes } from "../../../../contexts/AmountOfCoffes";
import { FormContext } from "../../../../contexts/FormContext";
import { CoffeBuy } from "../CoffeBuy/CoffeBuy";
import { ContainerCoffeEmpity, ContainerCoffeSelected, Instrucao, P1, P2 } from "./styles";

export function CoffesSelected() {

    const { CoffesinListForBuy, AmountPricesCoffes } = useContext(AmountOfCoffes)

    const {  
            handleSaveInfos,
            infos,
            Rua,
            Bairro,
            Cidade,
            Numero,
            UF,
            Pagamento,
        } = useContext(FormContext)

    const { setCoffesinListForBuy, setAmountPricesCoffes } = useContext(AmountOfCoffes)

    const priceCoffes = AmountPricesCoffes.reduce((accumulator, AmountPricesCoffes) => 
    accumulator + AmountPricesCoffes, 0
    )

    const priceTotalCoffes = priceCoffes + 3.50

    const zero = 0.00

    const jsx =  
        <ContainerCoffeSelected>
            <div>
                <P2>Total de itens</P2>
                <P2>{priceCoffes.toFixed(2)}</P2>
            </div>
            <div>
                <P2>Entrega</P2>
                <P2>R$ 3,50</P2>
            </div>
            <div>
                <P1>Total</P1>
                <P1>{priceTotalCoffes.toFixed(2)}</P1>
            </div>
                <NavLink to="/success" title="finalizar">
                    {
                        Rua && Bairro && Cidade && Numero && UF && Pagamento
                        ?   
                        <button onClick={saveInfos}>
                        <p>Confirmar pedido</p>
                        </button>
                        :
                        <Instrucao>Coloque seu endereço e escolha o metodo de pagamento para ter acesso ao botão comprar</Instrucao>
                    }
                    
                </NavLink>
        </ContainerCoffeSelected>
    

    
    function saveInfos() {
        handleSaveInfos()
        setCoffesinListForBuy([])
        setAmountPricesCoffes([0])
    }

    return (
        <>     
        {CoffesinListForBuy.map(item => {
        return (
            <CoffeBuy 
            img={item.img} 
            h1={item.h1}
            NumbersOfCoffes={item.NumbersOfCoffes}  
            key={item.h1}
            />
        )
    })}
        {
        CoffesinListForBuy.length === 0 
        ?
        <ContainerCoffeEmpity>
            <p>Voce ainda não adicionou nenhum café.</p>
            <p>Adicione um café para continuar</p>
            <p>com as compras</p>
        </ContainerCoffeEmpity>
        :
        jsx
        }
        </>
    )
}