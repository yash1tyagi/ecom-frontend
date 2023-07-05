import React, { useContext, useState } from 'react'
import Forms from '../Form'
import { useNavigate } from "react-router-dom";
import CustomerContex from '../../Context/Customer/CustomerContext'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner'
const Login = () => {
    let navigate = useNavigate();
    const context = useContext(CustomerContex)
    const {loginCustomer} = context
    const [text , SetText] = useState('')
    const [loading , setLoading] = useState(false)
    const items = [
 {
            label : "E-mail",
            type : "email",
            name : "email"
        },
        {
            label : "Password",
            type : "password",
            name : "password"
        },
    ]

    const handelSubmit = (async(e)=>{
        e.preventDefault()
        setLoading(true)
    const result = await loginCustomer(text)
     if (result.authtoken) {
    localStorage.setItem('Customer-token', result.authtoken);
    setLoading(false)
    navigate("/");
  }
  else {
    setLoading(false)
    alert("Accout not created PleaseRetry")
  }
    })
    return (
        <div className='flex flex-col justify-center items-center mt-6'>
           {loading? <Spinner/>: null}
        <div className='w-1/2'>
        <Forms item = {items} text = {text} SetText= {SetText} Submit = {handelSubmit} />
        <div className='mt-5'>
        <Link to = '/signup' type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</Link>
        </div>
    </div>
    </div>
    )
}

export default Login