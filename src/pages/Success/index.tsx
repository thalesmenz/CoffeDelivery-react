import { ContainerSuccess, ContainerTitle, P1, ContainerInfos, Img, ContainerText, Arelogio, Adollar, AmapPin } from "./styles";
import MotoBoy from './../../assets/MotoBoy.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
    return (
        <ContainerSuccess>
            <div>
            <ContainerTitle>
                <P1>
                    Uhu! Pedido confirmado
                </P1> 
                <p>
                    Agora é só aguardar que logo o café chegará até você    
                </p> 
            </ContainerTitle>

        <div>
            
        </div>
            <ContainerInfos>
                <ContainerText>
                <AmapPin>
                    <MapPin size={20}/>
                </AmapPin>
                    <div>
                        <p>
                            Entrega em Rua João Daniel Martinelli, 102
                        </p>
                        <p>
                            Farrapos - Porto Alegre, RS
                        </p>
                    </div>

                </ContainerText>
            
                <ContainerText>
                    <Arelogio>
                        <Timer size={20} />
                    </Arelogio>
                    <div>
                        <p>
                            Previsão de entrega 
                        </p>
                        <p>
                            20 - 30 min
                        </p> 
                    </div>
                </ContainerText>

                <ContainerText>
                    <Adollar>
                        <CurrencyDollar size={20} />
                    </Adollar>
                        <div>
                            <p>
                                Pagamento na entrega
                            </p>
                            <p>
                                Cãrtão de Crédito
                            </p>
                        </div> 
                    </ContainerText>

            </ContainerInfos>
            </div>
                <Img src={MotoBoy} alt="" />
        </ContainerSuccess>
    )
}