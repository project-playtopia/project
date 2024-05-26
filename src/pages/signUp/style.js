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

S.Form = styled.form`
    width: 100%;
    height: 100%;
`

S.FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px; 
  position: absolute;
  top: 20%;
`;


S.IdInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin: 30px 0;
`;

S.Input = styled.input`
  flex-grow: 1; 
  height: 60px;
  border: solid 1px #000000;
  border-radius: 50px;
`;

S.Button = styled.button`
  width: 130px;
  height: 60px;
  border-radius: 50px;
  margin-left: 10px;
  color: ${ ({theme}) => theme.PALETTE.primary["main"]};
  background-color: #fff;
  border: solid 1px #1fb1d9; 
  cursor: pointer;
`;

S.PasswordContainer = styled.div`
  position: relative;
  width: 450px;
  height: 60px;
  margin: 40px 0;
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


S.Telecommunitacion = styled.select`
  width: 130px;
  height: 60px;
  border-radius: 50px;
  border: solid 1px  ${ ({theme}) => theme.PALETTE.primary["main"]};
  color: ${ ({theme}) => theme.PALETTE.primary["main"]};
  text-align-last: center;
`
S.IdentificationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px; 
  gap: 10px;
  margin: 30px 0;
`;

S.ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin: 30px 0;
`;

S.IdentificationButton = styled.button`
  width: 250px;
  height: 60px;
  border-radius: 50px;
  margin-left: 10px;
  color: ${ ({theme}) => theme.PALETTE.primary["main"]};
  background-color: #fff;
  border: solid 1px #1fb1d9; 
  cursor: pointer;
`;

S.RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px; 
  height: 300px;
  gap: 30px;
  margin-top: 20px;
  border: solid 1px #000000;
  border-radius : 50px;
  margin: 30px 0;
`;

S.LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  gap : 30px;
`;

S.LabelButton = styled.button`
border: none;
background-color: #fff;
color: #9F9F9F;
cursor: pointer;
`

S.Popup = styled.button`
border: none;
background-color: #fff;
color: #9F9F9F;
cursor: pointer;
position: absolute;
right: 10px;
top: 10px;
`

S.H5 = styled.h5`
  font-size: ${ ({theme}) => theme.FONT_SIZE["h5"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["semibold"]};
  color: #000000;
  margin-bottom : 10px;
`;

S.SubmitButton = styled.button`
  width: 220px;
  height: 60px;
  border-radius: 50px;
  margin-left: 10px;
  color: #fff;
  font-size: 18px;
  background-color: ${ ({theme}) => theme.PALETTE.primary["main"]}; 
  border: none;
  cursor: pointer;
  margin-bottom: 10%;
`

S.CancleButton = styled.button`
  width: 220px;
  height: 60px;
  border-radius: 50px;
  margin-left: 10px;
  color: #000;
  font-size: 18px;
  background-color: ${ ({theme}) => theme.PALETTE.sub["sub_soft"]};
  border: none;
  cursor: pointer;
`

S.ErrorMessge = styled.div`
margin-top: 8px;
margin-left: 15px;
color: red;
font-size: 13px;
`



export default S;