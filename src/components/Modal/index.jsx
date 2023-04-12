import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai"

import {ItemsModal} from '../ItemsModal'

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

    if (isOpen) {
        return (
            <TheModal>
                <HeaderModal>
                    <TitleModal>Carrinho <br /> de compras</TitleModal>
                    <ButtonCloseModal onClick={setModalOpen}><AiFillCloseCircle size={40} /></ButtonCloseModal>
                </HeaderModal>
                <BodyModal>

               <ItemsModal />
         
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




