import { createGlobalStyle } from 'styled-components';
import background from 'assets/image.png';

const GlobalStyle = createGlobalStyle`
*,
  *::before,
  *::after {
    box-sizing: border-box;
  }

body {
  background-image: url(${background});
  margin: 0;
  background-repeat: no-repeat;
  background-size: 1366px;

} 
`;

export default GlobalStyle;
