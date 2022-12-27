import styled from "styled-components"

export const CardCoffeItem = styled.div`

    text-align: center;

    width: 16rem;
    min-height: 19.375rem;
    background: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;
    margin: 2rem 0 ;

    padding: 0 1.2rem;
    transition: 0.4s;
    border: none;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* gap: 2rem; */
    /* overflow: hidden; */
   
    
    
  
`

export const ImagenCoffeItem = styled.img`
    margin-top: -1.25rem;

`
export const TitleItem = styled.strong`
    text-transform: capitalize;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    text-align: center;
    color: ${props => props.theme["base-subtitle"]};   
    margin-top: 1rem;
    
`
export const CardCategoryDisplay = styled.section`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    
`

export const CardCategory = styled.div`
    cursor: pointer;
    
    text-transform: uppercase;
    border-radius: 100px;
    background: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    letter-spacing: 0.5px;

    font-size: 0.625rem;
`

export const DescriptionItem = styled.p`
    font-size: 0.875rem;
    margin-top: 0.5rem;
    margin-bottom:2.25rem;
    color: ${props => props.theme["base-label"]};   

`

export const Price = styled.strong`
   font-size: 1.2rem;
   margin-left: 0.2rem;
   color:  ${props => props.theme["base-text"]};
   font-family: "Baloo 2";
   font-weight: 800;
`

export const ShoppingCartIcons = styled.div`
    cursor: pointer;
    width: 2.37rem;
    height: 2.37rem;
    padding: 8px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    background: ${props => props.theme["purple-dark"]};
    color: ${props => props.theme["white"]};
    transition: 0.4s;
    
    &:hover{
        background: ${props => props.theme["purple"]};
        transition: 0.4s;
        
    }
    
    
`

export const ButtonCardDisplay = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;

`

export const ButtonQuantidadeDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.85rem;
    background: ${props => props.theme["base-button"]};
    padding: 0.5rem;
    border-radius: 6px;
    color: ${props => props.theme["base-title"]};
   
`

export const ButtonQuantidade = styled.button`
    background: transparent;
    cursor: pointer;
    border: none;
    color: ${props => props.theme["purple"]};


`