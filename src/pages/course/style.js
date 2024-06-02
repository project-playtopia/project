import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  @media (max-width: 727px) {
    margin-top: 25%;
    margin-bottom:10%;
  }
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
  @media (max-width: 727px) {
    margin-bottom: 10%;
  }
`;


S.CourseContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 5%;
@media (max-width: 727px) {
    margin-bottom: 10%;
  }
`

S.AttractionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 100px; 
  margin-top: 5%;
`;

S.CourseButton = styled.button`
font-size: ${({theme}) => theme.FONT_SIZE["default"]};
font-weight: ${({theme})=> theme.FONT_WEIGHT["regular"]};
background-color: #fff;
border: none;
cursor: pointer;

&:hover {
    color: ${mainDarkenColor};
    font-weight: 500;
}

${props => props.isActive && `
    color: #1fb1d9;
    font-weight: 600;
`}
`

S.AttractCourse = styled.div`
width: 100%;
height: 100%;
margin-top: 5%;
`

S.ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &:hover::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: rgba(31,177,217,0.4); 
    border-radius: 100%; 
    pointer-events: none; 
    margin-top: 9px;
  }
`;

S.Image = styled.img`
  /* margin-left: 10px; */
  width: 200px;
  height: 200px;
  border-radius: 100%;
  transition: filter 0.3s; 
`;

S.HeightRestriction = styled.div`
margin-top: 3%;
width: 100px;
height: 35px;
border-radius: 50px;
border: solid 1px ${mainColor};
& p{
  text-align: center;
  line-height: 35px;
  color:  ${mainColor};
}
`

S.Icon = styled(FontAwesomeIcon)`
margin: 15px;
font-size: 18px; 
color: ${mainColor};
`;

S.IconWrapper = styled.div`
  display: flex;
  align-items: center; 
  justify-content: start; 

  & p {
    margin: 0; 
  }
`


export default S;