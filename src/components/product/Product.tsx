import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';
import WishlistButton from '../WishlistButton';
import { ProductInterface } from '../../interfaces';
import { useWishlistContext } from '../../contexts/wishlist';

interface Props {
  product: ProductInterface;
  className?: string;
}

const Product = ({ product, className }: Props) => {
  const { id, image, title, reviewScore, description, price } = product;
  const { wishlistIds, toggleWishlistId } = useWishlistContext();

  return (
        <article className={className}>
            <Image src={image} alt={title} />
            <div>
              <Title>{title}</Title>
              <Stars $score={reviewScore} />
              <Description>{description}</Description>
            </div>
            <PriceAndWishlistWrapper>
              <Price>{price}</Price>
              <WishlistButton
                title={`Add ${title} to wishlist`}
                active={wishlistIds.includes(id)} 
                onClick={() => toggleWishlistId(id)} 
              />
            </PriceAndWishlistWrapper>
        </article>
  
  );
};

const Image = styled.img`
  max-width: 100%;
  margin: 0 auto;
  align-self: center;
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  
  @media all and (min-width: ${({ theme }) => theme.breakingpoints.md}) {
    margin-bottom: 1rem;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize};
`;

const Description = styled.p`
  line-height: 150%;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceAndWishlistWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  padding-bottom: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakingpoints.md}) {
    flex-direction: column;
    justify-content: center;
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export default styled(Product)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @media all and (min-width: ${({ theme }) => theme.breakingpoints.md}) {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;
