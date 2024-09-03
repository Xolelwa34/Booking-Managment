import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  nav ul li {
    display: inline;
    margin-right: 20px;
  }
`;

export default GlobalStyle;
