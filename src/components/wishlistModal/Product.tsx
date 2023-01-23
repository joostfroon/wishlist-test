import React from 'react';
import styled from 'styled-components';
import { ProductInterface } from '../../interfaces';
import Cross from '../../svgs/Cross';

interface Props {
  product: ProductInterface;
  toggleWishlistId: (prop: string) => void;
  className?: string;
}

const Product = ({ product, toggleWishlistId, className }: Props) => {
  const removeProductTitle = `Remove ${product.title} from wishlist`;
  return (
    <article className={className}>
      <RemoveButton 
        type="button" 
        title={removeProductTitle} 
        aria-label={removeProductTitle} 
        onClick={() => toggleWishlistId(product.id)}
      >
        <Cross />
      </RemoveButton>
      <Img src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
    </article>
  );
}

const Img = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1rem;
`;

const RemoveButton = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;

  ${Cross} {
    width: .75rem;
    color: ${({ theme }) => theme.gray};
  }
`;

export default styled(Product)`
  max-width: 12rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: .5rem;
`;
