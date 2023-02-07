import { MapPinLine } from "phosphor-react";
import { ContainerInputs, ContainerP, InputBase, InputCidade, InputComplemento, InputRua, InputUf } from "./styles";
import { ContainerForm } from "./styles";

export function FormEndereco() {
    return (
        <ContainerForm>
            <ContainerP>
                <div>
                    <span>
                        <MapPinLine size={32} />
                        Endereço de entrega
                    </span>
                </div>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
            </ContainerP>
            <ContainerInputs>
                <InputBase type="text" placeholder="CEP" />
                <InputRua type="text" placeholder="Rua" />
                <InputBase type="text" placeholder="Número" />
                <InputComplemento type="text" placeholder="Complemento" />
                <InputBase type="text" placeholder="Bairro" />
                <InputCidade type="text" placeholder="Cidade" />
                <InputUf type="text" placeholder="UF" />
            </ContainerInputs>
        </ContainerForm>
    )
}