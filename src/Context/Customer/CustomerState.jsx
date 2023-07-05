import React from 'react'
import { useState } from 'react'
import CustomerContex from './CustomerContext'
import { useNavigate } from "react-router-dom";
const Port = 5000

export const CustomerState = (props) => {
  let navigate = useNavigate();
  const host = `https://ecom-backend3.onrender.com`


 // Create customer

 const createCustomer = (async(text)=>{
  const response = await fetch(`${host}/ecom/customer`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...text})
  })
  const json = await response.json();
  return json
 
 })





 // Login 
 const loginCustomer = (async(text)=>{
  const response = await fetch(`${host}/ecom/customer/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...text})
  })
  const json = await response.json();
  return json

 })







// View all Products 
 const [view , setView] = useState([]);
 const viewProduct = (async()=>{
  // setView([])
   const response = await fetch(`${host}/ecom/Product/view`,{
     method : 'GET',
     headers: {
       'Content-Type': 'application/json',
       'auth-token' : localStorage.getItem('Customer-token')
     }
   })
   const json = await response.json()
   setView(json)
 })




 // View one Product through "_id"
 const [product , SetProduct] = useState([])
 const viewOneProduct = (async(id)=>{
  console.log(id);
  // const {id } = useParams()
  const response = await fetch(`${host}/ecom/viewProduct/${id}`,{
    method : 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : localStorage.getItem('Customer-token')
    }
  })
  const json = await response.json()  
  SetProduct(json)
 })
 const size = product.availableSize



 // Add Item to cart
 const addToCart = (async(producttId, quantity, size)=>{
  console.log("Send")
  const responce = await fetch(`${host}/ecom/cart/${producttId}`,{
    method : 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : localStorage.getItem('Customer-token')
    },
    body: JSON.stringify({quantity, size})
  })
  const json = await responce.json();
  console.log(json);
 })




// View all cart item
const [cartItem , SetCart] = useState([]);
const ViewCart = (async()=>{
    const responce = await fetch(`${host}/ecom/cart/find`,{
    method : 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : localStorage.getItem('Customer-token')
    }
  })
  const json = await responce.json();
  SetCart(json)
  // console.log(json);
})



// Delete cart items
const deleteCart = (async(id)=>{
  console.log("Working")
  const responce = await fetch(`${host}/ecom/cart/deleteCart/${id}`,{
    method : 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : localStorage.getItem('Customer-token')
    }
  })
  const json = await responce.json()
  console.log(json)
})


// Order items 
const OrderProduct = (async(id, quantity , size, totalAmount)=>{
  const responce = await fetch(`${host}/ecom/order/${id}`,{
    method : 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : localStorage.getItem('Customer-token')
    },
    body: JSON.stringify({quantity, size, totalAmount})
  })
  const json = await responce.json()
  console.log(json)
})



// Order cart items
const OrderCartProduct = (async()=>{
  const responce = await fetch(`${host}/ecom/order/cartOrder`,{
    method : 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : localStorage.getItem('Customer-token')
    }
  })
  const json = await responce.json()
  console.log(json)
})

// Search Product
const [serchProduct, SetSearchProduct] = useState([]);
const serchItem = (async(item)=>{
  const responce = await fetch(`${host}/ecom/product/search?search=${item}`,{
    method : 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : localStorage.getItem('Customer-token')
    }
})
const json = await responce.json();
console.log(json)
SetSearchProduct(json)
})



 






  return (
    <div>
        <CustomerContex.Provider value = {{createCustomer, loginCustomer, view, viewProduct, product, viewOneProduct, size, addToCart, cartItem, ViewCart, deleteCart, OrderProduct, OrderCartProduct, serchItem, serchProduct}}>
        {props.children }
        </CustomerContex.Provider>
    </div>
  )
}
