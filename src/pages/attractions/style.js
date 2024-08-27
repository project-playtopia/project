import styled from "styled-components";
const mainDarkenColor = ({theme}) => theme.PALETTE.primary.main_darken;
const mainColor = ({theme}) => theme.PALETTE.primary.main;

const h1FontSize = "40px";
const fontBold = ({theme}) => theme.FONT_WEIGHT.bold;

const S = {};



// Attraction.js


// 전체컨테이너 
  S.Background = styled.div`
    width: 90%;
    height: 100%;
    background-color: #fff;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    margin: 0 auto;
    margin-bottom: 10%;
    padding-top: 5rem;
    

    @media (max-width: 727px) {
      grid-template-columns: repeat(2, 1fr);
    };
 `;


 S.Header1 = styled.h1`
  margin: 30px auto 10px auto;
  font-size: ${h1FontSize};
  text-align: center;
  width: 100%;
  font-weight: ${fontBold};
`;

// 3사 셀렉버튼
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
	 };

	& *:hover {
		color: ${mainDarkenColor};
		font-weight: 500;
	};

	& .active {
		color: ${mainColor};
		font-weight: 600;
	};
  `;


S.SearchContainer = styled.div`
  width: 30vw;
	height: 3rem;
  margin: 0 auto;
  @media(max-width: 727px){
    width: 20rem;
  }
`;

 S.SearchWrapper = styled.div`
	padding: 0;
  width: 100%;
  height: 100%;
	display: flex;
	align-items: center;
`;

 S.SearchInput = styled.input`
	flex-basis: 80%;
	height: 100%;
	background-color: #fff;
	border-color: ${mainColor};
	border-style: solid;
	border-width: 1px 0 1px 1px;
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
	border-width: 1px 1px 1px 0;
	border-radius: 0 30px 30px 0;
	cursor: pointer;
`;


// 이미지리스트 전체박스
  S.AttractionsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 30px; // 그리드 사이의 간격
    margin-top: 50px;
    

     @media(max-width: 727px){
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      margin: 0;
      padding-top: 1rem;
     };
  `;




  S.ImageWrapper = styled.div`
    position: relative;
    width: 250px;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 20px;

    margin: 0 auto;

    div {
     display: none;
     position: absolute;
     left: 5%;
     bottom: 5%;
     color : #ffffff;
     width: 100%;
     line-height: 1.5;
    };
 
     div>p{
    color: #ffffff;
     };

    div>span{
    font-weight: bold;
    };

    &:hover img {
      filter: brightness(50%);
    };

    &:hover div {
      display: block;
    };

    @media(max-width:727px){
      width: 150px;
    }

 `;



 S.Image = styled.img`
   width: 250px;
   height: 250px;
   position: relative;
   border-radius: 20px;
   object-fit: cover;

    @media(max-width: 727px){

      width: 150px;
      height: 150px;
    };


  `;

 


 



// Explain.js

  // 전체컨테이너

S.ExplainWrapper = styled.div`
  width: 90%;
  margin-top: 150px;
  text-align: center;
  margin: 150px auto 50px auto;
  @media (max-width: 727px) {
    width: 100%;
  }
`;

// 어트 타이틀
 S.ExplainH1 = styled.div`
    font-size: 50px;
    font-weight: bold;
 `;

// 어트 설명
 S.ExplainDescription = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin: 30px 0 40px 0;
    @media (max-width: 727px) {
      margin: 30px 1em 40px 1em;
    }
  `;

// 어트 이미지
 S.ExplainImage = styled.div`
  background-image: url(${(props)=>props.imgSrc});
  background-color: #D7F2FF;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  max-width: 1200px; // 원하는 너비로 설정
  width: 80%;
  height: 400px; // 원하는 높이로 설정
  border-radius: 20px;
  margin: 0 auto;
  `;

// 탑승인원, 이용정보 컨테이너
 S.IconWrapper =styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  margin: 80px auto;
  width: 100%;
  & div{
    margin: 0 1rem;
  }
  & img{
   width: 10em;
   aspect-ratio: 1;
  }
 `;

 S.Span = styled.div`
  font-weight: bold;
  line-height: 40px;
 `;


// 탑승제한 4가지 아이콘 wrapper

 S.BigContainer = styled.div`
    display:  flex;
    flex-direction: column;
    width: 100%;
    align-items: center; 
    justify-content: center;
    text-align: center;
   margin : 100px 0;
  `;


 S.Limit = styled.div`
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 40px;
      text-align: center;
      align-items: center;    
  `;

 S.LimitWrapper = styled.div`
      display: flex;
      flex-wrap: wrap; // 아이콘들이 너무 많아 한 줄에 다 표시되지 않을 경우 다음 줄로 넘어갈 수 있도록 설정
      justify-content: center; // 아이콘들을 중앙 정렬
      align-items: center; // 아이템
      border: 2px solid #1FB1D9;
      border-radius: 20px;
      width: 90%;
      height: 400px;
      position: relative;
      gap: 70px;
      text-align: center;
      justify-content: space-evenly;
   `;


  S.IconContainer = styled.div`
     display: flex;
     flex-direction: column; 
     align-items: center; 
     /* margin: 10px;  */
     margin : 0 auto;

  `;


 S.IconText = styled.p`
    margin-top: 10px; 
    font-size: 16px; 
    color: #000000;
    display: flex;
    justify-content: center;
  `;




S.Notice = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
    text-align: center;
    align-items: center;  
  `;



 S.NoticeMessage= styled.div`
     border: 2px solid ${mainColor};
     margin: 0 auto;
     border: 2px solid #1FB1D9;
     border-radius: 20px;
     width: 90%;
     height: 100px;
     text-align: center;
     display: flex;
     align-items: center;
     justify-content: center;
  
   p{
    text-align: center;
    };
`;



S.ButtonContainer = styled.div`
   margin : 100px auto;
`;






export default S;
