import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const PRODUCTS_URL = "https://v2.api.noroff.dev/online-shop";

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(PRODUCTS_URL);
        const json = await response.json();
        setProducts(json.data);
        setFilteredProducts(json.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Welcome to Johan's Ecom
      </h1>
      <SearchBar
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <h2 className="text-center mb-5">Products:</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
