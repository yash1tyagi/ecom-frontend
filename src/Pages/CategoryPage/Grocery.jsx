import React, { useContext, useEffect } from 'react'
import CustomerContex from '../../Context/Customer/CustomerContext'
import ItemCart from '../../Componants/ItemCart'
import Spinner from '../../Componants/Spinner'
const Grocery = () => {
    const context = useContext(CustomerContex)
    const {view, viewProduct} = context
    useEffect(() => {
        viewProduct()
    }, [view])
    const filterGrocery = view.filter((element)=>{
        return element.productCategory == "Grocery"
    })
    
  return (
    <>
    {filterGrocery.length == 0 ?<Spinner/> :<ItemCart serchProduct = {filterGrocery || []}/>}
    </>
  )
}

export default Grocery