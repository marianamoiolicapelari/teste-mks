import React from "react";
import watch from '../../assets/watch.png'

import { TheCard, Img,  CardTitle, CardTitleH2, CardTitleH3, CardSubTitle, Button } from '../Card/style'

export const Card = () => {
    return (
        <TheCard>
            <Img src={watch} alt="" />
            <CardTitle>
                <CardTitleH2>Apple Watch Series 4</CardTitleH2>
                <CardTitleH3>R$399</CardTitleH3>
            </CardTitle>
            <CardSubTitle>Redesigned from scratch and completely revised.</CardSubTitle>
            <Button>COMPRAR</Button>
        </TheCard>
    )
}

