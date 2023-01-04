import styled from "styled-components"


export const TitleBlack = styled.h6`
    margin: 1rem 0;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${props => props.theme["base-subtitle"]};
`

export const CardCoffeSelct = styled.div`
    /* width: 100%; */
    /* height: 498px; */
    background: #F3F2F2;
    padding-bottom: 2rem;
    border-radius: 6px 44px;
   

`

export const CardCoffeItem = styled.div`

    display: flex;
    padding: 2.25rem 0;
    margin: 0 2.25rem ;
    gap: 1.5rem;
    border-bottom: solid 1px ${props=>props.theme["base-button"]};

`

export const DisplayButtonAndName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

     @media (min-width: 1350px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const ButtonsQuant = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;


`

export const NameCoffe = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: ${props=>props.theme["base-subtitle"]};
    text-transform: capitalize;
`

export const DisplayButton = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 1rem;
    background: ${props=> props.theme["base-button"]};
    color: ${props=> props.theme["base-text"]};
    padding: 0.5rem;
    border-radius: 6px;


`
export const BaseButton = styled.button`
    background: transparent;
    color: ${props=> props.theme.purple};
    border:none;
    cursor:pointer;

    &:focus{
        outline: solid 1px  ${props=> props.theme.purple};
    }
    
`

export const ButtonRemove = styled(BaseButton)`
    display: flex;
    align-items: center;
    gap:0.5rem;
    background: ${props=> props.theme["base-button"]};
    color: ${props=> props.theme["base-text"]};
    text-transform: uppercase;
    padding:  0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.75rem;
    transition: 0.1s;

    &:hover{
        background: ${props=> props.theme["purple-light"]};
        outline: solid 1px ${props=>props.theme.purple};
        transition: 0.1s
    }
`

export const ImageCoffe = styled.img`
    width: 5rem;
    height: 5rem;
`

export const CardTotalizer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    margin: 0 2.25rem ;
    padding: 1.59375rem 0;
`

export const TotalizerItem = styled.div`
    display: flex;
    justify-content:space-between;
    font-size: 0.875rem;
    color: ${props=>props.theme["base-text"]};

`

export const Totalizer = styled.div`
    display: flex;
    justify-content:space-between;
    font-size: 1.25rem;
    color: ${props=>props.theme["base-subtitle"]};
`

export const ButoonConfirm = styled.button`
    cursor: pointer;
    height: 2.875rem;
    background: ${props=>props.theme.yellow};
    color: ${props=>props.theme.white};
    border-radius: 6px;
    border: none;
    transition: 0.1s;

    &:hover{
        background: ${props=>props.theme["yellow-light"]};
        outline: solid 1px ${props=>props.theme.yellow};
        color: ${props=>props.theme["yellow-dark"]};
        transition: 0.1s;
    }

    &:focus{
        outline: solid 1px  ${props=> props.theme["yellow-dark"]};
    }
`