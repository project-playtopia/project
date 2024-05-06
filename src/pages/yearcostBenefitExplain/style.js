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
	margin: 100px auto 40px auto;
	font-size: ${h1FontSize};
	text-align: center;
	width: 100%;
	font-weight: ${fontBold};
	@media (max-width: 727px) {
		margin: 80px auto 10px auto;
		font-size: 35px;
	}
`;

S.Header4 = styled.h4`
	margin: 0 auto;
	font-size: 22px;
	font-weight: ${fontSemiBold};
	width: 100%;
	text-align: center;
	background-color: ${mainSoftColor};
	padding: 1rem;
	@media (max-width: 727px) {
		font-size: 20px;
	}
`;

S.Description = styled.div`
	width: 70vw;
	margin: 2rem auto;
	font-weight: ${fontSemiBold};
	@media (max-width: 727px){
		font-size: 0.9rem;
	}
`;

S.TableWrapper = styled.div`
	width: 70vw;
	margin: 0 auto;
	@media (max-width: 727px) {
		width: 100%;
	}
`;

S.TableHeader = styled.table`
	font-weight: ${fontSemiBold};
	font-size: 1rem;
	border-width: 0 0 1px 0;
	border-style: solid;
	border-color: ${mainColor};
	border-radius: 30px 30px 0 0;
	background-color: ${mainSoftColor};
	width: 100%;
	@media (max-width: 727px){
		font-size: 0.9rem;
		border-radius: 15px 15px 0 0;
	}
	& td{
		height: 3rem;
		padding: 1rem;
		width: 33%;
		text-align: center;
	}
`;

S.Table = styled.table`
	width: 100%;
	text-align: center;
	border-width: 0 0 1px 0;
	border-style: solid;
	border-color: #1fb1d9;
	font-size: 0.9rem;
	& td{
		height: 3rem;
		padding: 1rem;
		width: 33%;
		text-align: center;
	}
	& span.subcolor {
		color: ${subColor};
	}
	@media (max-width: 727px){
		font-size: 0.8rem;
	}
`;

S.LinkWrapper = styled.div`
	& a{
		border-style: solid;
		border-color: ${mainColor};
		border-width: 1px;
		border-radius: 30px;
		height: 3rem;
		padding: 1rem;
		width: 30vw;
		min-width: 10rem;
		color: ${mainColor};
		margin: 2rem auto;
		@media (max-width: 727px) {
			width: 100%;
		}
	}
	& a:hover {
		background-color: ${mainSoftColor};
	}
`;


export default S;