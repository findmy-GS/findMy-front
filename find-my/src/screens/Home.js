import React,{useEffect} from "react";

import styled from "styled-components";
import KakaoMapScript from '../mapApi';

const Container=styled.div`
   width:50px;
   height:400px;
`;



function Home(){

  useEffect(()=>{
    KakaoMapScript();
  },[]);
  return (
    <Container>

    </Container>
  );
}

export default  Home;