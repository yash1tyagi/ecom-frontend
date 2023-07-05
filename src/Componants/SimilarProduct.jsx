import React, { useContext, useEffect } from 'react'
import CustomerContex from '../Context/Customer/CustomerContext'
import ItemCart from './ItemCart'
const SimilarProduct = (props) => {
    const context = useContext(CustomerContex)
    const {serchItem, serchProduct} = context
    const {productName}= props
    useEffect(() => {
        serchItem(productName)
    })
  return (
    
    <div>
        <div className='mt-8 text-center text-2xl font-bold'>Similar Products</div>
        <div className='mt-5'>
        <ItemCart serchProduct = {serchProduct}/>
        </div>
    </div>
  )
}

export default SimilarProduct