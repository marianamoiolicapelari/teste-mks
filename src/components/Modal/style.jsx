import styled from "styled-components";

export const TheModal = styled.div`
    height: 100%;
    width: 30vw;
    background-color: #ab44d4; 
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);  
    position: fixed;
    right: 0;
    z-index: 2;
`
export const HeaderModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-itens: center;
    padding: 1.5rem;
`

export const TitleModal = styled.p`
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
`

export const ButtonCloseModal = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
`
export const BodyModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: bottom; */
    padding: 1.5rem;
    background-color: red;
`
export const FooterModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const TextFooterModal = styled.p`
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
`

export const ValueFooterModal = styled.input`
    width: 40%;
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    border: none;
    background-color: transparent;
    text-align: right;
    
`

export const ButtonCheckout = styled.button`
    position: fixed;
    bottom: 0;
    border: none;
    background-color: #000;
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    padding: 1.5rem;
    width: 30vw;
    cursor: pointer;
`