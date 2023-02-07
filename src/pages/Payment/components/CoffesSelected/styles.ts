import styled from "styled-components";

export const ContainerCoffeSelected = styled.div`
    width: 25rem;
    height: 15rem;
    padding: 2rem;
    padding-top: 0.11rem;
    background: ${props => props.theme.card};

    div {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }

    button {
        width: 21.5rem;
        background: ${props => props.theme.yellow};
        color: ${props => props.theme.white};
        border: none;
        padding: 0.7rem;
        margin-top: 1.5rem;
        border-radius: 8px;

        &:hover {
            outline: 2px solid ${props => props.theme["yellow-dark"]};
            cursor: pointer;
        }

    }
`

export const P1 = styled.p`
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
`

export const P2 = styled.p`
    color: ${props => props.theme.text}
`


