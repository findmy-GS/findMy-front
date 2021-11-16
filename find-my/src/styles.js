import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
export const colors={
  mainColor:"#74b9ff",
};

export const GlobalStyles=createGlobalStyle`
  ${reset}
  input,button {
    all:unset;
  }
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