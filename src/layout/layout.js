import React from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './global-style';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
