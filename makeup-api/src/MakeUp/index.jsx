import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

// Login Section

import Login from "./LogIn";

// Layout
import Layout from "./Layout";
import AddToCart from "./Layout/AddToCart";
import MainComponent from "./Layout/MainComponent";
import ProductDetails from "./Layout/ProductDetails";
import ProductList from "./Layout/ProductList";


import NOTFOUND from "./404";


// Nested routes.

function MakeUp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login/>} />
        <Route path="layout" element={<Layout/>}>
          <Route path="" element={<MainComponent/>} />
         <Route path="list" element={<ProductList />} />
         <Route path="details/:id/" element={<ProductDetails />} />
          <Route path="addtocart" element={<AddToCart />} />
        </Route>
        
        <Route path="*" element={<NOTFOUND/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MakeUp;