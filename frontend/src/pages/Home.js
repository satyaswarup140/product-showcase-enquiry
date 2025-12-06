import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [theme, setTheme] = useState("light");

  const fetchProducts = async () => {
    const res = await axios.get(`http://localhost:5000/products?page=${page}`);
    setProducts(res.data.products);
    setTotalPages(res.data.totalPages);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((p) => {
    return (
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className={`page-container ${theme}`}>
      <h1 className="title">All Products</h1>

      {/* TOP BAR */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <ProductList products={filteredProducts} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
