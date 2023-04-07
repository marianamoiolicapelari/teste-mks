import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from "react-icons/ai"
import { ItemsModal } from '../ItemsModal'
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
    ButtonCheckout
} from './style'


export const Modal = ({ isOpen, setModalOpen }) => {
    const fetchData = () => {
        axios
            .get('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
            .then((response) => setCart(response.data.products))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [cart, setCart] = useState([])

    if (isOpen) {
        return (
            <TheModal>
                <HeaderModal>
                    <TitleModal>Carrinho <br /> de compras</TitleModal>
                    <ButtonCloseModal onClick={setModalOpen}><AiFillCloseCircle size={40} /></ButtonCloseModal>
                </HeaderModal>
                <BodyModal>
                    {cart.map((item) => (
                        <ItemsModal />
                    ))}
                    {cart.length === 0 && (

                        <h3>
                            Carrinho de compras vazio
                        </h3>

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




