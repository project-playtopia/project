import styled from "styled-components";

const S = {};




S.Button = styled.button`
color: #000000;

`



// BasicSearch.jsx 검색창
S.search = styled.div`
position:absolute;
left:30%;
top : 15%;
`

S.gridContainer= styled.div`

  /* 여기에다가 아마도
  width : 90% 
  margin : 0 auto;
  */

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

// 이미지를 감싸는 컨테이너 스타일, content를 props로 받음
S.ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  overflow: hidden;
  gap : 10px;
  display: flex;
  justify-content: center;


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
  color: #fff; // 텍스트 색상
  font-size: 18px; // 텍스트 크기 (rem 단위)
  line-height: 1.5; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none; // 기본적으로 숨김

  ${S.ImageWrapper}:hover & {
    display: block; // hover 시 보임
  }
`;








export default S;
