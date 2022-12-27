import styled from "styled-components"
import background from "../../../../assets/Background.png"

export const HeaderBackground = styled.div`
     z-index: -1;
     background-image: url(${background});
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     filter: blur(70px);
     width: 90%;
     height: 50vh;
     position: absolute;


`

export const HeaderContainer = styled.section`


`

export const TitleAndContainer = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1025px) {
        flex-direction: row;
        justify-content: space-between;
    }

`

export const Imagen = styled.img`
    width: 20rem;
    margin: 1rem 0;
    

    @media (min-width: 1025px) {
        width: 29.75rem;
        height: 22.5rem;
        margin: 0;
    }


`

export const CardDisplay = styled.div`
    display: flex;
    flex-direction: column;
    


    @media (min-width: 1025px) {
        width: 600px;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 4rem 0;
        justify-content: space-between;

    }
`

export const Title = styled.h1`
    font-size: 2rem;
    margin: 1rem 0;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
    color: ${props => props.theme["base-title"]};
    line-height: 130%;

     @media (min-width: 1025px) {
        font-size: 3rem;
        width: 36rem;
    }
`

export const CardConatiner = styled.div`
    margin: 1rem 0;
    display: flex;
    align-items:center;
    width: 18rem;
    gap: 0.85rem;
`

const COLLOR_ICON = {
    yellow_Dark: "yellow-dark",
    yellow: "yellow",
    gray: "base-text",
    purple: "purple"
} as const


interface ColorIconProps{
    iconColor: keyof typeof COLLOR_ICON;
}

export const CardIcon = styled.span<ColorIconProps>`

    padding: 0.5rem;
    border-radius: 50%;
    display:flex;
    justify-content:center;
    
    color: ${props => props.theme.white};
    background: ${props => props.theme[COLLOR_ICON[props.iconColor]]};
`