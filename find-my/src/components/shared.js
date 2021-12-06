import styled from 'styled-components';
import {Link} from "react-router-dom";
import {colors} from "../styles";


export const ServiceName=styled(Link)`
 text-align: center;
 font-family: 'Hi Melody', cursive;
 font-size:${(props)=>props.pxSize};
 white-space : nowrap; 
color:${colors.mainColor};
`;



export const SelectButton=styled.select`
    width: 150px; /* 원하는 너비설정 */
  
    padding: 5px; /* 여백으로 높이 설정 */
    font-family: inherit;  /* 폰트 상속 */
    background: url('이미지 경로') no-repeat 95% 50%; /* 네이티브 화살표를 커스텀 화살표로 대체 */
    border: 1px solid #999;
    border-radius: 0px; 
    //background: url(이미지 경로) no-repeat 95% 50%;  /* 화살표 모양의 이미지 */
    -webkit-appearance: none;  /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
`;




