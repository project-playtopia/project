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

S.Container = styled.div`
	width: 90%;
	margin: 0 auto;
	& .semibold{
		font-weight: ${fontSemiBold};
	}
`;

S.Header1 = styled.h1`
	margin: 100px auto 10px auto;
	font-size: ${h1FontSize};
	text-align: center;
	width: 100%;
	font-weight: ${fontBold};
	@media (max-width: 727px) {
		margin: 80px auto 10px auto;
		font-size: 35px;
	}
`;

S.ExplainGrid = styled.div`
	display: grid;
	grid-template-columns: 4.5fr 5.5fr;
	grid-template-rows: auto;
	gap: 1rem;
	margin: 2rem;
	@media (max-width: 727px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto;
	}
`;

S.ItemWrapper = styled.div`
	text-align: center;
`;

S.ItemImg = styled.div`
	border-radius: 30px;
	border-color: ${mainColor};
	border-width: 1px;
	border-style: solid;
	width: 30vw;
	height: 30vw;
	margin: 0 auto;
	background-image: url(${(props)=>props.imgsrc});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`; 

S.DescriptionFlex = styled.div`
	display: flex;
	flex-direction: column;
`;

S.DescriptionItem = styled.div`
	display: grid;
	grid-template-columns: 4rem auto;
	grid-template-rows: minmax(4rem, auto);
	margin: 1rem 0;
`;

S.IconWrapper = styled.div`
	background-color: ${mainSoftColor};
	padding: 1rem;
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	color: ${mainDarkenColor};
	font-size: 2rem;
	text-align: center;
`;

S.DescriptionWrapper = styled.div`
	padding: 0.5rem;
	line-height: 1.5rem;
`;

S.BtnConatiner = styled.div`
	margin-bottom: 50px;
	& a{
		border: 1px solid ${mainColor};
		border-radius: 30px;
		margin: 0 auto;
		height: 3rem;
		padding: 1rem;
		font-size: 1rem;
		color: ${mainColor};
		width: 40vw;
		min-width: 15rem;
	}
	& a:hover{
		background-color: ${mainSoftColor};
	}
`;

export default S;