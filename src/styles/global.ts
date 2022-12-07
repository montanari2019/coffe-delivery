import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body{
        background: ${props => props.theme.backgound};
        color: ${props => props.theme["base-text"]}
    }

    body, input, textarea, button{
        font-family: 'Baloo 2', cursive;
        font-family: 'Roboto', sans-serif;

        font-weight: 400;
        font-size: 1rem
    }

`