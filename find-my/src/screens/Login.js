import React from "react";
import styled from "styled-components";

const AuthLayout=styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;
const Wrapper=styled.div`
  max-width: 350px;
  width: 100%;
  
`;
const Title=styled.h1`
  text-align: center;
`;
const FormBox=styled.div`
  
  background-color: white;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color:white;

`;

function Login(){
  return (
    <AuthLayout>
      <Wrapper>
        <Title>어딨지?</Title>
        <FormBox>
          <h2>로그인</h2>
          <input/>
          <input/>
          <input/>
          <button/>
        </FormBox>
      </Wrapper>
    </AuthLayout>

  );
}


export default Login;
