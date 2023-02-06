import { MapPinLine } from "phosphor-react";
import { ContainerForm } from "./styles";

export function FormEndereco() {
    return (
        <ContainerForm>
            complete seu pedido
            <div>
                <p>
                    <MapPinLine size={32} />
                    Endereço de entrega
                </p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </ContainerForm>
    )
}