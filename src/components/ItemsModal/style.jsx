import styled from "styled-components";

export const Items = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21.25rem;
    height: 5.5rem;
    background: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: .6rem 1.6rem;
`

export const Img = styled.img`
    width: 2.8rem;
    height: 3.5rem;
    margin: 1rem 1rem 1rem .4rem;
`

export const Title = styled.p`
    font-weight: 400;
    font-size: 1rem;
    color: #2C2C2C;
    margin: .5rem .7rem;
`

export const Price = styled.h3`
    font-weight: 700;
    font-size: .9rem;
`

export const ButtonQuantityComponent = styled.div`
    margin: 1rem;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;
`

export const ButtonQuantity = styled.span`
    background-color: transparent;
    padding: .3rem;  
`

export const Button = styled.button`
    border: none;
    background-color: transparent;
    padding: .3rem;
    cursor: pointer;
`