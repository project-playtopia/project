import styled from "styled-components";

const S = {};

const mainSoftColor = ({theme}) => theme.PALETTE.primary.main_soft;
const mainLightenColor = ({theme}) => theme.PALETTE.primary.main_lighten;
const mainColor = ({theme}) => theme.PALETTE.primary.main;
const mainDarkenColor = ({theme}) => theme.PALETTE.primary.main_darken;
const subColor = ({theme}) => theme.PALETTE.sub.sub;
const fontThin = ({theme}) => theme.FONT_WEIGHT.thin;
const fontRegular = ({theme}) => theme.FONT_WEIGHT.regular;
const fontSemiBold = ({theme}) => theme.FONT_WEIGHT.semibold;
const fontBold = ({theme}) => theme.FONT_WEIGHT.bold;
const searchBarBorder = '0.2rem';
const h1FontSize = "40px";
const basicFontSize = '0.9rem';

S.Container = styled.div`
	width: 90%;
	margin: 0 auto;
	& .subcolor {
		color: ${subColor};
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

S.PayGrid	 = styled.div`
	display: grid;
	grid-template-columns: 4.5fr 5.5fr;
	grid-template-rows: auto;
	gap: 1rem;
	margin: 2rem;
	@media (max-width: 727px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto;
		margin: 2rem 0;
	}
`;

S.ItemWrapper = styled.div`
	text-align: center;
`;

S.ItemImg = styled.div`
	border-radius: 50%;
	border-color: ${mainColor};
	border-width: 1px;
	border-style: solid;
	width: 15vw;
	aspect-ratio: 1 / 1;
	margin: 0 auto;
	background-image: url(${(props)=>props.src});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cotain;
	@media (max-width: 727px){
		width: 60%;
		aspect-ratio: 1 / 1;
	}
`; 


S.ItemTitle = styled.div`
	font-size: 1.4rem;
	font-weight: ${fontSemiBold};
	width: 100%;
	text-align: center;
	padding: 1rem;
`;

S.PayWrapper = styled.div``;

S.Section = styled.div`
	border-bottom: 1px solid ${mainColor};
	margin: 1rem;
`;

S.Header5 = styled.div`
	font-size: 1.1rem;
	font-weight: ${fontSemiBold};
	padding: 1rem;
	width: 10rem;
	text-align: center;
	border-radius: 30px;
	background-color: ${mainSoftColor};
`;

S.Description = styled.div`
	font-size: 0.9rem;
	padding: 1rem;
`;

S.TicketSelector = styled.div`
	font-size: 0.9rem;
	padding: 1rem;
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 2rem;
	gap: 2rem;
	@media (max-width: 727px){
		grid-template-columns: auto 1fr 1fr;
		font-size: 0.8rem;
		gap: 1rem;
	}
`;

S.TicketTitle = styled.div`
	font-size: 1rem;
	line-height: 2rem;
`;

S.TicketPriceContainer = styled.div`
	display: grid;
	grid-template-rows: 1.5fr 1fr;
`;

S.Disconted = styled.div`
	font-size: 1rem;
	font-weight: ${fontSemiBold};
	text-align: right;
`;

S.Original = styled.div`
	font-size: 0.8rem;
	font-weight: ${fontThin};
	text-align: right;
	text-decoration: line-through;
	color: #9f9f9f;
`;


S.TicketBtnContainer = styled.div`
	display: grid;
	grid-template-columns: 2rem 2rem 2rem;
	grid-template-rows: 2rem;
	margin: 0 auto;
	@media (max-width: 727px) {
		grid-template-columns: repeat(3, 1.5rem);
		grid-template-rows: 1.6rem;
	}
`;

S.TicketCntBtn = styled.button`
	background: none;
	border-color: #9f9f9f;
	border-style: solid;
	border-width: 1px;
	cursor: pointer;
	font-size: 1rem;
	padding: 0.5rem;
	font-weight: ${fontSemiBold};
	@media (max-width: 727px){
		font-size: 0.9rem;
		padding: 0;
	}
`;
S.TicketCnt = styled.div`
	border-color: #9f9f9f;
	border-style: solid;
	border-width: 1px 0;
	font-size: 1rem;
	padding: 0.5rem;
	text-align: center;
	@media (max-width: 727px){
		font-size: 0.9rem;
		padding: 0.3rem;
	}
`;

S.TicketSummary = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1.2rem;
	border-top: 1px dotted #9f9f9f;
`;

S.TicketEntire = styled.div`
	font-weight: ${fontSemiBold};
	font-size: 1rem;
`;

S.UnorderedList = styled.ul`
	list-style: disc;
	padding-left: 1rem;
	& li{
		padding: 0.5rem;
	}
`;

S.PriceSummary = styled.div`
	border-color: ${mainColor};
	border-width: 1px;
	border-style: solid;
	border-radius: 30px;
	padding: 2rem;
	width: 100%;
	/* margin-bottom: 1rem; */
	@media (max-width: 727px){
		/* width: 90%; */
		padding: 1.6rem;
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
	font-size: 1rem;
	font-weight: ${fontSemiBold};
	@media (max-width: 727px) {
		font-size: 0.9rem;
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
	font-size: 1rem;
	font-weight: ${fontSemiBold};
	text-align: right;
	@media (max-width: 727px) {
		font-size: 0.9rem;
	}
`;

S.BtnWrapper = styled.div`
	text-align: center;
	margin-bottom: 10rem;
`;

S.ButtonToPay = styled.button`
	font-size: 1rem;
	padding: 1rem;
	color: #fff;
	border-width: 0;
	border-radius: 30px;
	background-color: ${mainColor};
	width: 16rem;
	margin: 1rem;
	cursor: pointer;
	&:hover{
		background-color: ${mainDarkenColor};
		color: #ccc;
	}
	@media (max-width: 727px){
		width: 90%;
	}
`;
S.SelectorWrapper = styled.div`
	padding: 1rem;
	@media (max-width: 727px){
		padding: 1rem 0.5rem;
	}
`;

S.PayWaySelector = styled.select`
	width: 100%;
	padding: 1rem;
	border-radius: 50px;
	font-size: 1rem;
	font-weight: ${fontRegular};
	& option{
		font-size: 0.9rem;
	}
	@media (max-width: 727px){
		padding: 0.8rem;
		font-size: 0.9rem;
	}
`;

export default S;