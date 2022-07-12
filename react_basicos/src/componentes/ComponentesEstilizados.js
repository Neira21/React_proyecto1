import React from 'react'
import styled, {css, keyframes, ThemeProvider} from 'styled-components'

export default function ComponentesEstelizados(){
    let MainColor = "#db7093",
    mainAlphaColor80 = "#db709380"
    
    const setTransitionTime = (time) => (`all ${time} ease-out`)

    const fadeIn = keyframes`
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    `
    const Myh3 = styled.h3`
        padding: 2rem;
        text-align: center;
        color: ${({color}) => color};
        color: ${({color}) => color || "#000"};
        background-color: ${MainColor};
        transition: ${setTransitionTime("1s")};

        ${({isButoon}) => isButoon && css`
            margin:auto;
            max-width: 50%;
            border-radius: 0.25rem;
            cursor: pointer;
        `}

        ${({animacion}) => animacion && css`
        animation: ${fadeIn} 5s ease-out`};

        &:hover{
            background-color: ${mainAlphaColor80};
        }
    `;
    
    const light = {
        color: "#222",
        bgColor: "#DDD"
    }

    const dark = {
        color: "#DDD",
        bgColor: "#222"
    }

    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color:${({theme}) => theme.color};
        background-color:${({theme}) => theme.bgColor};
    `;

    return(
        <>
        <h2>Styled Components</h2>
        <Myh3 animacion >Hola soy un h3 estilizado con styled-Componentes</Myh3>
        <Myh3 color='#61dafb'>
            Hola soy un h3 estilizado con styled-Componentes
        </Myh3>
        <Myh3 isButoon>Soy un h3 estelizado como botón</Myh3>

        <ThemeProvider theme={light}>
        <Box>Soy una caja light</Box>
        </ThemeProvider>
        <ThemeProvider theme={dark}>
        <Box>Soy una caja dark</Box>
        </ThemeProvider>

        </>
    )
}
