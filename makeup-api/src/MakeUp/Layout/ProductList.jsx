import React, { useState, useEffect, createContext } from "react";
import DisplayComponent from "./DisplayComponent";

export const UserContext = createContext();
function ProductList (){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            console.log(data);
          });
      }, []);

    return(
        <div>
    <UserContext.Provider value={products}>
      <div>
      <DisplayComponent />
      </div>
    </UserContext.Provider>
    
    </div>
    )
}
    
export default ProductList;