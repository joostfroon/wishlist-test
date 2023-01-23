import React from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './global-style';
import Header from './Header';
import { WishlistContextProvider } from '../contexts/wishlist';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <WishlistContextProvider>
      <Normalize />
      <GlobalStyle />
      <Header />
      {children}
    </WishlistContextProvider>
  </ThemeProvider>
);

export default Layout;
