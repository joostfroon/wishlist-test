import React, { useContext } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { useWishlistContext } from '../../contexts/wishlist';
import { ProductInterface } from '../../interfaces';

const LABEL_TITLE = 'Open wishlist';

interface Props {
  products: ProductInterface[];
  className?: string;
}

const WishlistModal = ({ className, products }: Props) => {
  const { showWishlistItems, setShowWishlistItems, toggleWishlistId } = useWishlistContext();

  return (
    <div className={className}>
      <Label title={LABEL_TITLE} aria-label={LABEL_TITLE} onClick={() => setShowWishlistItems(!showWishlistItems)}>
        Wishlist
      </Label>
      {showWishlistItems && (
        <Wishlist>
          {products.map(product => (
            <Product key={product.id} product={product} toggleWishlistId={toggleWishlistId} />
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
