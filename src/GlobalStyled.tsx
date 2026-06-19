import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        display: flex;
        min-height: 100vh;
    }
`