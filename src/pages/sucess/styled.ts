import styled from "styled-components"

export const Container = styled.div`
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1025px) {
        flex-direction: row;
        align-items: flex-end;
    }

`

export const TitleBlack = styled.h6`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem; 
    color: ${props => props.theme["yellow-dark"]};
`

export const SubTitle = styled.p`
   font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem; 
    color: ${props => props.theme["base-subtitle"]};
`
export const CardSucces = styled.div`
    margin: 2.5rem 0;
    width: 100%;

    border-radius: 6px 36px;
    background: linear-gradient(91.52deg, #DBAC2C -0.32%, #8047F8 99.88%);
    padding: 1px;

    @media (min-width: 1025px) {
        width: 512px;
        
    }
`

export const CardSuccesAjust = styled.div`
    background: ${props => props.theme.white};
    width: 100%;
    border-radius: 6px 36px;

    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 1025px) {
        width: 510px;
        
    }
`

export const CardList = styled.div` 
    display: flex;
    gap: 1rem;
`

export const ButtonHome = styled.button` 
    margin: 2rem 0;
    background: linear-gradient(91.52deg, #DBAC2C -0.32%, #8047F8 99.88%);
    width: 50%;
    height: 2rem;
    border-radius: 6px;
    border: none;
    color: ${props => props.theme.white};
    cursor: pointer;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    

`

export const InfoText = styled.div`
    text-transform: capitalize;
`


const COLOR_ICON = {
    yellowDark: "yellow-dark",
    yellow: "yellow",
    purple: "purple",
} as const

interface ColorIcone {
    colorIcon: keyof typeof COLOR_ICON
}

export const Icon = styled.div<ColorIcone>` 
    width: 2rem;
    height: 2rem;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 1000px;
    background: ${(props) => props.theme[COLOR_ICON[props.colorIcon]]};
    color: ${props => props.theme.white};
`

export const ImagenIlustracao = styled.img`
    margin: 2rem 0;
    width: 18.625rem;
    @media (min-width: 1025px) {
        margin: 0;
        width: 30.7rem;
    }
`



