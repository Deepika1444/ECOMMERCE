import React from 'react';
import ProductList from '../components/User/ProductList';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <h1>Welcome to the E-commerce Website</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
