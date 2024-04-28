import styled from "styled-components";

const S = {};

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
	font-weight: ${fontBold};
`;

S.NavParkSelector = styled.nav`
	font-size: 1rem;
	width: 100%;
	text-align: center;
	margin: 30px auto;
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

S.TypeSelector = styled.div`
	width: 70%;
	margin: 0 auto;
	height: 3rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	& a {
		line-height: 3rem;
		border-style: solid;
		border-color: ${mainColor};
		border-width: 1px;
		color: ${mainColor};
	}
	& a.explain{
		border-radius: 3rem 0 0 3rem;
	}
	& a.benefit{
		border-radius: 0 3rem 3rem 0;
	}
	& .active{
		background-color: ${mainColor};
		color: #fff;
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