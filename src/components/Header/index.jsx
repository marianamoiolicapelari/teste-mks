import React from "react"
import { useState } from "react"

import { Modal } from '../Modal'
import { TheHeader, H1, Span, Shop, InputShop } from './style'

export const Header = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
        <TheHeader>
            <div>
                <H1>MMC<Span>Shop</Span></H1>
            </div>
            <Shop onClick={ () => setOpenModal(true)}>
                <img src="./src/assets/shop.png" alt="" />
                <InputShop type="text" placeholder="0" />
            </Shop>
        </TheHeader>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
            {/* children */}
        </Modal>
        </>
    )
}