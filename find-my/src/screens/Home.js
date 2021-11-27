import React,{useEffect} from "react";
import { shadow } from '../styles';
import styled from "styled-components";
import MapContainer from '../components/map/MapContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faBars } from '@fortawesome/free-solid-svg-icons'
import {SelectButton} from "../components/shared";
const Container=styled.div`

`;
const UIBox=styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  width: 300px;
  height: 50px;
  background-color:white;
  padding:5px;
  border-radius: 30px;
  box-shadow: ${shadow};
  button{
    font-size:20px;
  }
`;
const SearchForm=styled.form`
  
  margin-left:10px;
  display:flex;
  align-items:center;
 
  button{
    opacity:0.3;
    font-size:20px;
  }
  input{
    
    all: unset;
  }
`;



function Home(){
  
  return (
    <Container>
      <UIBox>
        <button><FontAwesomeIcon icon={faBars} /></button>
        <SearchForm>
          <input type="search" placeholder="분실물 검색" name="search"/>
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </SearchForm>
      
      </UIBox>
     
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