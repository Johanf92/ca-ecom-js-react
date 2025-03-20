import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ products, setFilteredProducts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(value)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleSelectProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="relative w-full max-w-md mx-auto mb-6">
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border rounded-lg"
      />
      {searchTerm && (
        <ul className="absolute bg-white border w-full mt-1 rounded-lg shadow-lg">
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(searchTerm)
            )
            .map((product) => (
              <li
                key={product.id}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelectProduct(product.id)}
              >
                {product.title}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
