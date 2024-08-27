import styled from "styled-components";

const S = {};

S.Background = styled.div`
  width: 90%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10%;
`;

S.H1 = styled.h1`
  font-size: ${ ({theme}) => theme.FONT_SIZE["h4"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["semibold"]};
  color: #000000;
  text-align: center;
  margin-top: 10%;
  margin-bottom: 2%;
`;

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

S.Image = styled.img`
  margin-top: 10%;
  width: 600px;
  height: 170px;
`


export default S;