import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { AmountOfCoffes } from "../../../../contexts/AmountOfCoffes";
import { FormContext } from "../../../../contexts/FormContext";
import { ContainerButton, ContainerConfirmRequest, ContainerP } from "./styles";

export function ConfirmRequest() {

    const {setPagamento} = useContext(FormContext)

    return (
        <ContainerConfirmRequest>
            <ContainerP>
                <div>
                    <span>
                        <CurrencyDollar size={32} />
                        Pagamento
                    </span>
                </div>
                    <p>O Pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </ContainerP>
            <ContainerButton>
                <button onClick={() => setPagamento('Cartão de Credito')}>
                    <span>
                        <CreditCard size={20} />
                        <p>CARTÃO DE CREDITO</p>
                    </span>
                    </button>
                <button onClick={() => setPagamento('Cartão de Débito')}>
                    <span>
                        <Bank size={20} /> 
                        <p>CARTÃO DE DÉBITO</p>
                    </span>
                </button>
                <button onClick={() => {
                    setPagamento('Dinheiro')
                }}>
                    <span>
                        <Money size={20} /> 
                        <p>DINHEIRO</p> 
                    </span>
                </button>
            </ContainerButton>
            
        </ContainerConfirmRequest>
    )
}