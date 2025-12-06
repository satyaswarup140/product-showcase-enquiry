import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image_url}
        alt={product.name}
        className="product-img"
      />

      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>

      <button className="cart-btn">Add to Cart</button>
      <button className="details-btn">View Details</button>
    </div>
  );
}
