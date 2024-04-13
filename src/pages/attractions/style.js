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
  left: 35%;
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








export default S;
