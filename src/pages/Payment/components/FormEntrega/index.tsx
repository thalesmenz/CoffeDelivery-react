import { MapPinLine } from "phosphor-react";
import { useContext } from "react";
import { FormContext } from "../../../../contexts/FormContext";
import { ContainerInputs, ContainerForm, ContainerP, InputBase, InputCidade, InputComplemento, InputRua, InputUf } from "./styles";

export function FormEndereco() {

    const {
        Cep,
        setCep,
        Rua,
        setRua,
        Numero,
        setNumero,
        Complemento,
        setComplemento,
        Bairro,
        setBairro,
        Cidade,
        setCidade,
        UF,
        setUF,
    } = useContext(FormContext)

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
                <InputBase type="text" placeholder="CEP"
                 value={Cep} onChange={(event) => setCep(event.target.value)}
                 />
                <InputRua type="text" placeholder="Rua" 
                value={Rua} onChange={(event) => setRua(event.target.value)} 
                />
                <InputBase type="text" placeholder="Número" 
                value={Numero} onChange={(event) => setNumero(event.target.value)}
                />
                <InputComplemento type="text" placeholder="Complemento" 
                value={Complemento} onChange={(event) => setComplemento(event.target.value)}
                />
                <InputBase type="text" placeholder="Bairro" 
                value={Bairro} onChange={(event) => setBairro(event.target.value)}
                />
                <InputCidade type="text" placeholder="Cidade" 
                value={Cidade} onChange={(event) => setCidade(event.target.value)}
                />
                <InputUf type="text" placeholder="UF" 
                value={UF} onChange={(event) => setUF(event.target.value)}
                />
            </ContainerInputs>
        </ContainerForm>
    )
}