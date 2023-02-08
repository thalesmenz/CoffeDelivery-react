import styled from "styled-components";

export const ContainerSuccess = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 5rem;
`

export const ContainerTitle = styled.div`
    margin-top: 5rem;
`

export const P1 = styled.p`
    color: ${props => props.theme["yellow-dark"]};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: bold;
`

export const ContainerInfos = styled.div`
    width: 27rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 3rem;
    border: 1px solid ${props => props.theme["purple-dark"]};
    padding: 2rem 2rem;
    border-radius: 8px 30px 8px 30px;
`

export const Img = styled.img`
    width: 25rem;
`

export const ContainerText = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
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

export const AmapPin = styled.a`
    width: 2rem;
    height: 2rem;
    background: ${props => props.theme.purple};
    color:  ${props => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

export const Adollar = styled.a`
    width: 2rem;
    height: 2rem;
    background: ${props => props.theme['yellow-dark']};
    color:  ${props => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`