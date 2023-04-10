import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from "react-icons/ai"
import { FiMinus, FiPlus } from "react-icons/fi"

import axios from 'axios'

import {
    TheModal,
    HeaderModal,
    TitleModal,
    ButtonCloseModal,
    BodyModal,
    FooterModal,
    TextFooterModal,
    ValueFooterModal,
    ButtonCheckout,
    Items,
    Img,
    Title,
    Price,
    ButtonQuantityComponent,
    ButtonQuantity,
    Button
} from './style'


export const Modal = ({ isOpen, setModalOpen }) => {
    const [cart, setCart] = useState([])

    const fetchData = () => {
        axios
            .get('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
            .then((response) => setCart(response.data.products))
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (isOpen) {
        return (
            <TheModal>
                <HeaderModal>
                    <TitleModal>Carrinho <br /> de compras</TitleModal>
                    <ButtonCloseModal onClick={setModalOpen}><AiFillCloseCircle size={40} /></ButtonCloseModal>
                </HeaderModal>
                <BodyModal>
                    {cart.map((product) => (
                        <Items key={product.id}>
                            <Img src={product.photo} alt="" />
                            <Title>{product.brand}</Title>
                            <ButtonQuantityComponent>
                                <Button>
                                    <i><FiMinus /></i>
                                </Button>
                                <ButtonQuantity>2</ButtonQuantity>
                                <Button>
                                    <i><FiPlus /></i>
                                </Button>
                            </ButtonQuantityComponent>
                            <Price>{product.price}</Price>
                        </Items>
                    ))}
                    {cart.length === 0 && (

                        <Title>
                            Carrinho de compras vazio
                        </Title>

                    )}
                </BodyModal>
                <FooterModal>
                    <TextFooterModal>Total:</TextFooterModal>
                    <ValueFooterModal type="text" placeholder='valor' disabled />
                </FooterModal>
                <ButtonCheckout>Finalizar Compra</ButtonCheckout>
            </TheModal>
        )
    }
    return null
}




