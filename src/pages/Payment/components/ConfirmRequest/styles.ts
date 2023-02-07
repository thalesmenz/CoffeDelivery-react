import styled from "styled-components";

export const ContainerConfirmRequest = styled.div`
    width: 40rem;
    height: 12rem;
    background: ${props => props.theme.card};
    margin-top: 1rem;
    border-radius: 8px;
`

export const ContainerP = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;

    span {
        display: flex;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;

        svg {
            color: ${props => props.theme.purple};
            height: 1.5rem;
        }
    }

    p {
        margin-left: 2rem;
        color: ${props => props.theme.text};
        font-size: 0.9rem;
    }   
`

export const ContainerButton = styled.div`
    margin-left: 1.5rem;
    
    button {
        background: ${props => props.theme.button};
        border: none;
        margin-left: 1rem;
        padding: 1rem;
        border-radius: 8px;
        cursor: pointer;
        
        span {
            display: flex;
            align-items: center;
            font-family: 'Roboto', sans-serif;
            gap: 0.2rem;
            
            p {
                font-size: 0.9rem;
            }

            svg {
                color: ${props => props.theme.purple};
                height: 1.5rem;
        }
    }

    &:focus {
        outline: 1px solid ${props => props.theme.purple};
    }

    }

`