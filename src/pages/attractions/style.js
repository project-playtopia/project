import styled from "styled-components";

const S = {};


S.Button = styled.button`
color: #000000;

`

S.Threebutton = styled.div`
position:absolute;
left: 38%;
top : 15%;
font-size: 16px;
`


// BasicSearch.jsx 검색창
S.search = styled.div`
position:absolute;
left: 30%;
top : 25%;
`





// AttractionList

S.gridContainer= styled.div`

     display: grid;
     position:absolute;
     left: 13%;     
     top: 40%;
     grid-template-columns: repeat(4,1fr);
     gap: 40px 40px;
     padding-bottom: 150px;

     @media (max-width : 727px) {
        grid-template-columns: repeat(2,1fr);
        gap: 20px 20px;
        padding-bottom: 50px;
     }
    

      `

    S.gridItem = styled.div`

     display: flex;
     justify-content: center;
     align-items: center;
     height: 100%;
     @media (max-width : 727px) {
        border: solid 1px blue;
     }
    

     `

S.ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  overflow: hidden;
  gap : 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;


  &:hover img {
    filter: brightness(70%);
  }

  &:hover::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: block;
  }
  
`;

  S.Image = styled.img`
  width: 250px;
  height: 250px;
  position: relative;
  border-radius: 20px;
  
  

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




// Explain


S.BigContainer = styled.div`
  display:  flex;
  width: 100%;
  justify-content: space-evenly;
 
`


S.IconContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
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
 }

  .description{
   font-size: 24px;
   font-weight: bold;
   text-align: center;
   margin-bottom: 50px;

 }

 .mainImage{
   /* width: 1350px;
   height: 485px; */
   width : 1200px;
   height: 400px;
   border-radius: 20px;
   margin-left: 100px;

 }

 & p{

  font-size: 16px;
  text-align: center;
  @media (max-width : 720px) {
    flex-direction: column; // 창의 너비가 727px 이하일 때 세로 정렬
    align-items: center; // 아이콘들이 중앙에 위치하도록 조정
  }
  
 }

 & img{
  border-radius: 20px;
 }


 & .iconWrapper{

  display: flex;
  margin: 100px 0 0 400px;
  gap: 200px;


  

    & .icon{
    margin :0 20px;
  }

  }



& .limit{
  margin-top: 200px;
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: bold;
  justify-content: space-between;
}

& .limitWrapper{
  margin: 0 auto;
  margin-bottom: 200px;
  border: 2px solid #1FB1D9;
  border-radius: 20px;
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
}


& .notice{

  font-size: 30px;
  font-weight: bold;

}


& .pBorder{
 
  border: 2px solid #1FB1D9;
  border-radius: 20px;
  width: 1000px;
  height: 100px;
  margin-top: 30px;
  margin-bottom: 200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width : 720px) {
    flex-direction: column; // 창의 너비가 727px 이하일 때 세로 정렬
    align-items: center; // 아이콘들이 중앙에 위치하도록 조정
  }

}

& .location{
  font-size: 30px;
  font-weight: bold;

}



 @media (max-width : 727px) {
        gap: 20px 20px;
        padding-bottom: 50px;
 }


`

S.ButtonContainer = styled.div`
  position: absolute;
  margin-top: 200px;
  left: 42%;

`






export default S;
