import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: string;
    fontFamily: string;
    fontColor: string;
    primaryColor: string;
    gray: string;
    grid: {
        containerGap: string;
        columnGap: string;
    },
    backgroundColor: string;
    breakingpoints: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    },
  }
}
