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
  height:90vh;
  max-height:500px;
 
`;
const MarekerFilter=styled.div`
  display:flex;
 
  button {
  appearance: none;
  background-color: transparent;
  border: 2px solid yellow;
  border-radius: 0.6em;
  color: yellow;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding:10px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  &:hover,
  &:focus {
    color: black;
    outline: 0;
  }
  
  border-color: yellow;
  color: black;
  background: {
    image: linear-gradient(45deg,yellow 50%, transparent 50%);
    position: 100%;
    size: 400%;
  }
  transition: background 300ms ease-in-out;
  
  &:hover {
    background-position: 0;
  }

}

`;
function Home(){
  
  return (
    <Container>
      <Wrapper>
      <MarekerFilter name="markerFilter" id="filter">
        <button value="all">모두 보기</button>
        <button value="lost">분실물</button>
        <button value="found">습득물</button>
      </MarekerFilter>
      <MapCointainer>
      <Map />
      </MapCointainer>
      </Wrapper>
    </Container>
  );
}

export default  Home;