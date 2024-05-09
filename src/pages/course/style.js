import styled from "styled-components";
const S = {};
const mainDarkenColor = ({theme}) => theme.PALETTE.primary.main_darken;
const mainColor = ({theme}) => theme.PALETTE.primary.main;


S.NavParkSelector = styled.nav`
	font-size: 18px !important;
	width: 100%;
	text-align: center;
  margin-top: 2%;
	margin-bottom: 3%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	& * {
		margin: 0 0.5rem;
		color: #000;
	}

  & p{
    font-size : 18px;
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

export default S;