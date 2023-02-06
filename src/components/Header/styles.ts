import styled from 'styled-components'

export const HeaderContainer = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
`

export const Localizacao = styled.div`
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    font-family: 'Roboto', sans-serif;
    padding: 0.3rem;
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
