import styled from "styled-components";

const S ={};

const mainColor = "#1fb1d9";
const searchBarBorder = '0.2rem';

S.NavParkSelector = styled.nav`
	font-size: 1rem;
	text-align: center;
	margin: 20px auto;
	& * {
		margin: 0 0.5rem;
		color: #000;
	}

	& .active {
		color: ${mainColor};
		font-weight: 600;
	}
`;

S.NavTypeSelector = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 50px;
	background-color: #d7f2ff;
	align-items: center;
`;

S.NavContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
`;

S.BtnTypeSelector = styled.button`
	font-size: 0.9rem;
	border: none;
	background-color: #d7f2ff;
	min-width: 90px;
	height: 100%;
	border-radius: 1rem;
	margin: 0 0.7rem;
	padding: 0 1rem;
	cursor: pointer;
	&:hover{
		background-color: #97d9fa;
	}
	&.active{
		background-color: ${mainColor};
		color: #ffffff;
	}
`;

S.SearchWrapper = styled.div`
	padding: 0;
	width: 400px;
	height: 80%;
	display: flex;
	align-items: center;
	margin: 20px;
`;

S.SearchInput = styled.input`
	flex-basis: 80%;
	height: 100%;
	background-color: #fff;
	border-color: ${mainColor};
	border-style: solid;
	border-width: ${searchBarBorder} 0 ${searchBarBorder} ${searchBarBorder};
	border-radius: 30px 0 0 30px;
	outline: none;
	padding-left: 1rem;
	font-size: 0.9rem;
`;

S.SearchBtn = styled.button`
	flex-basis: 20%;
	height: 100%;
	background-color: #fff;
	border-color: ${mainColor};
	border-style: solid;
	border-width: ${searchBarBorder} ${searchBarBorder} ${searchBarBorder} 0;
	border-radius: 0 30px 30px 0;
`;

S.OrderSelector = styled.div`
	font-size: 0.9rem;
	margin: 10px 20px;
	
`;

export default S;