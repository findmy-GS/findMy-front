import React,{useEffect} from "react";
import { shadow } from '../styles';
import styled from "styled-components";
import MapContainer from '../components/map/MapContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {SelectButton} from "../components/shared";
const Container=styled.div`

`;


function Home(){
  
  return (
    <Container>

      <SelectButton name="markerFilter" id="filter">
        <option value="all">모두 보기</option>
        <option value="lost">분실물</option>
        <option value="found">습득물</option>
      </SelectButton>
     
      <MapContainer />
    </Container>
  );
}

export default  Home;