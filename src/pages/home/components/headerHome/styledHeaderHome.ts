import styled from "styled-components"
import background from "../../../../../public/Background.png"

export const HeaderBackground = styled.div`
     z-index: -1;
     background-image: url(${background});
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     filter: blur(70px);
     width: 100%;
     height: 50vh;
     position: absolute;


`

export const HeaderContainer = styled.section`


`

export const Title = styled.h1`
    font-size: 3rem;
    width: 588px;
height: 124px;
`

export const CardConatiner = styled.div`
    margin: 1rem 0;
    display: flex;
    align-items:center;
    gap: 0.85rem;
`

export const CardIcon = styled.span`

    padding: 0.5rem;
    border-radius: 50%;
    display:flex;
    justify-content:center;
    
    color: ${props =>props.theme.white};
    background: ${props => props.theme["yellow-dark"]};
`