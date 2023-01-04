import styled from "styled-components"

export const Container = styled.div`

   display: flex;
   flex-direction: column;
   gap: 2rem;

   @media (min-width: 1350px) {
        flex-direction: row;
        justify-content: space-between;
    }
    

`

export const TitleBlack = styled.h6`
    margin: 1rem 0;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${props => props.theme["base-subtitle"]};
`



