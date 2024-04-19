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
  flex-direction: column;
`;

S.Image = styled.img`
  width: 600px;
  height: 170px;
`

S.P = styled.p`
font-size: ${({theme}) => theme.FONT_SIZE["default"]};
font-weight: ${({theme})=> theme.FONT_WEIGHT["regular"]};
text-align: center;
margin-top: 5%;
line-height: 1.5;
`

S.Button = styled.button`
  margin-top: 15%;
  width: 400px;
  height: 50px;
  border-radius: 50px;
  color: #fff;
  background-color: ${({ theme }) => theme.PALETTE.primary["main"]};
  border: solid 1px #1fb1d9;
  cursor: pointer;
  font-size: ${({theme}) => theme.FONT_SIZE["default"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["regular"]};
`;


export default S;