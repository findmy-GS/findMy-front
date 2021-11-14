import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
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
 
`;
const FormBox=styled.div`
  
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color:white;
  padding:20px 0;
 
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
  margin-top:10px;

`;
const SignUpBtn=styled.button`
  
  width: 60%;
  padding:8px;
  border:2px solid #74b9ff;
  border-radius: 5px;
  margin-top:10px;
  text-align:center;

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

          <SignUpBtn>회원가입</SignUpBtn>
          </form>
         
        </FormBox>
      </Wrapper>
    </AuthLayout>

  );
}


export default Login;
