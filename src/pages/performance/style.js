import styled from 'styled-components';

const S = {};

const mainSoftColor = ({theme}) => theme.PALETTE.primary.main_soft;
const mainLightenColor = ({theme}) => theme.PALETTE.primary.main_lighten;
const mainColor = ({theme}) => theme.PALETTE.primary.main;
const mainDarkenColor = ({theme}) => theme.PALETTE.primary.main_darken;
const subColor = ({theme}) => theme.PALETTE.sub.sub;
const fontSemiBold = ({theme}) => theme.FONT_WEIGHT.semibold;
const fontBold = ({theme}) => theme.FONT_WEIGHT.bold;
const h1FontSize = "40px";


S.Container = styled.div`
	width:90%;
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

S.DateWrapper = styled.div`
  border-width: 1px 0;
  border-style: solid;
  border-color: #9f9f9f;

  width: 70%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

S.DateSelector = styled.button`
  border-radius: 50%;
  background-color: #fff;
  font-size: 1rem;
  width: 4.5rem;
  aspect-ratio: 1;
  border-width: 1px;
  border-color: ${mainColor};
  border-style: solid;
  color: ${mainColor};
  cursor: pointer;

  &:hover{
    background-color: ${mainSoftColor};
  }
  
  &.active {
    color: #fff;
    background-color: ${mainColor};
  }
`;

S.ItemContainer = styled.div`
  width: 70%;
  margin: 2rem auto 8rem auto;
`;

S.ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 17rem auto;
  border-bottom: 1px solid #9f9f9f;
`;

S.ImgWrapper = styled.div`
  background-image: url(${(props)=>props.imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  aspect-ratio: 3 / 2;
  border-radius: 15px;
  margin: 1.5rem;
`;

S.ContentWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & .location {
    height: 2.1rem;
    line-height: 2.1rem;
  }
`;

S.DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

S.Header5 = styled.p`
	font-size: 1.1rem;
	font-weight: ${fontSemiBold};
	padding: 0.5rem;
`;

S.TimeMarker = styled.div`
  border-color: ${mainColor};
  height: 2rem;
  border-width: 1px;
  border-radius: 30px;
  border-style: solid;
  padding: 0.5rem 1rem;
  color: ${mainColor};
  font-size: 0.9rem;
`;

S.Header4 = styled.h4`
	margin: 0 auto;
	font-size: 22px;
	font-weight: ${fontSemiBold};
	width: 100%;
	@media (max-width: 727px) {
		font-size: 20px;
	}
`;





export default  S;