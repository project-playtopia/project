import styled from "styled-components";

const S ={};

const mainSoftColor = ({theme}) => theme.PALETTE.primary.main_soft;
const mainLightenColor = ({theme}) => theme.PALETTE.primary.main_lighten;
const mainColor = ({theme}) => theme.PALETTE.primary.main;
const mainDarkenColor = ({theme}) => theme.PALETTE.primary.main_darken;
const subColor = ({theme}) => theme.PALETTE.sub.sub;
const fontRegular = ({theme}) => theme.FONT_WEIGHT.regular;
const fontSemiBold = ({theme}) => theme.FONT_WEIGHT.semibold;
const fontBold = ({theme}) => theme.FONT_WEIGHT.bold;
const searchBarBorder = '0.2rem';
const h1FontSize = "40px";
const basicFontSize = '0.9rem';

S.Header1 = styled.h1`
	margin: 100px auto 10px auto;
	font-size: ${h1FontSize};
	text-align: center;
	width: 100%;
	font-weight: bold;
`;

S.NavParkSelector = styled.nav`
	font-size: 1rem;
	width: 100%;
	text-align: center;
	margin: 20px auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
	& * {
		margin: 0 0.5rem;
		color: #000;
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

S.NavTypeSelector = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 3.5rem;
	min-height: 50px;
	background-color: #d7f2ff;
	align-items: center;

`;

S.NavContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
`;

S.BtnTypeSelector = styled.button`
	font-size: 0.9rem;
	border: none;
	background-color: ${mainSoftColor};
	min-width: 90px;
	height: 100%;
	border-radius: 1rem;
	margin: 0 0.7rem;
	padding: 0 1rem;
	cursor: pointer;
	&:hover{
		background-color: ${mainLightenColor};
	}
	&.active{
		background-color: ${mainColor};
		color: #ffffff;
	}
`;

S.SearchWrapper = styled.div`
	padding: 0;
	width: 400px;
	height: 80%;
	display: flex;
	align-items: center;
	margin: 20px;
`;

S.SearchInput = styled.input`
	flex-basis: 80%;
	height: 100%;
	background-color: #fff;
	border-color: ${mainColor};
	border-style: solid;
	border-width: ${searchBarBorder} 0 ${searchBarBorder} ${searchBarBorder};
	border-radius: 30px 0 0 30px;
	outline: none;
	padding-left: 1rem;
	font-size: ${basicFontSize};
`;

S.SearchBtn = styled.button`
	flex-basis: 20%;
	height: 100%;
	background-color: #fff;
	border-color: ${mainColor};
	border-style: solid;
	border-width: ${searchBarBorder} ${searchBarBorder} ${searchBarBorder} 0;
	border-radius: 0 30px 30px 0;
	cursor: pointer;
`;

S.OrderSelector = styled.div`
	font-size: ${basicFontSize};
	margin: 20px 30px;
`;

S.OrderBtn = styled.button`
	border: none;
	background: none;	
	font-size: ${basicFontSize};
	cursor: pointer;
	&.active{
		color: ${mainColor};
		font-weight: ${fontBold};
	}
`;

S.GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 20%);
	grid-auto-rows: minmax(20rem, auto);
	gap: 2vw;
	justify-content: space-between;
`;

S.GridItem = styled.div`
	background-color: #fff;
	border-color: ${mainColor};
	border-style: solid;
	border-radius: 30px;
	border-width: 1px;
	font-size: ${basicFontSize};
	padding: 1.2rem;
	color: #000;
	height: 100%;
	cursor: pointer;
	&:hover{
		box-shadow: 0 0 10px 2px ${mainLightenColor};
	}
	line-height: 2rem;
`;

S.ItemTitle = styled.p`
	font-size: 1rem;
	font-weight: ${fontBold};
	width: 100%;
`;

S.ItemPrice = styled.span`
	font-weight: ${fontSemiBold};
	color: ${subColor};
`;

S.ItemImgWrapper = styled.div`
	width: 100%;
	text-align: center;
	height: 10rem;
	justify-content: center;
	background-image: url(${(props) => props.imgSrc});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;



export default S;