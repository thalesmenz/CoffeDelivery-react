import { CoffesSelected } from "./components/CoffesSelected";
import { ConfirmRequest } from "./components/ConfirmRequest";
import { FormEndereco } from "./components/FormEntrega";
import { ContainerPayment, P1 } from "./styles";

export function Payment() {
    return (
        <ContainerPayment>
            <div>
                <P1>Complete seu pedido</P1>
                <FormEndereco />
                <ConfirmRequest />   
            </div>
            <div>
                <P1>Cafés selecionados</P1>
                <CoffesSelected />
            </div>
        </ContainerPayment>
    )
}