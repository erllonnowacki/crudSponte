import { createGlobalStyle } from "styled-components";
// import styled from "styled-components";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, textarea {
    color: #6A6180;
    font-family: Barlow, 'sans-serif'
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  #root {
    width: 100%;
  }
`;
