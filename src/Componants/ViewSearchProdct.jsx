import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import CustomerContex from '../Context/Customer/CustomerContext'
import ItemCart from './ItemCart'
const ViewSearchProdct = () => {
    const context = useContext(CustomerContex)
    const {serchItem, serchProduct} = context
    const { itemName } = useParams()
    useEffect(() => {
        serchItem(itemName)
    })
    
    return (
        <div >
                <ItemCart serchProduct = {serchProduct}/>
          
        </div>
    )
}

export default ViewSearchProdct