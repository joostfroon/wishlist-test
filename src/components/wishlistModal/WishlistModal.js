import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

const WishlistModal = ({ className, products, toggleInWishlist }) => {
  const [open, setOpen] = useState();

  return (
    <div className={className}>
      <Label onClick={() => setOpen(!open)}>{products.length} producten bewaard</Label>
      {open && (
        <Wishlist>
          {products.map(product => (
            <Product key={product.id} product={product} toggleInWishlist={toggleInWishlist} />
          ))}
        </Wishlist>
      )}
    </div>
  );
};

const Wishlist = styled.div`
  display: flex;
  gap: .5rem;
  grid-template-columns: repeat(6, 1fr);
  padding: .5rem ${({ theme }) => theme.grid.containerGap};
  border-top: .25rem solid ${({ theme }) => theme.primaryColor};
  background: #f0f2f6;
  overflow: auto;
`;

const Label = styled.button`
  background: ${({ theme }) => theme.primaryColor};
  margin-left: ${({ theme }) => theme.grid.containerGap};
  padding: .75rem;
  border: none;
  border-radius: .5rem .5rem 0 0;
  color: white;
  cursor: pointer;
  font-weight: 700;
`;

export default styled(WishlistModal)`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`;
