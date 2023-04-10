import styled from "styled-components"

export const Items = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 95px;
    background: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: .6rem 3rem;
`

export const Img = styled.img`
    width: 46px;
    height: 57px;
    margin: 15px;
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