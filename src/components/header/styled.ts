import styled from "styled-components"

export const HeaderLayout = styled.header`
    margin: 2rem 0;
    height: 5rem;
    display: flex;
    justify-content: space-between;



`

export const LocationAndCartContainer =styled.div`
    display: flex;
    gap: 1rem;

`

export const Location = styled.div`
    gap: 0.5em;
    display: flex;
    height: 3rem;
    align-items: center;
    padding: 0.5rem 0.9rem;
    border-radius: 6px;
    background: ${props => props.theme["purple-light"]};
    color:  ${props => props.theme["purple-dark"]};
    transition: 0.4s;
    cursor:grab;

    &:hover{
        background: ${props => props.theme["purple-dark"]};
        color: ${props => props.theme.white};
        transition: 0.4s
    }

    &:focus{
        outline: solid 1px  ${props => props.theme["purple"]};
    }

`

export const Badge = styled.span`
    /* z-index: 1; */
    padding: 0 0.3rem;
    width: 20px;
    height: 10px;
    border-radius: 50%;
    color: ${props => props.theme.white};
    background: ${props => props.theme["yellow-dark"]};

`

export const CartLogo = styled.div`
    cursor: pointer;
    height: 3rem;
    height: 3rem;
    padding: 0.5rem;
    background: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    
    display: flex;
    justify-content:center;
    align-items:center;
    
    border-radius: 6px;
    transition: 0.4s;

    &:hover{
        background: ${props => props.theme["yellow-dark"]};
        color: ${props => props.theme.white};
        transition: 0.4s;
        
    }

`