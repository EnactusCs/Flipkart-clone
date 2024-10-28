
// components/Cart.js
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems] = useState([
    {
      id: 1,
      name: "iPhone 13",
      price: 799.99,
      quantity: 1,
      image: "/api/placeholder/100/100"
    }
  ]);

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow mb-4">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-24 h-24 object-cover rounded mr-6"
              />
              <div className="flex-grow">
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center mt-2">
                  <label className="mr-2">Qty:</label>
                  <select 
                    value={item.quantity}
                    className="border rounded px-2 py-1"
                  >
                    {[1,2,3,4,5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button className="text-red-500">Remove</button>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>FREE</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between mb-4">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;