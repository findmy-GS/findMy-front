import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import {FormBox,TextInput,FormBtn} from "../components/auth/Form";
import FormError from"../components/auth/FormError";
import ServiceNameWrapper from"../components/auth/ServiceNameWrapper";
import {colors} from "../styles";
import {ServiceName} from "../components/shared";
import routes from '../routes';
import {useForm} from "react-hook-form";
import { gql, useMutation } from '@apollo/client';
import {useHistory} from "react-router-dom";

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


const Sign_Up_MUTATION = gql`
  mutation SignUp(
    $email: String!
    $password: String!
  ) {
    signUp(
      email: $email
      password: $password
    ) 
  }
`;



function SignUp(){
  const history=useHistory();
  const {register,handleSubmit,errors,formState,getValues,setError,clearErrors}=useForm({
    mode:"OnChange",
  });
  
  const onCompleted = (data) => {
   if(data){
    history.push(routes.home,{message:"Account created. Please log in."});
   }
  
  };
  const [signUp,{loading}]=useMutation( Sign_Up_MUTATION,{
    onCompleted,
  });
  const onSubmitValid=(data)=>{
   
   
    const {email,password,username,nickName,phoneNumber,gender,year}=getValues();
    console.log(email,password);
    signUp({variables:{email,password}});
  }
  const clearSignUpError=()=>clearErrors("result");
  return (
    <AuthLayout>
         <ServiceNameWrapper>
        <ServiceName to={routes.home} pxSize="70px">어딨지?</ServiceName>
        </ServiceNameWrapper>
        <FormBox>
          <h2>회원가입</h2>
          <form onSubmit={handleSubmit(onSubmitValid)}>
          <TextInput ref={register({
            required:"이메일을 입력하세요."
          })} name="email" type="text" placeholder="이메일"  onChange={clearSignUpError} hasError={Boolean(errors?.id?.message)}/>
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
          <Detail>
          <select ref={register({ required: true })} name="gender">
            <option value="male">남자</option>
            <option value="female">여자</option>
          </select>
            <input ref={register({
            required:"태어난 연도를 입력해주세요."
            })}  name="year" hasError={Boolean(errors?.year?.message)} type="text" onChange={clearSignUpError} placeholder="태어난 연도 8자리" />
          </Detail>
         
          <FormError message={errors?.year?.message}/>
         
        
          
          <FormBtn type="submit" value="가입하기"/>
         
          </form>
         
        </FormBox>
      
    </AuthLayout>

  );
}


export default SignUp;
