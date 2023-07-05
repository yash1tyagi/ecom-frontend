import React, { useContext, useEffect } from 'react'
import CustomerContex from '../../Context/Customer/CustomerContext'
import ItemCart from '../../Componants/ItemCart'
const Book = () => {
  const context = useContext(CustomerContex)
  const {view, viewProduct} = context
  useEffect(() => {
      viewProduct()
  }, [view])
  const filterBook = view.filter((element)=>{
      return element.productCategory == "Book"
  })
  
  return (
    <ItemCart serchProduct = {filterBook || []}/>
  )
}

export default Book