import styled from "styled-components";

const mainSoftColor = ({theme}) => theme.PALETTE.primary.main_soft;
const mainLightenColor = ({theme}) => theme.PALETTE.primary.main_lighten;
const mainColor = ({theme}) => theme.PALETTE.primary.main;
const mainDarkenColor = ({theme}) => theme.PALETTE.primary.main_darken;
const subColor = ({theme}) => theme.PALETTE.sub.sub;
const fontRegular = ({theme}) => theme.FONT_WEIGHT.regular;
const fontSemiBold = ({theme}) => theme.FONT_WEIGHT.semibold;
const fontBold = ({theme}) => theme.FONT_WEIGHT.bold;
const h1FontSize = "40px";
const basicFontSize = '0.9rem';

const S={};

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
	@media (max-width: 727px){
		margin: 80px auto 10px auto;
		font-size: 35px;
	}
`;
S.EventPeriod = styled.div`
	margin: 20px auto;
	font-size: ${basicFontSize};
	text-align: center;
	font-weight: ${fontRegular};
	font-size: 1rem;
	@media (max-width: 727px){
		font-size: 0.9rem;
		margin: 18px auto;
	}
`;

S.TableWrapper = styled.div`
	width: 70vw;
	margin: 0 auto;
	& td {
		width: 25%;
		text-align: center;
		font-size: 0.9rem;
		@media (max-width: 727px){
			font-size: 0.7rem;
		}
	}
	& span.subcolor {
		color: ${subColor};
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
	height: 3rem;
	width: 100%;
	line-height: 3rem;
	@media (max-width: 727px){
		font-size: 0.9rem;
		border-radius: 15px 15px 0 0;
	}
`;

S.Description = styled.div`
	width: 70vw;
	margin: 1.3rem auto;
	font-weight: 200;
	@media (max-width: 727px){
		font-size: 0.8rem;
	}
`;

S.BtnContainer = styled.div`
	margin: 0 auto;
	width: 70vw;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 3rem;
	column-gap: 2rem;
	@media (max-width: 727px) {
		grid-template-columns: 1fr;
		grid-template-rows: 3rem 3rem;
		row-gap: 1rem;
	}
	& a{
		border-style: solid;
		border-color: ${mainColor};
		border-width: 1px;
		line-height: 3rem;
		border-radius: 30px;
		@media (max-width: 727px) {
		line-height: 3rem;
	}
	}
	& a.to-list {
		color: ${mainColor};
	}
	& a.to-list:hover{
		background-color: ${mainSoftColor};
	}
	& a.to-pay {
		color: #fff;
		background-color: ${mainColor};
	}
	& a.to-pay:hover{
		background-color: ${mainDarkenColor};
		border-color: ${mainDarkenColor};
		color: #eee;
	}
`;

export default S;