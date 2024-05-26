import styled from 'styled-components';
const S = {};

S.Background = styled.div`
  width: 90%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto ;
  flex-direction: column;
`;


S.H1 = styled.h1`
  font-size: ${ ({theme}) => theme.FONT_SIZE["h1"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["bold"]};
  color: #000000;
  margin-top: 15%;
  margin-bottom: 10%;
`;

S.P = styled.p`
font-size:${ ({theme}) => theme.FONT_SIZE["default"]};
font-weight: ${({theme})=> theme.FONT_WEIGHT["regular"]};
text-align: center;
`

S.ResultP = styled.p`
font-size:${ ({theme}) => theme.FONT_SIZE["default"]};
font-weight: ${({theme})=> theme.FONT_WEIGHT["semibold"]};
text-align: center;
margin: 20%;
`

S.SubP = styled.p`
font-size:${ ({theme}) => theme.FONT_SIZE["sub"]};
font-weight: ${({theme})=> theme.FONT_WEIGHT["thin"]};
text-align: center;
`

S.IdSearchContainer = styled.div`
display: flex;
flex-direction : column;
justify-content: center;
margin-top: 100px;
height: 500px;
width: 60%;
border: solid 1px ${ ({theme}) => theme.PALETTE.primary["main"]};
margin-bottom: 50px;
border-radius: 50px;
@media (max-width: 727px) {
    width : 90%;
    margin-top: 10%;
  }
`


S.Input = styled.input`
  width: 500px;
  height: 60px;
  border: solid 1px #000000;
  border-radius: 50px;
  @media (max-width: 727px) {
    width : 90%;
    margin-top: 10%;
  }
`;


S.SubmitButton = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 50px;
  margin-left: 10px;
  color: ${ ({theme}) => theme.PALETTE.primary["main_lighten"]};
  font-size: 18px;
  border: solid 2px ${ ({theme}) => theme.PALETTE.primary["main_lighten"]};
  background-color: #fff;
  cursor: pointer;
  margin-top: 5%;
  margin-bottom: 30px;
  @media (max-width: 727px) {
    width : 60%;
    margin-top: 15%;
  }
`
S.LoginButton = styled.button`
  margin-top: 3%;
  margin-bottom: 10%;
  width: 400px;
  height: 50px;
  border-radius: 50px;
  color: #fff;
  background-color: ${({ theme }) => theme.PALETTE.primary["main"]};
  border: solid 1px #1fb1d9;
  cursor: pointer;
  font-size: ${({theme}) => theme.FONT_SIZE["default"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["regular"]};
  @media (max-width: 727px) {
    width : 200px;
    margin-top: 15%;
  }
`;
export default S;