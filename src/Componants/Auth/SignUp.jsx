import React, { useContext, useState } from 'react'
import Forms from '../Form'
import CustomerContex from '../../Context/Customer/CustomerContext'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import Spinner from '../Spinner';
const SignUp = () => {
    let navigate = useNavigate();
    const context = useContext(CustomerContex)
    const {createCustomer} = context
    const [text , SetText] = useState('')
    const [loading , setLoading] = useState(false)
    const items = [
        {
            label : "Name",
            type : "text",
            name : "name"
        },        {
            label : "E-mail",
            type : "text",
            name : "email"
        },
        {
            label : "Phone Number",
            type : "text",
            name : "phone"
        },
        {
            label : "Password",
            type : "password",
            name : "password"
        },
        {
            label : "Conform Password",
            type : "password",
            name : "cpassword"
        }
    ]
    const handelSubmit = (async(e)=>{
        e.preventDefault()
        setLoading(true)
    const result = await createCustomer(text)
     if (result.authtoken) {
    localStorage.setItem('Customer-token', result.authtoken);
    setLoading(false)
    navigate("/");
  }
  else {
    setLoading(false)
    alert("Accout not create please retry")
  }
        
    })
  return (
    <div className='flex flex-col justify-center items-center mt-6'>
         {loading? <Spinner/>: null}
        <div className='w-1/2'>
        <Forms item = {items} text = {text} SetText= {SetText} Submit = {handelSubmit} />
    </div>
    </div>
  )
}

export default SignUp