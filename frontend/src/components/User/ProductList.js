import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock products data
    const mockProducts = [
      { _id: '1', name: 'Product 1', description: 'Description for product 1', price: 100 },
      { _id: '2', name: 'Product 2', description: 'Description for product 2', price: 200 },
      { _id: '3', name: 'Product 3', description: 'Description for product 3', price: 300 },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
