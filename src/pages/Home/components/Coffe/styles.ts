import styled from "styled-components";

export const ContainerCoffe = styled.div`
display: block;
width: 12rem;
background: ${props => props.theme.card};
padding-bottom: 0.5rem;
`

export const Img = styled.img`
    margin-top: -1.1rem;
`

export const ContainerImg = styled.div`
    margin-left: 2.25rem;
`

export const Texts = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const H1 = styled.h1`
    font-family: 'Baloo 2', sans-serif;
    font-size: 1rem;
`

export const P1 = styled.p`
    color: ${props => props.theme.text};
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem 1.3rem 0.8rem;
`

export const ContainerPreco = styled.div`
    display: flex;
    gap: 0.2rem;
`

export const Preco = styled.p`
    color: ${props => props.theme.text};

    font-family: 'Baloo 2', sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
`

export const Rs = styled.p`
color: ${props => props.theme.text};
    font-size: 0.8rem;
    margin-top: 0.67rem;
`

export const ContainerBuy = styled.div`
    display: flex;
    padding: 0 1rem;
    gap: 1.5rem;
`

export const Counter = styled.div`
    width: 3rem;
    background: ${props => props.theme.button};
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 6px;
`

export const ButtonCounter = styled.button`
    background: ${props => props.theme.button};
    color: ${props => props.theme.purple};
    padding-right: 0.3rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
`

export const ButtonCounterneg = styled.button`
    margin-bottom: 0.7rem;
    background: ${props => props.theme.button};
    color: ${props => props.theme.purple};
    padding-left: 0.3rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
`

export const ContainerCartAndCounter = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`

export const Abuy = styled.button`
    width: 1.8rem;
    height: 1.8rem;
    background: ${props => props.theme["purple-dark"]};
    color:  ${props => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`


