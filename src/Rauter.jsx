import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Componants/Home';
import Login from './Componants/Auth/Login';
import SignUp from './Componants/Auth/SignUp';
import Cart from './Componants/Cart';
import ProductPage from './Pages/ProductPage';
import OrderCheckOutPage from './Pages/OrderCheckOutPage';
import ViewSearchProdct from './Componants/ViewSearchProdct';
import Shoes from './Pages/CategoryPage/Shoes';
import Book from './Pages/CategoryPage/Book';
import Grocery from './Pages/CategoryPage/Grocery';
const Rauter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/login" element={<Login/>} exact />
        <Route path="/signup" element={<SignUp/>} exact />
        <Route path="/cart" element={<Cart/>} exact />
        <Route path="/productPage/:id" element={<ProductPage/>} exact />
        <Route path="/orderCheckOut" element={<OrderCheckOutPage/>} exact />
        <Route path="/viewProduct/:itemName" element={<ViewSearchProdct/>} exact />
        <Route path="/Shose" element={<Shoes/>} exact />
        <Route path="/Grocery" element={<Grocery/>} exact />
        <Route path="/Book" element={<Book/>} exact />
    </Routes>
  )
}

export default Rauter