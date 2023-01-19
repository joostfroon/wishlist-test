import React, { useContext } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Logo from '../svgs/Logo';
import { ToggleWishlistContext } from '../layout/layout';
import Heart from '../svgs/Heart';

const Header = ({ className }) => {
  const { openWishlist, setOpenWishlist } = useContext(ToggleWishlistContext);

  return (
    <header className={className}>
      <Container>
        <Logo /> 
        <WishlistButton type="button" onClick={() => setOpenWishlist(!openWishlist)}>
          <Heart />
        </WishlistButton>      
      </Container>
    </header>
  );

};

const WishlistButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  ${Heart} {
    width: 1rem;
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
