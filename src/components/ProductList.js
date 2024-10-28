
// components/ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products] = useState([
    {
      id: 1,
      name: "iPhone 13",
      price: 799.99,
      image: "/api/placeholder/200/200",
      description: "Latest iPhone with A15 Bionic chip"
    },
    {
      id: 2,
      name: "Samsung TV",
      price: 699.99,
      image: "/api/placeholder/200/200",
      description: "4K Smart TV with HDR"
    },
    // Add more products as needed
  ]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-4 gap-6">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-xl font-bold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;