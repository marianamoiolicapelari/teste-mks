import React, { useState, useEffect } from 'react'
import { FiMinus, FiPlus } from "react-icons/fi";
import axios from 'axios'

import { Items, Img, Title, Price, ButtonQuantityComponent, ButtonQuantity, Button } from './style'


export const ItemsModal = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {

        const response = await axios.get('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')

        const data = response.data.products
        setProducts(data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            {
                products.map((product) => (
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
                ))
            }
        </>
    )
}
