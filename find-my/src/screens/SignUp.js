import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import {FormBox,TextInput,FormBtn} from "../components/auth/Form";
import FormError from"../components/auth/FormError";
import {colors} from "../styles";
import ServiceName from "../components/shared";
import routes from '../routes';
import {useForm} from "react-hook-form";
import { gql, useMutation } from '@apollo/client';

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
  justify-content:space-around;
  margin-top:20px;
  width:60%;
 
`;

/*
const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

`;*/

function SignUp(){

  const {register,handleSubmit,errors,formState,getValues,setError,clearErrors}=useForm({
    mode:"OnChange",
  });
  /*
  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return;
    }
    history.push(routes.home,{message:"Account created. Please log in.",username,password});
  };
  }*/
  const onSubmitValid=(data)=>{
    console.log("lalalal");
    const {id,password,username,nickName,phoneNumber,gender,year}=getValues();
    //signUp({variables:{username,password}});
   
    console.log({id,password,username,nickName,phoneNumber,gender,year});
  }
  const clearSignUpError=()=>clearErrors("result");
  return (
    <AuthLayout>
        <ServiceName>어딨지?</ServiceName>
        <FormBox>
          <h2>회원가입</h2>
          <form onSubmit={handleSubmit(onSubmitValid)}>
          <TextInput ref={register({
            required:"아이디를 입력하세요."
          })} name="id" type="text" placeholder="아이디"  onChange={clearSignUpError} hasError={Boolean(errors?.id?.message)}/>
          <FormError message={errors?.id?.message}/>
          <TextInput ref={register({
            required:"비밀번호를 입력해 주세요.",
            minLength:{
              value:6,
              message:"비밀번호는 6자 이상이어야 합니다."
            }
          })} name="password"  hasError={Boolean(errors?.password?.message)} onChange={clearSignUpError} type="password" placeholder="비밀번호"/>
          <FormError message={errors?.password?.message}/>
          <TextInput ref={register({
            required:"이름을 입력해주세요."
          })} name="username"  hasError={Boolean(errors?.username?.message)} onChange={clearSignUpError} type="text" placeholder="이름"/>
           <FormError message={errors?.username?.message}/>
          <TextInput ref={register({
            required:"닉네임을 입력해주세요."
          })} name="nickName"  hasError={Boolean(errors?.nickName?.message)} onChange={clearSignUpError} type="text" placeholder="닉네임"/>
          <FormError message={errors?.nickName?.message}/>
          <TextInput ref={register({
            required:"휴대폰 번호를 입력해주세요"
          })} name="phoneNumber"  hasError={Boolean(errors?.phoneNumber?.message)}type="text"onChange={clearSignUpError} placeholder="휴대폰 번호(숫자만)"/>
          <FormError message={errors?.phoneNumber?.message}/>
        
          <select {...register("gender", { required: true })}>
            <option value="male">남자</option>
            <option value="female">여자</option>
          </select>
            <input ref={register({
            required:"태어난 연도를 입력해주세요."
            })}  name="year" hasError={Boolean(errors?.year?.message)} type="text" onChange={clearSignUpError} placeholder="태어난 연도 8자리" />
         
         
          <FormError message={errors?.year?.message}/>
         
        
          
          <FormBtn type="submit" value="가입하기"/>
         
          </form>
         
        </FormBox>
      
    </AuthLayout>

  );
}


export default SignUp;
