import { ContainerLocalizacaoBuy, Img, ContainerImg, HeaderContainer, Localizacao } from "./styles";
import  LogoCoffe  from "../../assets/LogoCoffe.svg"
import { MapPin, ShoppingCart } from "phosphor-react"

export function Header() {
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
                <a href="/payment">
                    <span>
                        <ShoppingCart size={20} />
                    </span>
                </a>
            </ContainerLocalizacaoBuy>

        </HeaderContainer>
    )
}