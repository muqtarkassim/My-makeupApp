import React from "react"
import ProductItem from "./product";
function AddToCart ({carts,setcarts}){
    const handleclick=()=>{alert('already in cart')}
    console.log(carts)
    const mappedProducts = carts.map((product) => (
        <ProductItem
          key={product.id} 
          image={product.image_link}
          name={product.name}
          brand={product.brand}
          category={product.category}
          price_sign={product.price_sign}
          handleclick={handleclick}
          id={product.id}
        />))
    return (
        <div>
            <h1 >Add to Cart</h1>
            <div className="container">
      <div className="row">
            {mappedProducts}
            </div>
            </div>
            </div>
    )
}
export default AddToCart;