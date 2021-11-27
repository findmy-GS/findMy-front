import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
export const colors={
  mainColor:"#74b9ff",
};
export const shadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
export const GlobalStyles=createGlobalStyle`
  ${reset}
  button{
    border:0;
    outline:0;
    background-color:inherit;
    &:hover{
      cursor:pointer;
    }
  }
  input:focus{
    outline:none;
    
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