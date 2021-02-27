import React from 'react';
import ProductList from './components/product-list';
import TopBar from './components/top-bar';
import './App.css';
import Button from './components/button';

function App() {
  return (
    <>
      <TopBar className="top-bar" />
      <div className="container">
        <ProductList />
      </div>
      <Button />
    </>
  );
}

export default App;
