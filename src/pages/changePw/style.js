import styled from "styled-components";
const S = {};

S.Background = styled.div`
width: 90%;
height: 100vh;
background-color: #fff;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 0 auto ;
`;

S.H1 = styled.h1`
  font-size: ${ ({theme}) => theme.FONT_SIZE["h1"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["bold"]};
  color: #000000;
  margin-top: 10%;
`;

S.IdInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

S.Input = styled.input`
  flex-grow: 1; 
  height: 60px;
  border: solid 1px #000000;
  border-radius: 50px;
`;

S.PasswordContainer = styled.div`
  position: relative;
  width: 450px;
  height: 60px;
  /* margin: 40px 0; */
  margin-bottom: 30px;
`;

S.PasswordInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  border: solid 1px #000000; 
  margin-bottom: 30px;
`;

S.Icon = styled.div`
  position: absolute;
  top: 50%; 
  right: 15px; 
  transform: translateY(-50%); 
  cursor: pointer;
`;

S.ErrorMessge = styled.div`
margin-top: 8px;
margin-left: 15px;
color: red;
font-size: 13px;
`

// 기존의 S.SubmitButton 스타일에서 margin-left를 제거하고, 새로운 Container 스타일을 추가합니다.
S.SubmitButton = styled.button`
  width: 200px; // PX를 소문자로 수정
  height: 60px;
  border-radius: 50px;
  color: #fff;
  font-size: 18px;
  background-color: ${ ({theme}) => theme.PALETTE.primary["main"]};
  border: none;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 30px;
`;

S.ButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
`;






export default S;