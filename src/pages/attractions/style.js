import styled from "styled-components";
const mainDarkenColor = ({theme}) => theme.PALETTE.primary.main_darken;
const mainColor = ({theme}) => theme.PALETTE.primary.main;

const S = {};

S.Background = styled.div`
  width: 100%;
  height: 100%;
  
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  margin-bottom: 10%;

`;

S.AttractionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4열로 나누기
  grid-gap: 30px; // 그리드 사이의 간격
  margin-top: 110px;
`;



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

// S.Button = styled.button`
// color: #000000;

// `

// S.Threebutton = styled.div`
// position:absolute;
// left: 38%;
// top : 15%;
// font-size: 16px;
// `


// BasicSearch.jsx 검색창
S.search = styled.div`
position:absolute;
width: 60%;
left: 30%;
top : 25%;
`





// AttractionList

S.gridContainer= styled.div`

  display: grid;
  position:absolute;
  left: 13%;     
  top: 40%;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 40px;
  padding-bottom: 150px;

  @media (max-width : 727px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 20px;
    padding-bottom: 50px;
  }
`;

S.gridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width : 727px) {
    border: solid 1px blue;
  }
`;

// 롯데월드용

S.ImageWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  overflow: hidden;

  @media (max-width: 727px){
    grid-template-columns: repeat(2,1fr);
  }

  &:hover div {
    display: block;
  }

  div {
    display: none;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); // 반투명 배경
    color: white;
    width: 100%;
    text-align: center;

  }
  
`;










/* S.Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // 이미지 비율 유지하며 컨테이너에 맞춰 잘림
`; */



// 에버랜드, 서울랜드
// S.ImageWrapper = styled.div`
//   width: 250px;
//   height: 250px;
//   position: relative;
//   overflow: hidden;
//   gap : 10px;
//   display: flex;
//   justify-content: center;
//   cursor: pointer;


//   &:hover img {
//     filter: brightness(70%);
//   }

//   &:hover::after {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);

//     display: block;
//   }
  
// `;

  S.Image = styled.img`
  width: 250px;
  height: 250px;
  position: relative;
  border-radius: 20px;
  object-fit: cover;
  
  

`;

S.Content = styled.div`
  color: #fff; 
  font-size: 16px;
  font-weight: ${({theme})=>theme.FONT_WEIGHT["thin"]};
  line-height: 1.5; 
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none; 

  .attName{
    font-weight: ${({theme})=>theme.FONT_WEIGHT["semibold"]};
    font-size: ${({theme})=>theme.FONT_SIZE["default"]}
  }

  ${S.ImageWrapper}:hover & {
    display: block; 
  }
`;







// Explain.js
S.ExplainWrapper = styled.div`
    width: 100%;
  height: 100%;
  margin-top: 150px;
  text-align: center;

  & .iconWrapper{
    display: flex;
    margin-top: 80px;
    gap: 200px;
    text-align: center;
    text-align: center;
    justify-content: flex-end;
    max-width: 1055px;
    &.icon{
      margin :0 20px;
    }
    &.span{
      font-weight: bold;
    }
  }

  & .notice {
    font-size: 30px;
    font-weight: bold;
    padding-top: 100px;
  }
`;

S.ExplainH1 = styled.div`
 font-size: 50px;
 font-weight: bold;
 /* margin-top: 30px; */
`;

S.ExplainDescription = styled.div`
 font-size: 24px;
 font-weight: bold;
 margin-top: 30px;
 margin-bottom : 40px;

`;

S.ExplainImage = styled.img`
  width: 1200px; // 원하는 너비로 설정
  height: 400px; // 원하는 높이로 설정
  border-radius: 20px;

`;




S.BigContainer = styled.div`
  display:  flex;
  flex-direction: column;
  width: 100%;
  align-items: center; 
  /* justify-content: space-evenly; */
  justify-content: center;
  text-align: center;
 



  & .limit{
    padding-top: 50px;
    margin-bottom: 50px;
    margin: 40px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    align-items: center;  
    margin-left: 120px;
  };


  & .limitWrapper{
    
    border: 2px solid #1FB1D9;
    border-radius: 20px;
    width: 90%;
    height: 300px;
    position: relative;
    
    gap: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    
    justify-content: space-evenly;
  };

   

`;




S.IconContainer = styled.div`
  display: flex;
  flex-direction: column; 
  
  align-items: center; 
  margin: 10px; 

  @media (max-width : 720px) {
    flex-direction: column; 
    align-items: center; 
  }
`;



S.IconText = styled.p`
  margin-top: 10px; 
  font-size: 16px; 
  color: #000000;
  display: flex;
  justify-content: center;
  

`;


S.Container=styled.div`
  width: 90%;
  height: 100vh;

  margin: 100px 0 0 80px;
  padding-bottom: 500px;

  & h2{
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
  };

  .description{
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;

  };

 .mainImage{
   /* width: 1350px;
   height: 485px; */
   width : 1200px;
   height: 400px;
   border-radius: 20px;
   margin-left: 100px;

 };

 & .p{
 
  font-size: 16px;


  
 };

 & img{
  border-radius: 20px;
 };


& .location{
  font-size: 30px;
  font-weight: bold;

};



 @media (max-width : 727px) {
        gap: 20px 20px;
        padding-bottom: 50px;
 }
`;



S.Notice= styled.div`
   border: 2px solid ${mainColor};
   margin: 100px auto;
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
  }
`;



S.ButtonContainer = styled.div`
  position: absolute;
  margin-top: 200px;
  left: 42%;

`;






export default S;
