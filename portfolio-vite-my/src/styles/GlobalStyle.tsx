import {createGlobalStyle} from "styled-components";
import {theme} from "./theme.ts";


export  const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        line-height: 1.2;
    }

    body {
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        background-color: #191919;
    }
    
        tel{
            color: red;
        }
    

    a:hover {
        cursor: pointer;
        color: ${theme.primaryColor};
        svg{
            fill: ${theme.primaryColor};
        }
    }

`
