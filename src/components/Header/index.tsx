import { ContainerLocalizacaoBuy, Img, ContainerImg, HeaderContainer, Localizacao } from "./styles";
import  LogoCoffe  from "../../assets/LogoCoffe.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AmountOfCoffes } from "../../contexts/AmountOfCoffes";

export function Header() {

    const { CoffesinListForBuy } = useContext(AmountOfCoffes)

    return (
        <HeaderContainer>
            <ContainerImg>
                <Img src={LogoCoffe} alt="logo" />
            </ContainerImg>
            <ContainerLocalizacaoBuy>
                <Localizacao>
                <MapPin size={24} />
                    Leme, SP
                </Localizacao>
                <NavLink to="/payment" title="Carrinho de compras">
                    <span>
                        <>
                        {CoffesinListForBuy.length != 0 ? <p>{CoffesinListForBuy.length}</p> : null }
                        </>
                        <ShoppingCart size={20} />
                    </span>
                </NavLink>
            </ContainerLocalizacaoBuy>

        </HeaderContainer>
    )
}