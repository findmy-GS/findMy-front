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
    $name:String!
    $nickname:String!
    $birth:Int!
    $gender:String!
    $phoneNumber:String!
  ) {
    signUp(
      email: $email
      password: $password
      name:$name
      nickname:$nickname
      birth:$birth
      gender:$gender
      phoneNumber:$phoneNumber

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
   
   
    const {email,password,name,nickname,birth,gender,phoneNumber}=getValues();
   
    signUp({variables:{email,password,name,nickname,birth:parseInt(birth),gender,phoneNumber}});
  }
  const clearSignUpError=()=>clearErrors("result");
  return (
    <AuthLayout>
         <ServiceNameWrapper>
        <ServiceName to={routes.home} pxSize="70px">??????????</ServiceName>
        </ServiceNameWrapper>
        <FormBox>
          <h2>????????????</h2>
          <form onSubmit={handleSubmit(onSubmitValid)}>
          <TextInput ref={register({
            required:"???????????? ???????????????."
          })} name="email" type="text" placeholder="?????????"  onChange={clearSignUpError} hasError={Boolean(errors?.id?.message)}/>
          <FormError message={errors?.email?.message}/>
          <TextInput ref={register({
            required:"??????????????? ????????? ?????????.",
            minLength:{
              value:6,
              message:"??????????????? 6??? ??????????????? ?????????."
            }
          })} name="password"  hasError={Boolean(errors?.password?.message)} onChange={clearSignUpError} type="password" placeholder="????????????"/>
          <FormError message={errors?.password?.message}/>
          <TextInput ref={register({
            required:"????????? ??????????????????."
          })} name="name"  hasError={Boolean(errors?.name?.message)} onChange={clearSignUpError} type="text" placeholder="??????"/>
           <FormError message={errors?.name?.message}/>
          <TextInput ref={register({
            required:"???????????? ??????????????????."
          })} name="nickname"  hasError={Boolean(errors?.nickName?.message)} onChange={clearSignUpError} type="text" placeholder="?????????"/>
          <FormError message={errors?.nickname?.message}/>
          <TextInput ref={register({
            required:"????????? ????????? ??????????????????"
          })} name="phoneNumber"  hasError={Boolean(errors?.phoneNumber?.message)}type="text"onChange={clearSignUpError} placeholder="????????? ??????(?????????)"/>
          <FormError message={errors?.phoneNumber?.message}/>
          <Detail>
          <select ref={register({ required: true })} name="gender">
            <option value="male">??????</option>
            <option value="female">??????</option>
          </select>
            <input ref={register({
            required:"????????? ????????? ??????????????????."
            })}  name="birth" hasError={Boolean(errors?.birth?.message)} type="text" onChange={clearSignUpError} placeholder="????????? ?????? 8??????" />
          </Detail>
         
          <FormError message={errors?.year?.message}/>
         
        
          
          <FormBtn type="submit" value="????????????"/>
         
          </form>
         
        </FormBox>
      
    </AuthLayout>

  );
}


export default SignUp;
