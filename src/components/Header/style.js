import styled from 'styled-components'

export const TheHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    background-color: #ab44d4;
    position: fixed;
    top: 0;
    width: 100%;
`

export const H1 = styled.p`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    color: #FFF;
    font-size: 2rem;
    font-weight: 600;
    line-height: 19px;
`

export const Span = styled.p`
    color: #000;
    font-size: 1.8rem;
    font-weight: 300;
    padding-left: .3rem;
    font-family: 'Satisfy', cursive;
`

export const InputShop = styled.input`
    border: none;
    width: 30px;
    text-align: center;
    pointer-events: none;
`
export const Shop = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;
    background-color: #FFF;
    border-radius: .5rem;
    padding: .5rem;
    cursor: pointer;
    border: none;
`



