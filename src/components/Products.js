import React from 'react';
import styled from 'styled-components';
import Product from './product/Product';

const Products = ({ products, className, wishlist, toggleInWishlist }) => {
  return (
    <div className={className}>
      {products.map((product) => (
        <Product 
          key={product.id} 
          product={product} 
          wishlist={wishlist}
          toggleInWishlist={toggleInWishlist} 
        />
      ))}
    </div>
  );
};

export default styled(Products)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 0;
`;
