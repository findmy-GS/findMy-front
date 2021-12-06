import styled from "styled-components";

const Container=styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const Wrapper=styled.div`
  max-width: 550px;
  width: 100%;
  
`;

function AuthLayout({children}){
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
export default AuthLayout;