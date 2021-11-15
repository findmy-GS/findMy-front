import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Google from "../assets/google.svg";
import Naver from "../assets/naverpng.png";
import Kakao from "../assets/kakao.svg";

const AuthLayout=styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;
const Wrapper=styled.div`
  max-width: 550px;
  width: 100%;
  
`;
const Title=styled.h1`
 font-weight:600;
 font-size:20px;
 margin-bottom:10px;

`;
const FormBox=styled.div`
  
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color:white;
  padding:20px 0;
  border-radius:10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  form{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }

`;
const ServiceName=styled.h1`
 text-align: center;
 font-family: 'Hi Melody', cursive;
 font-size:60px;
 margin-bottom:20px;
color: #74b9ff;
`;


const InputBase=styled.input`
  width: 60%;
  padding:10px;

`;
const Input=styled(InputBase)`
  
  border-bottom:1px solid black;
  margin-top:20px;

`;
const FormBtn=styled(InputBase)`
  text-align: center;
  background-color: #74b9ff;
  border-radius: 5px;
  margin-top:20px;
  color:white;
  font-weight:600;
 
`;
const SignUpBtn=styled.button`
  font-weight:600;
  color:#74b9ff;
  width: 60%;
  padding:8px;
  border:2px solid #74b9ff;
  border-radius: 5px;
  margin:10px 0px;
  text-align:center;


`;
const Links=styled.div`
  display:flex;
  font-size:12px;
  margin:10px 0px 15px;
  div{
    margin:0px 5px;
    width:2px;
    background-color:gray;
  }
`;


const IconBox=styled.div`
  margin-top:10px;
  display:flex;
  img{
    width:30px;
    height:30px;
    margin-right:10px;
  }

`;
function Login(){
  return (
    <AuthLayout>
      <Wrapper>
        <ServiceName>어딨지?</ServiceName>
        <FormBox>
          <Title>로그인</Title>
          <form>
          <Input type="text" placeholder="아이디를 입력해 주세요."/>
          <Input type="password" placeholder="비밀번호를 입력해 주세요."/>
          <FormBtn type="submit" value="로그인"/>
         
          </form>
          <Links>
            <Link to="#">아이디 찾기</Link>
            <div></div>
            <Link to="#">비밀번호 찾기</Link>
            <div></div>
            <Link to="#">회원가입</Link>
          </Links>
          <span>SNS 로그인</span> 
          <IconBox>  
          
              <img src={Google}/>
              <img src={Naver}/>
              <img src={Kakao}/>
          </IconBox>  
        </FormBox>
      </Wrapper>
    </AuthLayout>

  );
}


export default Login;
