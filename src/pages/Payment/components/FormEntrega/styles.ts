import styled from "styled-components";

export const ContainerForm = styled.div`
    width: 40rem;
    height: 22rem;
    background: ${props => props.theme.card};
    border-radius: 8px;
`

export const ContainerP = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;

    span {
        display: flex;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;

        svg {
            color: ${props => props.theme["yellow-dark"]};
            height: 1.5rem;
        }
    }

    p {
        margin-left: 2rem;
        color: ${props => props.theme.text};
        font-size: 0.9rem;
    }   
`

export const ContainerInputs = styled.div`
    margin-left: 1rem;
`


export const InputBase = styled.input`
    background: ${props => props.theme.input};
    border: none;
    height: 1.5rem;
    color: black;
    outline: none;
    padding: 1.3rem;
    border-radius: 8px;
    margin: 0.55rem;
    cursor: pointer;
`

export const InputRua = styled(InputBase)`
    width: 35rem;
`

export const InputComplemento = styled(InputBase)`
    width: 20rem;
`

export const InputCidade = styled(InputBase)`
    width: 15rem;
`

export const InputUf = styled(InputBase)`
    width: 4rem;
`

