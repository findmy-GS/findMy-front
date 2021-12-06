import React from "react";
import { shadow } from '../styles';
import styled from "styled-components";
import Map from '../components/map/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {SelectButton} from "../components/shared";
const Container=styled.div`
   display:flex;
   align-items: center;
   justify-content: center;
   flex-direction:column;
`;
const Wrapper=styled.div`
  max-width:1080px;
  width:90%;
 
 
`;
const MapCointainer=styled.div`
  width:100%;
  height:80vh;
  max-height:500px;
 
`;

function Home(){
  
  return (
    <Container>
      <Wrapper>
      <SelectButton name="markerFilter" id="filter">
        <option value="all">모두 보기</option>
        <option value="lost">분실물</option>
        <option value="found">습득물</option>
      </SelectButton>
      <MapCointainer>
      <Map />
      </MapCointainer>
      </Wrapper>
    </Container>
  );
}

export default  Home;