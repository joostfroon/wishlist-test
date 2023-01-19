import React, { createContext, useState } from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './global-style';
import Header from './Header';

export const ToggleWishlistContext = createContext(null);

const Layout = ({ children }) => {
  const [openWishlist, setOpenWishlist] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <ToggleWishlistContext.Provider value={{ openWishlist, setOpenWishlist }}>
        <Normalize />
        <GlobalStyle />
        <Header />
        {children}
      </ToggleWishlistContext.Provider>
    </ThemeProvider>
  );
};

export default Layout;
