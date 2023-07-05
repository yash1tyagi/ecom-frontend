import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomerContex from '../Context/Customer/CustomerContext'
import { useNavigate } from "react-router-dom";
import SearchBox from './SearchBox';

const Navbar = () => {
    let navigate = useNavigate();
    const context = useContext(CustomerContex)
    const { cartItem } = context
    let items;
    if (localStorage.getItem('seller-token')) {

        items = [
            {
                link: 'Add Products',
                to: '/addProduct'
            },
            {
                link: 'Product',
                to: '/product'
            },
            {
                link: 'Orders',
                to: ''
            },
            {
                link: 'Category',
                to: ''
            },
        ]
    }
    else {
        items = [
            {
                link: 'Fashion',
                to: '/'
            },
            {
                link: 'Shoes',
                to: '/Shose'
            },
            {
                link: 'Grocery',
                to: '/Grocery'
            },
            {
                link: 'My Orders',
                to: ''
            },
        ]
    }
    const sellerLogOut = ((e) => {
        e.preventDefault();
        console.log("working")
        localStorage.removeItem("Customer-token" || "seller-token")
        // if (localStorage.getItem("seller-token")) {
        //     localStorage.removeItem("seller-token")
        // }
        // else if (localStorage.getItem("Customer-token")) {
        //     localStorage.removeItem("seller-token")
        // }
        
        navigate('/')
    })
    return (
        <div className='bg-gray-300'>

            <div>
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

                        <a href="https://flowbite.com" className="flex items-center">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-green-600">Fashion</span>
                        </a>
                       <div className="flex items-center cursor-pointer">
                                <SearchBox/>
                    {localStorage.getItem('Customer-token')? <Link to='/cart' className='relative inline-flex items-center p-3 text-sm font-medium text-center '>
                                <svg className="h-8 p-1 hover:text-green-500 duration-200 svg-inline--fa fa-shopping-cart fa-w-18 fa-7x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg>
                                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{cartItem.length || 0}</div>
                            </Link>:         <Link to='/login' className='relative inline-flex items-center p-3 text-sm font-medium text-center '>
                                <svg className="h-8 p-1 hover:text-green-500 duration-200 svg-inline--fa fa-shopping-cart fa-w-18 fa-7x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg>
                                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{cartItem.length || 0}</div>
                            </Link>}
                   
                            {
                                !localStorage.getItem('Customer-token' || 'seller-token')?<Link to='/login' type="button" class="ml-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Link>:<button onClick={sellerLogOut} type="button" class="ml-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                            }
                       
                        </div> 
                    </div>
                </nav>
                <nav className="bg-gray-300
             dark:bg-gray-700">
                    <div className="max-w-screen-xl px-4 py-3 mx-auto">
                        <div className="flex items-center">
                            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                                {
                                    items.map((element) => {
                                        return <Link to={element.to} key={element.link} className='text-gray-900 dark:text-white hover:underline" aria-current="page'>{element.link}</Link>
                                    })
                                }
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>



        </div>

    )
}

export default Navbar