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
const Detail=styled.div`
  display:flex;
  align-items:center;
  margin-top:20px;
  input{
    margin-right:15px;
  }
  `;


function SignUp(){
  const thisYear=new Date().getFullYear();
  const {register,handleSubmit,errors,formState,getValues}=useForm({
    mode:"OnChange",
  });
  return (
    <AuthLayout>
        <ServiceName>어딨지?</ServiceName>
        <FormBox>
          <h2>회원가입</h2>
          <form>
          <TextInput ref={register({
            required:"ID is required."
          })} name="id" type="text" placeholder="아이디를 입력해 주세요."/>
          <TextInput ref={register({
            required:"password is required."
          })} name="password" type="password" placeholder="비밀번호를 입력해 주세요."/>
          <TextInput ref={register({
            required:"Password Check is required.",
          })} name="passwordCheck" type="passwordCheck" placeholder="비밀번호를 한번 더 입력주세요."/>
          <TextInput ref={register({
            required:"username is required."
          })} name="username" type="text" placeholder="이름을 입력해 주세요."/>
          <TextInput ref={register({
            required:"nickName is required."
          })} name="nickName" type="text" placeholder="사용할 닉네임을 입력해 주세요."/>
          <TextInput ref={register({
            required:"phoneNumber is required."
          })} name="phoneNumber" type="text" placeholder="휴대폰 번호를 입력해 주세요.(숫자만)"/>
          <Detail>
            <label for="male">남자</label>
            <input name="radio" type="radio" id="male" value="male" checked="checked" />
            
            <label for="female">여자</label>
            <input name="radio" type="radio" id="female" value="female" />
            <input type="text" placeholder="태어난 연도 4자리" />
          </Detail>
         
        
          
          <FormBtn type="submit" value="가입하기"/>
         
          </form>
         
        </FormBox>
      
    </AuthLayout>

  );
}


export default SignUp;
