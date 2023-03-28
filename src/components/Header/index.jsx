import React from "react"

import {TheHeader, H1, Span} from './style'


export const Header = () => {
    return (
        <TheHeader>             
            <div>
                <H1>MMC<Span>Shop</Span></H1>
            </div>
            <div>
                <img src="./src/assets/shop.png" alt="" />
                <input type="number" />
            </div>
        </TheHeader>
        
    )
}