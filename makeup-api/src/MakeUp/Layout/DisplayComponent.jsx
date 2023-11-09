import React, { useContext } from "react";
import { UserContext } from "./ProductList";


function DisplayComponent({ currentPage, itemsPerPage }) {
  const products = useContext(UserContext);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <div className="container">
      <div className="row">
        {displayedProducts.map((product) => (
          <div key={product.id}
          className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card card-hover">
              <img
                src={product.image_link}
                className="card-img-top shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.brand}</h5>
                <p className="card-text">{product.category}</p>
                <p className="card-text">
                  {product.price}
                  <span>{product.price_sign}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayComponent;