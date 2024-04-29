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
	@media (max-width: 727px){
		font-size: 0.9rem;
	}
`;

S.TypeSelector = styled.div`
	width: 80%;
	margin: 0 auto;
	height: 3rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	@media (max-width: 727px){
		width: 90%;
	}
	& a {
		line-height: 3rem;
		border-style: solid;
		border-color: ${mainColor};
		color: ${mainColor};
	}
	& .explain{
		border-radius: 3rem 0 0 3rem;
		border-top-width: 1px;
		border-bottom-width: 1px;
		border-left-width: 1px;
		border-right-width: 0;
	}
	& .benefit{
		border-radius: 0 3rem 3rem 0;
		border-top-width: 1px;
		border-bottom-width: 1px;
		border-right-width: 1px;
		border-left-width: 0;
	}
	& .active{
		background-color: ${mainColor};
		color: #fff;
	}
	& a:hover{
		background-color: ${mainSoftColor};
	}
	& a.active:hover{
		background-color: ${mainDarkenColor};
		border-color: ${mainDarkenColor};
		color: #ccc;
	}
	
`;

S.GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 20%);
	grid-auto-rows: minmax(17rem, auto);
	gap: 2vw;
	justify-content: space-between;
	margin: 30px 0;
	@media (max-width: 727px){
		grid-template-columns: repeat(2, 48%);
		grid-auto-rows: minmax(15rem, auto);
	}
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
	@media (max-width: 727px){
		font-size: 0.7rem;	
		padding: 1rem;
	}
`;

S.ItemTitle = styled.p`
	font-size: 1rem;
	font-weight: ${fontBold};
	width: 100%;
	@media (max-width: 727px) {
		font-size: 0.9rem;
	}
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
	@media (max-width: 727px){
		height: 9rem;
	}
`;

S.CostExplainContainer = styled.div`
	width: 80%;
	margin: 30px auto;
	padding: 2rem;
	border-width: 1px;
	border-color: ${mainColor};
	border-style: solid;
	border-radius: 30px;
	@media (max-width: 727px){
		width: 90%;
		padding: 1.6rem;
	}
`;

S.CostExplainName = styled.div`	
	width: 100%;
	min-height: 2rem;
	align-items: center;
	font-weight: ${fontSemiBold};
	line-height: 2rem;
	@media (max-width: 727px) {
		font-size: 0.9rem;
	}
`;

S.CostExplainGrid = styled.div`
	display: grid;
	column-gap: 1rem;
	row-gap: 0;
	grid-auto-rows: minmax(2.5rem, auto);
	grid-template-columns: auto 1fr auto;
	align-items: center;
`;

S.CostExplainTitle = styled.div`
	@media (max-width: 727px) {
		font-size: 0.9rem;
	}
	& span{
		font-size: 0.8rem;
		@media (max-width: 727px) {
		font-size: 0.7rem;
	}
	}
`;

S.Dotted = styled.div`
	border-width: 1px;
	border-style: dotted;
	border-color: ${mainColor};
	width: 100%;
	height: 1px;
`;

S.CostExplainPrice = styled.div`
	color: ${subColor};
	@media (max-width: 727px) {
		font-size: 0.9rem;
	}
`;

export default S;