import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    width: 100%;
    
    gap: 2rem;

 @media (min-width: 999px){
    /* grid-template-columns: repeat(4, 1fr); */
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
    

`

export const SectionTitleAndFilter = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.125rem;
    margin-top: 1.5rem;

`

export const TitleMenu = styled.h1`
    font-size: 32px;
    color: ${props => props.theme["base-subtitle"]};



`

export const Filter =styled.div`
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;
`

export const FilterItem = styled.button`
    cursor: pointer;
    text-transform: uppercase;
    border: solid 1px ${props => props.theme["yellow"]};
    border-radius: 100px;
    color: ${props => props.theme["yellow-dark"]};
    background-color: ${props => props.theme["white"]};
    padding: 0 0.75rem; 
    font-size: 0.65rem;
    font-weight: 700;
    

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.4s;
    
    &:hover{
        background-color: ${props => props.theme["yellow-dark"]};
        color: ${props => props.theme["white"]};
        transition: 0.4s;
    }
   


`
