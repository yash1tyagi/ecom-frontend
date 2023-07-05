import React, { useState } from 'react'
// import { useState } from 'react'
import SellerContext from './SellerContext'
import { useNavigate } from "react-router-dom";
const Port = 5000

export const SellerState = (props) => {
  let navigate = useNavigate();
  const host = `https://ecom-backend3.onrender.com`

  // Login Seller

  const LoginSeller = (async (text) => {
    const response = await fetch(`${host}/ecom/seller/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...text})
    })
    const json = await response.json();
    console.log(json.authtoken)
    if (json.authtoken) {
      localStorage.setItem('seller-token', json.authtoken);
      navigate("/admin");
    }
    else {
      alert("invalid credentials")
    }
  })


  
// Add product 

const addProduct = (async(text)=>{
  console.log('Request Send')
  const response = await fetch(`${host}/ecom/Product`,{
    method : 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : localStorage.getItem('seller-token')
    },
    body: JSON.stringify({...text})
  })
  const json = await response.json()
  console.log('Request end')
  console.log(json);
})

// Veiw all Product
const [view , setView] = useState([]);
const viewProduct = (async()=>{
  const response = await fetch(`${host}/ecom/Product/view`,{
    method : 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token' : localStorage.getItem('seller-token')
    }
  })
  const json = await response.json()
  setView(json)
  // console.log(json)
})

// Delete Product
const productDelete = (async(id)=>{
  const response = await fetch(`${host}/ecom/Product/deleteProduct/${id}`,{
    method :'DELETE',
    headers : {
      'Content-Type': 'application/json',
      'auth-token' : localStorage.getItem('seller-token')
    }
  })
  const json = await response.json()
  console.log(json)
})

  return (
    <div>
      <SellerContext.Provider value={{LoginSeller, addProduct, view, viewProduct, productDelete}}>
        {props.children}
      </SellerContext.Provider>
    </div>
  )
}
