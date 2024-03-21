import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

.notosanskr * { 
 font-family: 'Noto Sans KR', sans-serif;
}

${reset}

*{
  box-sizing: border-box;
  text-shadow: 0px 0px 0px rgba(0,0,0,0.05);
  letter-spacing: -0.5px;
  text-decoration: none;
}

`

export default GlobalStyle;