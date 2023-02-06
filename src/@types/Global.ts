import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
 background: ${props => props.theme.background};
 margin: 0rem 12.2rem 2rem 12.2rem
};

border-style, input, text-area, button, p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`