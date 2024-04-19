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


// AttractionList.jsx

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



// AttractionExplain.jsx



S.Container=styled.div`
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
  margin-top: 20px;
  text-align: center;
 }

 & img{
  border-radius: 20px;
 }


 & .iconWrapper{

  display: flex;
  margin: 100px 0 0 400px;
  gap: 200px;


  & .limitIcons{

    display: flex;
  

    & .icon{
    margin :0 20px;
  }

  }


 }




& .limit{
  margin-top: 80px;
  margin-bottom: 50px;
}

& .limitWrapper{
  margin-left: 200px;
  border: 2px solid #1FB1D9;
  border-radius: 20px;
  width: 1000px;
  height: 300px;
}

& .pBorder{
  margin-left: 200px;
  border: 2px solid #1FB1D9;
  border-radius: 20px;
  width: 1000px;
  height: 100px;
  margin-top: 50px;

}



 @media (max-width : 727px) {
        gap: 20px 20px;
        padding-bottom: 50px;
 }




`











export default S;
