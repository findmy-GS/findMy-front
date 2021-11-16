import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Google from "../assets/google.svg";
import Naver from "../assets/naverpng.png";
import Kakao from "../assets/kakao.svg";
import AuthLayout from "../components/auth/AuthLayout";
import {FormBox,TextInput,FormBtn} from "../components/auth/Form";
import {colors} from "../styles";
import ServiceName from "../components/shared";
import routes from '../routes';

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
function Login(){
  return (
    <AuthLayout>
     
        <ServiceName>어딨지?</ServiceName>
        <FormBox>
          <h2>로그인</h2>
          <form>
          <TextInput type="text" placeholder="아이디를 입력해 주세요."/>
          <TextInput type="password" placeholder="비밀번호를 입력해 주세요."/>
          <FormBtn type="submit" value="로그인"/>
         
          </form>
          <Links>
            <Link to="#">아이디 찾기</Link>
            <div></div>
            <Link to="#">비밀번호 찾기</Link>
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
