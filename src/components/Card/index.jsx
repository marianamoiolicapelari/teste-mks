import React, { useState, useEffect } from "react";
import axios from 'axios'
import { FiShoppingBag } from "react-icons/fi";

import {
    TheCard,
    Img,
    CardTitle,
    CardTitleH2,
    CardTitleH3,
    CardSubTitle,
    Button
} from './style'

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

  
    const handleAddItem = () => { 
      
    }

    
    return (
        <>
            {products.length === 0 ? (
                <p>Carregando...</p>
            ) : (products.map((product) => (
                <TheCard key={product.id}>
                    <Img src={product.photo} alt="" />
                    <CardTitle>
                        <CardTitleH2>{product.brand}</CardTitleH2>
                        <CardTitleH3>R$ {parseFloat(product.price).toFixed(0)}</CardTitleH3>
                    </CardTitle>
                    <CardSubTitle>{product.description}</CardSubTitle>
                    <Button onClick={handleAddItem}><FiShoppingBag />COMPRAR</Button>
                </TheCard>
            )))}


        </>

    )
}

export default Card

