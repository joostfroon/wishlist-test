import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  fontSize: '16px',
  fontFamily: "'Overpass',Arial,sans-serif",
  fontColor: 'black',
  primaryColor: '#003878',
  gray: '#a1b5c5',
  grid: {
    containerGap: '1rem',
    columnGap: '2rem',
  },
  backgroundColor: 'white',
  breakingpoints: {
    xs: '0',
    sm: '36rem',
    md: '48rem',
    lg: '62rem',
    xl: '75rem',
  },
};

export default theme;
