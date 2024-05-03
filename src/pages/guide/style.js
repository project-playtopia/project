import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const S = {};

const mainDarkenColor = ({theme}) => theme.PALETTE.primary.main_darken;
const mainColor = ({theme}) => theme.PALETTE.primary.main;
const mainSoft = ({theme}) => theme.PALETTE.primary.main_soft;

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
  font-size: ${ ({theme}) => theme.FONT_SIZE["h1"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["bold"]};
  color: #000000;
  text-align: center;
  margin-top: 10%;
  margin-bottom: 2%;
`;

S.H3 = styled.h3`
  font-size: ${ ({theme}) => theme.FONT_SIZE["h3"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["bold"]};
  color: #000000;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 2%;
`;

S.NavParkSelector = styled.nav`
	font-size: 18px !important;
	width: 100%;
	text-align: center;
  margin-top: 2%;
	margin-bottom: 3%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	& * {
		margin: 0 0.5rem;
		color: #000;
	}

  & p{
    font-size : 18px;
  }

	& *:hover {
		color: ${mainDarkenColor};
		font-weight: 500;
	}

	& .active {
		color: ${mainColor};
		font-weight: 600;
	}
`;

S.BusinessHour = styled.div`
  width: 100%;
  height: 95px;
  background-color: ${mainSoft};
  display: flex; 
  justify-content: center; 
  align-items: center; 
  & p{
    color : ${mainDarkenColor};
    font-size : ${ ({theme}) => theme.FONT_SIZE["h1"]};
    font-weight:${({theme})=> theme.FONT_WEIGHT["bold"]};
    text-align: center;
  }
`

S.line = styled.div`
  width: 500px;
  height: 1px;
  background-color: ${mainColor} ;
  /* position: absolute;
  top: 110%; */
`
S.parkboxtop = styled.div`
  width: 340%;
  height: 100px;
  background-color: ${mainSoft};
  border-radius: 30px 30px 0 0;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  & p{
      color : #000000;
      font-size : ${ ({theme}) => theme.FONT_SIZE["h5"]};
      font-weight:${({theme})=> theme.FONT_WEIGHT["bold"]};
      text-align: center;
    } 

`


S.StyledTable = styled.table`
  width: 85%;
  margin: auto;
`;


S.StyledTd = styled.td`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100px"};
  background-color: #fff; 
  text-align: center;
  font-size: 18px;
  padding: 5px;
  border-top: none;
  border-bottom: solid 1.75px ${mainColor};
  border-right: solid 1.75px ${mainColor};
  border-left: solid 1.75px ${mainColor};;
  position: relative;

  & p {
    position: absolute;
    top: 45%;
    left: 30%;
    text-align: center;
  }
  & .buyticket{
    position: absolute;
    top: 45%;
    left: 20%;
  }
  & .parkhour{
    position: absolute;
    top: 30%;
  }
`;



S.footerP = styled.p`
      color : #000000;
      font-size : ${ ({theme}) => theme.FONT_SIZE["footer"]};
      font-weight:${({theme})=> theme.FONT_WEIGHT["thin"]};
      margin-bottom: 50px;
      text-align: left;
      margin-right: 43%;
`;

S.Icon = styled(FontAwesomeIcon)`
margin: 15px;
font-size: 35px; 
color: ${mainColor};
`;

S.Facility = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1 {
    display: flex;
    justify-content: space-between; /* h1 내부 요소들을 양 끝으로 분산 배치 */
    width: 100%; /* h1을 S.Facility의 전체 너비로 확장 */
  }

  & p {
    margin-left: 20px;
  }

  & .facilityContent {
    height: 80%;
    width: 100px;
    text-align: center;
    border: solid 2px ${mainColor};
    border-radius: 35px;
    margin-left: auto; /* 왼쪽 마진을 자동으로 설정하여 오른쪽으로 이동 */
    display: flex;
    align-items: center; /* 내용을 수직 중앙으로 정렬 */
    justify-content: center; /* 내용을 수평 중앙으로 정렬 */
  }
`





export default S;