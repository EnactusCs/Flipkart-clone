
// components/ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in real app, fetch from API
  const product = {
    id: id,
    name: "iPhone 13",
    price: 799.99,
    image: "/api/placeholder/400/400",
    description: "Latest iPhone with A15 Bionic chip",
    features: [
      "6.1-inch Super Retina XDR display",
      "A15 Bionic chip",
      "Advanced dual-camera system",
      "Ceramic Shield front"
    ]
  };

  const addToCart = () => {
    // Implement cart functionality
    alert(`Added ${quantity} items to cart`);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-4">${product.price}</p>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">Key Features:</h3>
            <ul className="list-disc pl-5">
              {product.features.map(feature => (
                <li key={feature} className="mb-1">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center mb-6">
            <label className="mr-4">Quantity:</label>
            <select 
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border rounded px-2 py-1"
            >
              {[1,2,3,4,5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <button 
            onClick={addToCart}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;