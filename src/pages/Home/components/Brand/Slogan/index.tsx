import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ContainerDivsText, Divs, P } from "./styles";

export function Slogan() {
    return (
        <ContainerDivsText>
            <Divs>
                <P>
                <ShoppingCart size={20} />
                    Compra simples e segura
                </P>
                <P>
                <Timer size={20} />
                    Entrega rápida e rastreada
                </P>
            </Divs>
            <Divs>
                <P>
                <Package size={20} />
                    Embalagem mantém o café intacto
                </P>
                <P>
                    <Coffee size={20} />
                    O café chega fresquinho até você
                </P>
            </Divs>
        </ContainerDivsText>
    )
}