import styled from "styled-components";

export const Counter = styled.div`
    width: 5rem;
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

export const ButtonRemove = styled.button`
    width: 6rem;
    height: 2rem;
    background: ${props => props.theme.button};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;
    gap: 0.1rem;
    cursor: pointer;

    span {
        color: ${props => props.theme.purple};
        margin-top: 0.1rem;
    }

    p {
        font-size: 0.7rem;
    }

`

export const ContainerPreco = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
`

export const Preco = styled.p`
    color: ${props => props.theme.text};

    font-family: 'Baloo 2', sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
`

export const Rs = styled.p`
    font-weight: bold;
    color: ${props => props.theme.text};
`

export const ContainerCoffeBuy = styled.div`
    width: 100%;
    padding: 2rem;
    background: ${props => props.theme.card};
    display: flex;
    border-bottom: 1px solid ${props => props.theme.button};

    img {
        width: 5rem;

    }
`

export const TextsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ButtonsContent = styled.div`
    display: flex;
    align-items: center;
    margin-left:  1.1rem;
    gap: 1rem;
`

export const ContainerContent = styled.div`
    width: 100%;
`