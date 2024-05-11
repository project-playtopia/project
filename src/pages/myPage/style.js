import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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


S.ProfileBackground = styled.div`
margin-top: 10%;
width: 60%;
height: 400px;
background-color:  ${ ({theme}) => theme.PALETTE.primary["main_soft"]};
border-radius: 30px;
display: flex;
flex-direction: column;
align-items: center;
`

S.Deletebutton = styled.button`
color: #000;
background-color: ${ ({theme}) => theme.PALETTE.primary["main_soft"]};
font-size: ${({theme}) => theme.FONT_SIZE["sub"]};
font-weight: ${({theme})=> theme.FONT_WEIGHT["regular"]};
cursor: pointer;
border: none;
`


S.Icon = styled(FontAwesomeIcon)`

font-size: 150px; 
color: ${ ({theme}) => theme.PALETTE.primary["main_darken"]};
margin-top: 5%;
`;

S.UserP = styled.p`
font-size: ${({theme}) => theme.FONT_SIZE["h3"]};
font-weight: ${({theme})=> theme.FONT_WEIGHT["regular"]};
margin: 7% 0;
`
S.OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 40%; 
  margin-top: 20px; 
`;


S.ButtonsContainer = styled.div`
  width: 430px;
  height: 75px;
  border: solid 2px ${ ({theme}) => theme.PALETTE.primary["main_lighten"]};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; 
  margin-top: 5%;
`;

S.OptionButton = styled.button`
  width: 180px;
  height: 60px;
  background-color: ${({ selected }) => (selected ? '#1FB1D9' : '#fff')}; 
  border: none;
  border-radius: 50px;
  cursor: pointer;
  & p{
    color:${({ selected }) => (selected ? '#fff' : '#000')};
    font-size: ${({theme}) => theme.FONT_SIZE["default"]};
    font-weight: ${({theme})=> theme.FONT_WEIGHT["regular"]};
  }
`;

S.ButtonLine = styled.div`
width: 2px;
height:30px;
background-color: ${ ({theme}) => theme.PALETTE.primary["main_lighten"]};
`


S.StyledTable = styled.table`
  width: 85%;
  margin-top: 5%;
`;


S.StyledTRTop = styled.tr`
background-color:  ${ ({theme}) => theme.PALETTE.primary["main_soft"]};
height: 60px;
width: 80%;
text-align: center;
line-height: 60px;`

S.styledTR = styled.td`
height: 60px;
text-align: center;
line-height: 60px;
border-top: solid 1px #000;
border-bottom: solid 1px #000;
`
S.StyledLeftTD = styled.td`
border-radius: 30px 0 0 0;
`

S.styledTD = styled.td`
height: 60px;
text-align: center;
line-height: 60px;
`


S.StyledRightTD = styled.td`
border-radius: 0 30px 0 0;
`



export default S;