import React, { useContext, useEffect } from 'react'
import CustomerContex from '../../Context/Customer/CustomerContext'
import ItemCart from '../../Componants/ItemCart'
import Spinner from '../../Componants/Spinner'
const Shoes = () => {
    const context = useContext(CustomerContex)
    const {view, viewProduct} = context
    useEffect(() => {
        viewProduct()
    }, [view])
    const filterFootware = view.filter((element)=>{
        return element.productName == "Shoes"
    })
    
  return (
    <div>
        {filterFootware.length == 0?<Spinner/> :<ItemCart serchProduct = {filterFootware || []}/>}
    </div>
  )
}

export default Shoes