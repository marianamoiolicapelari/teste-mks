import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";

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

export const Modal = ({ isOpen, setModalOpen, children }) => {

    if (isOpen) {
        return (
            <TheModal>
                <HeaderModal>
                    <TitleModal>Carrinho <br /> de compras</TitleModal>
                    <ButtonCloseModal onClick={setModalOpen}><AiFillCloseCircle size={30} /></ButtonCloseModal>
                </HeaderModal>
                <BodyModal>
                    {children}
                    <FooterModal>
                        <TextFooterModal>Total:</TextFooterModal>
                        <ValueFooterModal type="text" placeholder='valor' disabled/>
                    </FooterModal>
                </BodyModal>
                <ButtonCheckout>Finalizar Compra</ButtonCheckout>
            </TheModal>
        )
    }
    return null
}




