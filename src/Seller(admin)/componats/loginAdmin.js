import React, { useContext, useEffect, useState } from 'react';
import Forms from "../../Componants/Form"
import SellerContex from '../sellerContext/SellerContext';
import { useNavigate } from "react-router-dom";
const LoginAdmin = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('seller-token')) {
            navigate("/admin");
        }
    })
    
    
    const context = useContext(SellerContex)
    const {LoginSeller} = context
    const [text, SetText] = useState({email : '', password : ''})
    const items = [
        {
            label: "Email",
            name: "email",
            type: "email"
        },
        {
            label: "Password",
            name: "password",
            type: "password"
        }
    ]
    const submit = ((e) => {
        e.preventDefault();
        if (text.email === '' || text.password === '') {
            alert("Please fill all details")
        }
        else{
            LoginSeller(text)
        }
        // console.log("This is Working")
        // console.log(text.email , text.password)
        
    })
    return (
        <div className='flex justify-center'>
            <div className='w-1/2'>
                <Forms item={items} text={text} SetText={SetText} Submit={submit} />
            </div>
        </div>
    )
}

export default LoginAdmin