import React from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider, useTheme } from 'styled-components';
import theme from './theme';
import GlobalStyle from './global-style';
import Header from './Header';

const Layout = ({ children }) => {
  const parentTheme = useTheme();

  return (
    <ThemeProvider theme={{ ...parentTheme, ...theme }}>
      <Normalize />
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
