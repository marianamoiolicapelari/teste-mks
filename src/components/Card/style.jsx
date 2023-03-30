import styled from "styled-components";

export const TheCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 218px;
    height: 285px;
    background: #FFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    margin: 1rem;
`
export const Img = styled.img`
    width: 111px;
    height: 138px;
    margin: 15px;
`
export const CardTitle = styled.div`
    display: flex;
    margin: 0 .7rem;
`
export const CardTitleH2 = styled.h2`
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1rem;
    color: #2C2C2C;

`
export const CardTitleH3 = styled.h3`
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
    color: #FFFFFF;
    background-color: #373737;
    border-radius: 5px;
    padding: .5rem;
`

export const CardSubTitle = styled.p`
    font-weight: 300;
    font-size: .6rem;
    line-height: .8rem;
    color: #2C2C2C;
    margin: .7rem;
`

export const Button = styled.button`
    height: 20%;
    width: 100%;
    color: #FFF;
    font-weight: 600;
    font-size: 1rem;
    background: #ab44d4;
    border: none;
    border-radius: 0px 0px 8px 8px;
`