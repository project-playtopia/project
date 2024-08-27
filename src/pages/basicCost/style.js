import styled from "styled-components";
const S = {};
const mainDarkenColor = ({theme}) => theme.PALETTE.primary.main_darken;
const mainColor = ({theme}) => theme.PALETTE.primary.main;

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
  margin-bottom: 2%;
  @media (max-width: 727px) {
    margin-bottom: 10%;
    margin-top: 25%;
  }
`;

S.PalldayTitle = styled.p`
  font-size: ${ ({theme}) => theme.FONT_SIZE["h4"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["bold"]};
  position: absolute;
  top: 12%;
  left: 3%;
`

S.PalldayContent = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE["default"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
  position: absolute;
  top: ${({ top }) => top}%; 
  left: ${({ left }) => left}%; 
`

S.Pafter04Title = styled.p`
  font-size: ${ ({theme}) => theme.FONT_SIZE["h4"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["bold"]};
  position: absolute;
  right: 40%;
  top: 12%;
  @media (max-width: 727px) {
    right: 25%;
  }
`

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
  border-radius: 30px 30px 0 0;
  border-bottom: solid 2px ${({theme})=> theme.PALETTE.primary["main"]};
`
S.line = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${({theme})=> theme.PALETTE.primary["main"]} ;
  position: absolute;
  left: 50%;
`

S.dashedLine = styled.div`
  width: 200px; 
  height: 0; 
  border-top: 1px dashed #1FB1D9;
  position: absolute;
  top: ${({ top }) => top}%; 
  left: ${({ left }) => left}%; 
  @media (max-width: 727px) {
    width: 50px;
    left: ${({ left }) => `calc(${left}% + 7%)`}; 
  }
`


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

export default S;
