import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";


export const GlobalStyles=createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
  }
  a{
    text-decoration:none;
  }
  body{
    background-color:whitesmoke;
    font-size:15px;
    font-family:'Open Sans', sans-serif;
  }

`;