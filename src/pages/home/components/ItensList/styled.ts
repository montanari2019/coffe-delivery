import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 999px){

        justify-content: flex-start;
        flex-direction: column;
        align-items: inherit;
}
`

export const ContainerListItem = styled.div`
    display: flex;
    width: 100%;
    gap: 5rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

 @media (min-width: 999px){
    /* grid-template-columns: repeat(4, 1fr); */
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
    

`

export const SectionTitleAndFilter = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2.125rem;
    margin-top: 1.5rem;
    gap: 1rem;
    
    
    @media (min-width: 999px){
        /* grid-template-columns: repeat(4, 1fr); */
    gap: 0rem;
    flex-direction: row;

    justify-content: space-between;
}
    

`

export const TitleMenu = styled.h1`
    font-size: 32px;
    color: ${props => props.theme["base-subtitle"]};



`

export const Filter = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;
`



const FilterButton = styled.button`
    cursor: pointer;    
    text-transform: uppercase;
    border-radius: 100px;
    padding: 0 0.75rem; 
    font-size: 0.65rem;
    font-weight: 700;
    

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.4s;

`

export const FilterItem = styled(FilterButton)`
   
    border: solid 1px ${props => props.theme["yellow"]};
  
    color: ${props => props.theme["yellow-dark"]};
    background-color: ${props => props.theme["white"]};
  
    
    &:hover{
        background-color: ${props => props.theme["yellow-dark"]};
        color: ${props => props.theme["white"]};
        transition: 0.4s;
    } 


`


export const FilterClearItem = styled(FilterButton)`
   
    border: solid 1px ${props => props.theme["purple"]};
    color: ${props => props.theme["white"]};
    background-color: ${props => props.theme["purple-dark"]};

    
    &:hover{
        background-color: ${props => props.theme["white"]};
        color: ${props => props.theme["purple-dark"]};
        transition: 0.4s;
    }
   


`

