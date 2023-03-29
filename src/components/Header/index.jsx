import React from "react"

import {TheHeader, H1, Span, Shop, InputShop} from './style'


export const Header = () => {
    return (
        <TheHeader>             
            <div>
                <H1>MMC<Span>Shop</Span></H1>
            </div>
            <Shop>
                <img src="./src/assets/shop.png" alt="" />
                <InputShop type="text" placeholder="0" />
            </Shop>
        </TheHeader>
        
    )
}