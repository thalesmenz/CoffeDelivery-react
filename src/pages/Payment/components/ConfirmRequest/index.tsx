import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { ContainerButton, ContainerConfirmRequest, ContainerP } from "./styles";

export function ConfirmRequest() {
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
                <button>
                    <span>
                        <CreditCard size={20} />
                        <p>CARTÃO DE CREDITO</p>
                    </span>
                    </button>
                <button>
                    <span>
                        <Bank size={20} /> 
                        <p>CARTÃO DE DÉBITO</p>
                    </span>
                </button>
                <button>
                    <span>
                        <Money size={20} /> 
                        <p>DINHEIRO</p> 
                    </span>
                </button>
            </ContainerButton>
            
        </ContainerConfirmRequest>
    )
}