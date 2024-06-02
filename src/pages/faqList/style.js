import { Link } from "react-router-dom";
import styled from "styled-components";
import BasicSearch from "../../components/search/BasicSearch.jsx";

const S = {};

S.SearchInput = styled.input`
  flex: 1;
  border: none;
  &:focus {
    outline: none;
  }
`;

S.LiRow = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  list-style: none;
  & div {
    margin: 10px;
    text-align: center;
  }
`;

S.pagebutton = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px 0px 0px;
`;

S.footer = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 150px;
`;

S.header = styled.div`
  display: flex;
  justify-content: center;
  background-color: #d7f2ff;
  height: 200px;
  margin: 30px auto;
  border-radius: 30px;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 1200px;

  & div {
    background-color: #fff;
  }

  & h1 {
    font-size: 50px;
    margin: 20px;
    @media (max-width: 727px) {
        font-size: 38px;
    }

  }

  @media (max-width: 727px) {
        width: 350px;
        height: 180px;
    }


  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    margin: 50px 20px;
  }
`;

S.margin = styled.div`
  margin-top: 100px;
`;

S.StyledSearch = styled.input`
    width: 620px;
    height: 60px;


  @media (max-width: 727px) {
    width: 300px;
    height: 40px;
  }
`;

S.SearchWrapper = styled.div`
	display: flex;
    border-radius: 30px;
	@media (max-width: 727px){
		grid-column: 1 / 5;
	}
`;

S.SearchInput = styled.input`
    width: 620px;
	height: 60px;
	background-color: #fff;
    border: 1px solid #1FB1D9;
	border-radius: 30px 0 0 30px;
	outline: none;
	padding-left: 1rem;
	font-size: 15px;
    @media (max-width: 727px){
		width: 300px;
        height: 40px;
	}
`;

S.SearchBtn = styled.button`
	
	background-color: #fff;
    border: 1px solid #1FB1D9;
	border-radius: 0 30px 30px 0;
	cursor: pointer;
`;


export default S;
