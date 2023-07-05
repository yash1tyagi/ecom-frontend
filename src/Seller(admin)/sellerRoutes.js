
import React from 'react'
import { Routes, Route } from "react-router-dom";
import { SellerState } from "./sellerContext/SellerState";
import Admin from "./componats/admin";
import LoginAdmin from "./componats/loginAdmin";
import { AddProduct } from './componats/AddProduct';
import ViewProduct from './componats/viewProduct';

const SellerRoutes = () => {
  return (
    <SellerState>
<Routes>
    <Route path = '/loginAdmin' element = {<LoginAdmin/>} exact/>
    <Route path = '/admin' element = {<Admin/>} exact/>
    <Route path = '/addProduct' element = {<AddProduct/>} exact/>
    <Route path = '/product' element = {<ViewProduct/>} exact/>
</Routes> 
</SellerState>
  
   
)}

export default SellerRoutes