import styled from "styled-components";

const S = {};

S.CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.StyledHeader = styled.div`
  margin-top: 100px;
  font-size: 50px;
  height: 131px;
  background-color: #D7F2FF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

S.StyledHeaderBox = styled.div`
  margin-top: 30px;
  border-bottom: 1px solid #97D9FA;
  width: 90%; 
  max-width: 900px;
  padding: 10px;
`;


S.subp =styled.p`
    color: #FE78C0;
`

S.buttonbox = styled.div`
     display: flex;
  justify-content: center;
  align-items: center;
`

S.contentbox = styled.div`
    display: flex;
`
S.category = styled.select`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  width: 300px;
  height: 40px;
  margin-top: 20px;
`


S.inputbox = styled.div`
    display: flex;
  justify-content: center;
  align-items: center; 
  
`

S.StyledInput = styled.input`
  border: 1px solid #1FB1D9;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0px; 
  width: 300px;
  height: 40px;
  box-sizing: border-box;
`;

S.headerp = styled.p`
    padding-bottom: 10px;
`

S.subtitle = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
     
`

export default S;