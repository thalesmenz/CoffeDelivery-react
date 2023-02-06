import { Coffe } from "../Coffe";
import { ContainerListCoffe } from "./styles";
import expressoTradicional from "../../../../assets/coffes/expressoTradicional.svg"
import expressoAmericano from "../../../../assets/coffes/expressoAmericano.svg"
import expressoCremoso from "../../../../assets/coffes/expressoCremoso.svg"
import expressoGelado from "../../../../assets/coffes/expressoGelado.svg"
import cafeComLeite from "../../../../assets/coffes/cafeComLeite.svg"
import latte from "../../../../assets/coffes/latte.svg"
import capuccino from "../../../../assets/coffes/capuccino.svg"
import macchiato from "../../../../assets/coffes/macchiato.svg"
import mocaccino from "../../../../assets/coffes/mocaccino.svg"
import chocolateQuente from "../../../../assets/coffes/chocolateQuente.svg"
import cubano from "../../../../assets/coffes/cubano.svg"
import havaiano from "../../../../assets/coffes/havaiano.svg"
import arabe from "../../../../assets/coffes/arabe.svg"
import irlandes from "../../../../assets/coffes/irlandes.svg"

export function ListCoffes() {
    return (
        <div>
            <ContainerListCoffe>
            <Coffe 
            img={expressoTradicional}
            h1="Expresso Tradicional" 
            p="O tradicional café feito com água quente e grãos moídos"
            />
            <Coffe 
            img={expressoAmericano}
            h1="Expresso Americano" 
            p="Expresso diluído, menos intenso que  tradicional"
            />
            <Coffe 
            img={expressoCremoso}
            h1="Expresso Cremoso"
            p="Café expresso tradicional com espuma cremosa"
            />
            <Coffe 
            img={expressoGelado}
            h1="Expresso Gelado"
            p="Bebida preparada com café expresso e cubos de gelo"/>
        </ContainerListCoffe>
        <ContainerListCoffe>
            <Coffe 
            img={cafeComLeite}
            h1="Café com leite" 
            p="Meio a Meio de expresso tradicional com leite vaporizado"
            />
            <Coffe 
            img={latte}
            h1="Latte" 
            p="Uma dose de cafe expresso com o dobro de leite e espuma cremosa"
            />
            <Coffe 
            img={capuccino}
            h1="Capuccino"
            p="Bebida com canela feita de doses iguais de café, leite e espuma"
            />
            <Coffe 
            img={macchiato}
            h1="Macchiato"
            p="Café expresso misturado com um pouco de leite quente e espuma"/>
        </ContainerListCoffe>
        <ContainerListCoffe>
            <Coffe 
            img={mocaccino}
            h1="Mocaccino" 
            p="Café expresso com calda de chocolate, pouco leite e espumas"
            />
            <Coffe 
            img={chocolateQuente}
            h1="Chocolate quente" 
            p="Bebida feita com chocolate dissolvido no leite quente e café"
            />
            <Coffe 
            img={cubano}
            h1="Cubano"
            p="Drink gelado de café expresso com rum, creme de leite e hortelã"
            />
            <Coffe 
            img={havaiano}
            h1="Havaiano"
            p="Bebida adocicada preparada com café e leite de coco"
            />
        </ContainerListCoffe>
        <ContainerListCoffe>
            <Coffe 
            img={arabe}
            h1="Árabe" 
            p="Bebida preparada com grãos de café árabe e especiarias"
            />
            <Coffe 
            img={irlandes}
            h1="Irlandês" 
            p="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            />
        </ContainerListCoffe>
        </div>
        
        
        
    )
}