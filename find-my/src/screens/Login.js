import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Google from "../assets/brandLogo/google.svg";
import Naver from "../assets/brandLogo/naverpng.png";
import Kakao from "../assets/brandLogo/kakao.svg";
import AuthLayout from "../components/auth/AuthLayout";
import ServiceNameWrapper from"../components/auth/ServiceNameWrapper";
import {FormBox,TextInput,FormBtn} from "../components/auth/Form";
import {colors} from "../styles";
import {ServiceName} from "../components/shared";
import routes from '../routes';
import {useForm} from "react-hook-form";
import FormError from "../components/auth/FormError";
import { gql, useMutation } from '@apollo/client';
import {logUserIn} from "../apollo";
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

const Login_MUTATION=gql`
  mutation Login($email:String!,$password:String!){
    login(email:$email,password:$password)
  }
`;


function Login(){
  const {register,handleSubmit,errors,formState,getValues,setError,clearErrors}=useForm({
    mode:"onChange",
  });
 const onCompleted=(data)=>{
   if(data.login!=="login failed"){
      const token=data.login;
      console.log(token);
     logUserIn(token);
   };

 }
  const [login,{loading}]=useMutation( Login_MUTATION,{
    onCompleted,
  });
 
 
  const onSubmitValid=(data)=>{
    const {email,password}=getValues();
    login({variables:{email,password}});
    console.log("lalalal");
    console.log({email,password});
  }
  const clearLoginError=()=>clearErrors("result");
  return (
    <AuthLayout>
    <ServiceNameWrapper>
     <ServiceName to={routes.home} pxSize="70px">어딨지?</ServiceName>
     </ServiceNameWrapper>
        <FormBox>
          <h2>로그인</h2>
          <form onSubmit={handleSubmit(onSubmitValid)}>
          <TextInput ref={register({required:"이메일을 입력하세요."})} name="email"  hasError={Boolean(errors?.id?.message)} type="text" placeholder="아이디"/>
          <FormError message={errors?.id?.message}/>
          <TextInput ref={register({required:"비밀번호를 입력하세요."})} name="password"  hasError={Boolean(errors?.password?.message)} type="password" placeholder="비밀번호"/>
          <FormError message={errors?.password?.message}/>
          <FormBtn type="submit" value="로그인"/>
         
          </form>
          <Links>
            <Link to={routes.findId}>아이디 찾기</Link>
            <div></div>
            <Link to={routes.findPassword}>비밀번호 찾기</Link>
            <div></div>
            <Link to={routes.signUp}>회원가입</Link>
          </Links>
          <span>SNS 로그인</span> 
          <IconBox>  
          
              <img src={Google}/>
              <img src={Naver}/>
              <img src={Kakao}/>
          </IconBox>  
        </FormBox>
      
    </AuthLayout>

  );
}


export default Login;
