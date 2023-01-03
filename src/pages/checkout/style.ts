import styled from "styled-components"

export const Container = styled.div`

`

export const TitleBlack = styled.h6`
    margin: 1rem 0;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${props => props.theme["base-subtitle"]};
`

export const ContainerForm = styled.section`
    margin: 1rem 0;
    background: #F3F2F2;
    border-radius: 6px;
    padding: 2.5rem;

    @media (min-width: 1025px) {
        width: 640px;
    }
    
   
`

export const FormEndereco = styled.form`
    margin-top: 2rem;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const IconTitle = styled.div`
    display: flex;
    gap: 1rem;
`

const COLLOR_ICON = {
    yellow: "yellow-dark",
    purple: "purple",
} as const

interface COLLOR_ICON {
    colorIcon: keyof typeof COLLOR_ICON
}
export const IconColor = styled.div<COLLOR_ICON>`
    color: ${(props) => props.theme[COLLOR_ICON[props.colorIcon]]};
`
export const Title = styled.strong`
    color: ${props => props.theme["base-subtitle"]};
    font-weight: 600;
    font-size: 1rem; 
`


export const Subtitle = styled.p`
    color: ${props => props.theme["base-text"]};
    font-weight: 400;
    font-size: 0.85rem;
`


export const BaseInput = styled.input`
    margin: 1rem 0;
    width: ${props => props.width ? props.width : 'auto'};
    background: ${props => props.theme["base-input"]};
    color:  ${props => props.theme["base-label"]};
    border: 1px solid ${props => props.theme["base-button"]};
    border-radius: 4px;
    height: 2.5rem;
    padding-left: 0.5rem;
    

    &:focus{
        outline: solid 1px ${props => props.theme["yellow-dark"]};
        
    }

`

export const PaymentDisplay = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0; 

`

export const PaymentButton = styled.button`
    width: 11.16687rem;
    height: 3.1875rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding-left: 1rem;
    font-size: 0.75rem;
    border: none;
    background:  ${props => props.theme["base-button"]};
    color:  ${props => props.theme["base-text"]};
    border-radius: 6px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.1s;
    
    &:hover{
        transition: 0.1s;
        outline: solid 1px ${props=>props.theme.purple};
        background: ${props=>props.theme["purple-light"]};
    }



`