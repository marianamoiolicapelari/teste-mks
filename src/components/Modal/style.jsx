import styled from "styled-components";

export const TheModal = styled.div`
    height: 100vh;
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
    align-items: center;
    padding: 1.5rem;
`

export const TitleModal = styled.p`
    color: #fff;
    font-weight: 700;
    font-size: 1.6rem;
`

export const ButtonCloseModal = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
`

export const BodyModal = styled.div`
    display: flex;
    height: 65%;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`

export const FooterModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
`

export const TextFooterModal = styled.p`
    color: #fff;
    font-weight: 700;
    font-size: 1.3rem;
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