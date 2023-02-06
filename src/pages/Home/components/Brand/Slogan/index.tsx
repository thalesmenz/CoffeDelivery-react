import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Abox, ACaffe, Arelogio, Ashopping, ContainerDivsText, Divs, P } from "./styles";

export function Slogan() {
    return (
        <ContainerDivsText>
            <Divs>
                <P>
                <Ashopping href="">
                    <ShoppingCart size={20} />
                </Ashopping>
                    Compra simples e segura
                </P>
                <P>
                <Arelogio>
                    <Timer size={20} />
                </Arelogio>
                    Entrega rápida e rastreada
                </P>
            </Divs>
            <Divs>
                <P>
                    <Abox>
                        <Package size={20} />
                    </Abox>
                    Embalagem mantém o café intacto
                </P>
                <P>
                    <ACaffe>
                        <Coffee size={20} />
                    </ACaffe>
                    O café chega fresquinho até você
                </P>
            </Divs>
        </ContainerDivsText>
    )
}