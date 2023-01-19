import React from 'react';
import styled from 'styled-components';

const Product = ({ product, toggleInWishlist, className }) => (
  <article className={className}>
    <RemoveButton onClick={() => toggleInWishlist(product.id)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.31 122.876">
        <path 
          fill="currentColor" 
          d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z" 
        />
      </svg>
    </RemoveButton>
    <Img src={product.image} alt={product.title} />
    <Title>{product.title}</Title>
  </article>
);

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

  svg {
    width: .75rem;
    color: ${({ theme }) => theme.gray};
  }
`;

export default styled(Product)`
  max-width: 12rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: .5rem;
`;
