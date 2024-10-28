
// components/Home.js
import React from 'react';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="categories mb-8">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-6 gap-4">
          {['Electronics', 'Fashion', 'Home', 'Beauty', 'Appliances', 'Toys'].map(category => (
            <div 
              key={category} 
              className="bg-white p-4 rounded-lg shadow text-center cursor-pointer hover:shadow-lg"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default Home;