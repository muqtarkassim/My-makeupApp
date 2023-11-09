import React, { useState } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

// Login Section

import Login from "./LogIn";

// Layout
import Layout from "./Layout";
import AddToCart from "./Layout/AddToCart";
import MainComponent from "./Layout/MainComponent";
import ProductList from "./Layout/ProductList";


import NOTFOUND from "./404";


// Nested routes.

function MakeUp() {
  const[carts,setcarts]=useState([])
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login/>} />
        <Route path="layout" element={<Layout/>}>
          <Route path="" element={<MainComponent/>} />
         <Route path="list" element={<ProductList  carts={carts} setcarts={setcarts}/>} />
          <Route path="addtocart" element={<AddToCart  carts={carts} setcarts={setcarts}/>} />
        </Route>
        
        <Route path="*" element={<NOTFOUND/>} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default MakeUp;