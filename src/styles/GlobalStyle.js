import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
${reset}
body {
    padding: 0;
    margin: 0;
    font-family: 'Press Start 2P';
    color: ${({ theme }) => theme.defaultTextColor}
    background-color: ${({ theme }) => theme.defaultBackgroundColor}
  }
`;

export default GlobalStyle;
