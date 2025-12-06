import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";
import EnquiryForm from "../components/EnquiryForm";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const loadProduct = async () => {
    const res = await axios.get(`http://localhost:5000/products/${id}`);
    setProduct(res.data);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-page">
      <ProductDetails product={product} />
      <EnquiryForm productId={id} />
    </div>
  );
}
