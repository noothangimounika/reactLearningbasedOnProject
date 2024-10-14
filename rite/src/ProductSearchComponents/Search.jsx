import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  const searchProducts = async (query) => {
    try {
      const response = await axios.get(`/api/products?search=${query}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearch = debounce((value) => {
    if (value) {
      searchProducts(value);
    } else {
      setProducts([]);
    }
  }, 300);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
