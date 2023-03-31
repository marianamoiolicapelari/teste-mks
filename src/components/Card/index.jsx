import React from "react";
import axios from 'axios'
import { FiShoppingBag } from "react-icons/fi";
import { useState, useEffect } from 'react'

import { TheCard, Img, CardTitle, CardTitleH2, CardTitleH3, CardSubTitle, Button } from '../Card/style'

const Card = () => {

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
            {products.length === 0 ? (
                <p>Carregando...</p>
            ) : (products.map((product) => (
                <TheCard key={product.id}>
                    <Img src={product.photo} alt="" />
                    <CardTitle>
                        <CardTitleH2>{product.brand}</CardTitleH2>
                        <CardTitleH3>{product.price}</CardTitleH3>
                    </CardTitle>
                    <CardSubTitle>{product.description}</CardSubTitle>
                    <Button><FiShoppingBag />COMPRAR</Button>
                </TheCard>
            )))}


        </>

    )
}

export default Card

