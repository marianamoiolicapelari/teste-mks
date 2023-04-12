import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi"

import {
    Items,
    Img,
    Title,
    Price,
    ButtonQuantityComponent,
    ButtonQuantity,
    Button
} from './style'


export const ItemsModal = () => {

    return (
        <Items >
            <Img src="" alt="" />
            <Title>Produto</Title>
            <ButtonQuantityComponent>
                <Button>
                    <i><FiMinus /></i>
                </Button>
                <ButtonQuantity>2</ButtonQuantity>
                <Button>
                    <i><FiPlus /></i>
                </Button>
            </ButtonQuantityComponent>
            <Price>R$ 300</Price>
        </Items>

    )
}




