import React from 'react'
import { Items } from './style'
import axios from 'axios'

export const ItemsModal = () => {

    return (
        <Items>
            <img src="" alt="" />
            <h2></h2>
            <div>
                <button>
                    <i>-</i>
                </button>
                <span>2</span>
                <button>
                    <i>+</i>
                </button>
            </div>
            <p></p>
        </Items>
    )
}
