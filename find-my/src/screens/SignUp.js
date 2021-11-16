import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import {FormBox,TextInput,FormBtn} from "../components/auth/Form";
import {colors} from "../styles";
import ServiceName from "../components/shared";
import routes from '../routes';
import {useForm} from "react-hook-form";

const Links=styled.div`
  display:flex;
  font-size:12px;
  margin:10px 0px 15px;
  div{
    margin:0px 10px;
    width:1.5px;
    background-color:${colors.mainColor};
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
function SignUp(){
  const thisYear=new Date().getFullYear();
  return (
    <AuthLayout>
     
        <ServiceName>어딨지?</ServiceName>
        <FormBox>
          <h2>회원가입</h2>
          <form>
          <TextInput type="text" placeholder="아이디를 입력해 주세요."/>
          <TextInput type="password" placeholder="비밀번호를 입력해 주세요."/>
          <TextInput type="password" placeholder="비밀번호를 한번 더 입력주세요."/>
          <TextInput type="text" placeholder="이름을 입력해 주세요."/>
          <TextInput type="text" placeholder="사용할 닉네임을 입력해 주세요."/>
          <TextInput type="text" placeholder="숫자만 입력해 주세요."/>
          <select>
            <option value="male">남자</option>
            <option value="female">여자</option>
          </select>
         
          <FormBtn type="submit" value="가입하기"/>
         
          </form>
         
        </FormBox>
      
    </AuthLayout>

  );
}


export default SignUp;
