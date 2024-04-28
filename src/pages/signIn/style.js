import styled from "styled-components";

const S = {};


S.Background = styled.div`
  width: 90%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto ;
`;

S.H1 = styled.h1`
  font-size: ${ ({theme}) => theme.FONT_SIZE["h1"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["bold"]};
  color: #000000;
  margin: 30px 0;
`;

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px; 
  position: absolute;
  top: 20%;
`;

S.P = styled.p`
font-size:${ ({theme}) => theme.FONT_SIZE["default"]};
font-weight: ${({theme})=> theme.FONT_WEIGHT["regular"]};
text-align: center;
`

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
`;

S.Icon = styled.div`
  position: absolute;
  top: 50%; 
  right: 15px; 
  transform: translateY(-50%); 
  cursor: pointer;
`;

S.SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  margin-left: 10px;
  color: #fff;
  font-size: 18px;
  background-color: ${ ({theme}) => theme.PALETTE.primary["main"]}; 
  border: none;
  cursor: pointer;
  margin-bottom: 30px;
`

S.SignInButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  margin-left: 10px;
  color: #000;
  font-size: 18px;
  background-color: ${ ({theme}) => theme.PALETTE.sub["sub_soft"]};
  border: none;
  cursor: pointer;
  margin-bottom: 10%;
`

export default S;