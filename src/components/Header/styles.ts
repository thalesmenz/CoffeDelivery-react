import styled from 'styled-components'

export const HeaderContainer = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;

    a {
        height: 2rem;
        width: 2rem;
        color:  ${props => props.theme['yellow-dark']};
        background: ${props => props.theme['yellow-light']};
        padding: 0.3rem;
        border-radius: 6px;

       p {
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        margin-left: 1rem;
        margin-top: -0.8rem;
        background:  ${props => props.theme['yellow-dark']};
        color:  ${props => props.theme.white};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 13px;
       } 
    }
`

export const Localizacao = styled.div`
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    font-family: 'Roboto', sans-serif;
    padding: 0.3rem;
    padding-right: 0.5rem;
    border-radius: 8px;
    display: flex;
` 

export const ContainerLocalizacaoBuy = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap:0.8rem;
`

export const ContainerImg = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`

export const Img = styled.img`
    width: 5rem;
`
