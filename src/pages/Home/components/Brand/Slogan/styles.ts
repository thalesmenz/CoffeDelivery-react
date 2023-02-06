import styled from 'styled-components'

export const ContainerDivsText = styled.div`
    display: flex;
    gap: 0.8rem;
    width: 27rem;
    margin-top: 3rem
`

export const Divs = styled.div`
    display: flex;
    gap: 0.6rem;
    flex-direction: column;
`

export const P = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
`

export const Ashopping = styled.a`
    width: 2rem;
    height: 2rem;
    background: ${props => props.theme['yellow-dark']};
    color:  ${props => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

export const Arelogio = styled.a`
    width: 2rem;
    height: 2rem;
    background: ${props => props.theme.yellow};
    color:  ${props => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

export const Abox = styled.a`
    width: 2rem;
    height: 2rem;
    background: ${props => props.theme.text};
    color:  ${props => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

export const ACaffe = styled.a`
    width: 2rem;
    height: 2rem;
    background: ${props => props.theme.purple};
    color:  ${props => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`