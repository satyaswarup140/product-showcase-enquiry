import React from "react";

export default function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <img src={product.image_url} alt={product.name} />

      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>Price: {product.price} USD</h3>
    </div>
  );
}
