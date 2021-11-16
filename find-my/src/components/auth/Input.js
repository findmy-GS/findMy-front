import styled from 'styled-components';
const FormBox=styled.div`
  
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color:white;
  padding:20px 0;
  border-radius:5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  form{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }

`;

function FormBox({children}){
  return <Container>{children}</Container>
}
export default FormBox;