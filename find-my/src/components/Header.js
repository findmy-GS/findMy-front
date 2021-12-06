import styled from "styled-components";
import React,{useState,useRef} from "react";
import {ServiceName} from "./shared";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell,faSearch } from '@fortawesome/free-solid-svg-icons'
import {colors} from "../styles";
import useDetectOutsideClick from "../hooks/useDetectOutsideClick";
const SHeader=styled.header`
  background-color: white;
  width:100%;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  display:flex;
  align-items:center;
  justify-content: center;
`;
const Wrapper=styled.div`
  max-width:1080px;
  padding:10px;
  width:100%;
  display:flex;
  align-items:center;
 
`;
const Navbar=styled.div`
  width:100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const Column=styled.div`
  display:flex;
  align-items:center;
`;

const ColumnLeft=styled(Column)`
 div{
   padding:0px 30px;
 }
  
`;
const ColumnRight=styled(Column)`
 div{
   padding:10px;
 }
 form{
   margin-right:10px;
   padding:5px;
 }

`;
const SearchForm=styled.form`

  display:flex;
  align-items:center;
  background-color:${colors.bodyColor};
  border-radius:50px;
  box-shadow:${(props)=>(props.isClicked ?  "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" :"none")};
  border: 1px solid ${(props)=>(props.isClicked ?"rgb(220,220,220)":"inherit")};

  button{
    color:${colors.mainColor};
    font-size:20px;

  }
  
  input{
    all: unset;
    margin-left:10px;

    
  }
`;
/*  margin-left:40px; */
const Notice=styled.div`
  font-size:20px;
  opacity:0.4;
  &:hover{
    opacity:0.8;
  }
`;

function Header(){
  const formRef=useRef();

  const [isClicked,setClickState]=useState(false);
  useDetectOutsideClick(formRef,setClickState);
  console.log(isClicked);
   return (
   <SHeader>
     <Wrapper>
     <ServiceName to="/" pxSize="35px">어딨지?</ServiceName>
      <Navbar>
      <ColumnLeft>
        <div>분실물</div>
        <div>유실물</div>
      </ColumnLeft>
      <ColumnRight>
        <SearchForm ref={formRef} isClicked={isClicked} >
          <input onClick={()=>setClickState(true)}  type="search" placeholder="분실물 검색" name="search"/>
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </SearchForm>
        <Notice>
          <FontAwesomeIcon icon={faBell} />
        </Notice>
        <div>😮</div>
      </ColumnRight>
      </Navbar>
    </Wrapper>
   </SHeader>
   );
}
export default Header;

