import styled from "styled-components";
const S = {};


S.Background = styled.div`
  width: 90%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10%;
`;

S.H1 = styled.h1`
  font-size: ${ ({theme}) => theme.FONT_SIZE["h1"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["bold"]};
  color: #000000;
  text-align: center;
  margin-top: 10%;
  margin-bottom: 5%;
`;

S.CostWrapper = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  border-bottom: solid 2px ${({theme})=> theme.PALETTE.primary["main"]};
`

S.costboxtop = styled.div`
width: 100%;
height: 30%;
background-color: ${({theme})=> theme.PALETTE.primary["main_soft"]};
border-radius: 30px 0 0 0;
border-bottom: solid 2px ${({theme})=> theme.PALETTE.primary["main"]};
`
S.line = styled.div`
width: 2px;
height: 100%;
background-color: ${({theme})=> theme.PALETTE.primary["main"]} ;
position: absolute;
left: 50%;
`


export default S;
