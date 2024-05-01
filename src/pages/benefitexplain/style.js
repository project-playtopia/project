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

S.Header1 = styled.h1`
	margin: 100px auto 10px auto;
	font-size: ${h1FontSize};
	text-align: center;
	width: 100%;
	font-weight: ${fontBold};
`;
S.EventPeriod = styled.div`
	margin: 20px auto;
	font-size: ${basicFontSize};
	text-align: center;
	font-weight: ${fontRegular};
`;

S.TableWrapper = styled.div`
	width: 70vw;
	margin: 0 auto;
`;

S.TableHeader = styled.table`
	/* border: 1px solid black; */
	border-width: 0 0 1px 0;
	border-style: solid;
	border-color: ${mainColor};
	background-color: ${mainSoftColor};
	height: 3rem;
	width: 100%;
	line-height: 3rem;
	border-radius: 30px 30px 0 0;
`;

export default S;