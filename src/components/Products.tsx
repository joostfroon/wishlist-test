import React from 'react';
import styled from 'styled-components';
import Product from './product/Product';
import { ProductInterface } from '../interfaces';

interface Props {
  products: ProductInterface[];
  className?: string;
}

const Products = ({ products, className }: Props) => (
  <div className={className}>
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

export default styled(Products)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 0;
`;
