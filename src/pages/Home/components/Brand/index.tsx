import { Slogan } from "./Slogan";
import { Titulos } from "./Titulos";
import  CopoCafe  from "../../../../assets/CopoCafe.svg"
import { ContainerBrand, Img } from "./styles";

export function Brand() {
    return (
        <ContainerBrand>
            <div>
                <Titulos />
                <Slogan />
            </div>

            <Img src={CopoCafe} alt="" />
        </ContainerBrand>

    )
}