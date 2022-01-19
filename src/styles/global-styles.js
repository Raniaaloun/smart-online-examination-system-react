import { createGlobalStyle } from 'styled-components';
import background from 'assets/creative.jpg';

const GlobalStyle = createGlobalStyle`
*,
  *::before,
  *::after {
    box-sizing: border-box;
  }

body {
  margin: 0;
  background-image: url(${background});
  background-size: cover;
} 
`;

export default GlobalStyle;
