import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Logo from '../svgs/Logo';
import Heart from '../svgs/Heart';
import { useWishlistContext } from '../contexts/wishlist';

const Header = ({ className }) => {
  const { showWishlistItems, setShowWishlistItems, wishlistIds } = useWishlistContext();

  return (
    <header className={className}>
      <Container>
        <Logo /> 
        <WishlistButton onClick={() => setShowWishlistItems(!showWishlistItems)}>
          <Heart />
          {wishlistIds.length > 0 && (<Label>{wishlistIds.length}</Label>)}
        </WishlistButton>      
      </Container>
    </header>
  );

};

const Label = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  width: 1rem;
  height: 1rem;
  font-size: .75rem;
  line-height: 0;
  border-radius: 5rem;
  font-weight: 700;
`;

const WishlistButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;

  ${Heart} {
    width: 1.5rem;
  }
`;

export default styled(Header)`
  padding: 1rem 0;
  box-shadow: rgb(0 0 0 / 30%) 0px 1px 3px;

  ${Logo} {
    max-width: 12rem;
    color: ${({ theme }) => theme.primaryColor};
  }

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
