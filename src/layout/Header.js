import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Logo from '../svgs/Logo';

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Container>
        <Logo />       
      </Container>
    </header>
  );

};

export default styled(Header)`
  padding: 1rem 0;
  box-shadow: rgb(0 0 0 / 30%) 0px 1px 3px;

  ${Logo} {
    color: ${({ theme }) => theme.primaryColor};
  }

  ${Container} {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 12rem 1fr;
  }
`;
