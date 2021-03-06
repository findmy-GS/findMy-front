import styled from 'styled-components';
import {colors,shadow} from "../../styles";
const Container=styled.div`
  margin-top:20px;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color:white;
  padding:20px 0;
  border-radius:5px;
  box-shadow: ${shadow};
  h2{
    font-weight:600;
    font-size:20px;
    margin-bottom:10px;
  }
  form{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }

`;

export function FormBox({children}){
  return <Container>{children}</Container>
};

export const InputBase=styled.input`
  width: 60%;
  padding:10px;
 
  transition: border-color 0.2s ease-in;

`;
export const TextInput=styled(InputBase)`
  border-radius:3px;
  margin-top:10px;
  border:1px solid ${(props)=>(props.hasError?"red":"black")};
  &:focus{
    border-color:${colors.mainColor};
  }
`;
export const FormBtn=styled(InputBase)`
 
  text-align: center;
  background-color:${colors.mainColor};
  border-radius: 5px;
  margin-top:20px;
  color:white;
  font-weight:600;
  border:none;
 
`;
