import styled from "styled-components";

const mainSoftColor = ({theme}) => theme.PALETTE.primary.main_soft;
const mainLightenColor = ({theme}) => theme.PALETTE.primary.main_lighten;
const mainColor = ({theme}) => theme.PALETTE.primary.main;
const mainDarkenColor = ({theme}) => theme.PALETTE.primary.main_darken;
const subColor = ({theme}) => theme.PALETTE.sub.sub;
const fontRegular = ({theme}) => theme.FONT_WEIGHT.regular;
const fontSemiBold = ({theme}) => theme.FONT_WEIGHT.semibold;
const fontBold = ({theme}) => theme.FONT_WEIGHT.bold;
const NAVBAR_PC_HEIGHT = "5rem";
const NAVBAR_MOBILE_HEIGHT = "4rem";
const SHADOW_COLOR = "rgba(100, 100, 100, 0.1)";

const S = {};

S.Background = styled.div`
	width: 100%;
	height: 100vh;
	
	& a {
  	font-size: 16px;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	text-align: left;
    & p {
  		color: #000000;
		}
    &.active{
      & p{
        color: #1fb1d9;
        font-weight: 600;
      }
      & path{
        color: #1fb1d9;
      }
  	}
	}
`;

S.NavBarWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: ${NAVBAR_PC_HEIGHT};
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	background-color: #fff;
	border-bottom: solid 1px #9f9f9f;
	@media (max-width: 727px) {
		height: ${NAVBAR_MOBILE_HEIGHT};
		justify-content: center;
		z-index: 5;
	}	
`;

S.DarkDiv = styled.div`
	display: none;
	@media (max-width: 727px) {
		background-color: rgba(0,0,0, 0.5);
		z-index:4;
		position: absolute;
		height: 100vh;
		width: 100vw;
		top:0;
		left: 0;
	}
`;

S.MenuBurgerWrapper = styled.div`
	display: none;
	@media (max-width: 727px) {
		display: block;
		width: 2rem;
		font-size: 2rem;
		color: ${mainColor};
		position: absolute;
		top: 0;
		left: 0;
		padding: 1rem;
	}
`;

S.LogoImgWrapper = styled.div`
	background-image: url(${(props) => props.imgSrc});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	width: 10rem;
	height: 100%;
	margin: 0 2rem;
	cursor: pointer;
	@media (max-width: 727px) {
		margin: 0.5rem;
	}
`;

S.NavMenuWrapper = styled.div`
	& a:visited{
		color: black;
		@media (max-width: 727px) {
			color: #fff;
		}
	}
	& a{
		color: black;
		display: inline;
	}
	@media (max-width: 727px) {
		position: absolute;
		/* display: none;	 */
		top: calc(${NAVBAR_MOBILE_HEIGHT} + 7rem);
		z-index: 5;
		left: 0;
		background-color: ${mainColor};
	}
`;

S.NavList = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	@media (max-width: 727px) {
		width: 12rem;
		flex-direction: column;
		color: #fff;
	}
`;

S.IconWrapper = styled.i`
	display: none;
	@media (max-width: 727px) {
		display: block;
		width: 3rem;
		aspect-ratio: 1;
		text-align: center;
		font-size: 2rem;
		padding: 0 0.5rem;
	}
`;

S.NavListItem = styled.li`
	display: block;
	margin: 0;
	width: 6rem;
	text-align: center;
	height: 100%;
	position: relative;
	line-height: ${NAVBAR_PC_HEIGHT};
	cursor: pointer;
	@media (max-width: 727px) {
		width: 100%;
		text-align: start;
		display: flex;
		justify-content: start;
		align-items: center;
		border-top: 1px solid ${mainSoftColor};
		flex-wrap: wrap;
		position: relative;
	}
	& > a {
		color: #000;
		display: block;
		text-align: center;
		@media (max-width: 727px) {
			color: #fff;
			text-align: start;
		}
	}
	& > a:hover{
		color: ${mainColor};
		@media (max-width: 727px) {
			color: #fff;
			background-color: ${mainDarkenColor};
		}
	}
	& a.active{
		font-weight: 600;
		@media (min-width: 728px) {
			color: ${mainColor};
		}
	}
	&:hover {
		font-weight: 600;
		@media (min-width: 728px) {
			color: ${mainColor};
		}
	}
	&:hover > ul{
		display: block;
	}
	&:hover > .active-bar{
		display: block;
	}
	&:hover > .arrow-icon{
		transform: rotate(-90deg);
	}
`;

S.MenuText = styled.div`
	@media (max-width: 727px){
		width: 4rem;
	}
`;

S.DropDownContainer = styled.ul`
	line-height: 1rem;
	position: absolute;
	background-color: ${mainSoftColor};
	padding: 1rem 0;
	border-width: 4px 0 0 0;
	border-color: ${mainColor};
	border-style: solid;
	top: calc(${NAVBAR_PC_HEIGHT} - 4px);
	display: none;
	width: 6rem;
	font-weight: 400;
	box-shadow: 0 0 5px 1px ${SHADOW_COLOR}, 3px 5px 5px 1px ${SHADOW_COLOR}, -3px 5px 5px 1px ${SHADOW_COLOR};
	@media (max-width: 727px) {
		position: static;
		background-color: ${mainDarkenColor};
		flex-grow: 1;
		box-shadow: none;
		border: 0;
	}
`;

S.ArrowIcon = styled.div`
	display: none;
	@media (max-width: 727px) {
		display: block;
		width: 1.5rem;
		aspect-ratio: 1;
		font-size: 1.5rem;
		position: absolute;
		color: #fff;
		right: 0.5rem;
		top: 0;
		text-align: center;
		transition: transform 0.2s;
	}
`;

S.DropDownMenu = styled.li`
	padding: 1rem 0;
	color: #000;
	width: 100%;
	text-align: center;
	font-weight: 400;
	&:hover{
		background-color: ${mainLightenColor};
	}
	@media (max-width: 727px) {
		text-align: start;
		padding-left: 2rem;
		color: #fff;
		& > a{
			color: #fff;
		}
	}
`;

S.ActiveBar = styled.div`
	background-color: ${mainColor};
	width: ${(props) => props.width ? props.width : "1px"};
	height: 4px;
	position: absolute;
	top: calc(${NAVBAR_PC_HEIGHT} - 4px);
	display: none;
`;

S.UserMenuWrapper = styled.div`
	width: 12rem;
	margin: 0 1rem;
	@media (max-width: 727px) {
		position: absolute;
		top: ${NAVBAR_MOBILE_HEIGHT};
		left: 0;
		background-color: ${mainColor};
		margin: 0;
		z-index: 5;
	}
`;


S.UserIconContainer = styled.div`
	display: none;
	@media (max-width: 727px) {
		background-color: ${mainColor};
		display: flex;
		align-items: center;
		color: #fff;
		height: 4rem;
	}
`;


S.UserIconWrapper = styled.i`
	display: none;
	@media (max-width: 727px) {
		display: block;
		aspect-ratio: 1;
		text-align: center;
		font-size: 3rem;
		padding: 0.5rem;
	}
`;

S.NavUserList = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	@media (max-width: 727px) {
		color: #fff;
	}
`;

S.UserListItem = styled.li`
	display: block;
	margin: 0;
	width: 6rem;
	text-align: center;
	height: 100%;
	position: relative;
	cursor: pointer;
	& > a {
		line-height: ${NAVBAR_PC_HEIGHT};
		color: #000;
		display: block;
		text-align: center;
		@media (max-width: 727px) {
			color: #fff;
			line-height: 3rem;
			height: 3rem;
		}
	}
	& > a:hover{
		color: ${mainColor};
		@media (max-width: 727px) {
			color: #fff;
			background-color: ${mainDarkenColor};
		}
	}
	& a.active{
		font-weight: 600;
		@media (min-width: 728px) {
			color: ${mainColor};
		}
	}
	&:hover > .active-bar{
		display: block;
	}
	&:hover {
		font-weight: 600;
		@media (min-width: 728px) {
			color: ${mainColor};
		}
	}
`;



S.LogOutBtn = styled.button`
	border: none;
	background-color: #fff;
	height: 100%;
	font-size: 1em;
`;

// footer
S.Footer = styled.div`
	@media (min-width: 727px){
		background-color: ${ ({theme}) => theme.PALETTE.primary["main"]};
		width: 100%;
		height: 40%;
		.footerlogo{
			position: relative;
			top:40%;
			left: 1%;
		}
		.footerbox{
			position: relative;
			left: 350px;
			bottom: 7%;
			border-left: solid 2px #fff;
			height: 120px;
		}
		.maker{
			position: relative;
			left: 30px;
			bottom: 7%;
			color: #fff;
			font-weight:  ${ ({theme}) => theme.FONT_WEIGHT["bold"]};
		}
		.email{
			position: relative;
			left: 30px;
			color: #fff;
			font-size: ${ ({theme}) => theme.FONT_SIZE["footer"]};
			font-weight:  ${ ({theme}) => theme.FONT_WEIGHT["thin"]};
			line-height: 20px;
		}
	}
	@media (max-width: 727px){
		display: none;
	}
`;

S.Image = styled.img`
	width: 190px;
	height: 50px;
	margin-left:20px ;
`;

export default S;