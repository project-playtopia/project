import React from 'react';
import MainImage1 from "./image/image1.jpg" 
import MainImage2 from "./image/image2.jpg"
import MainImage3 from "./image/image3.jpg" 
import MainImage4 from "./image/image4.jpg" 
import MainImage5 from "./image/image5.jpg" 
import MainImage6 from "./image/image6.jpg" 
import MainImage7 from "./image/image7.png" 
import MainImage8 from "./image/image8.png" 
import MainImage9 from "./image/image9.png" 
import S from './style.js';
import { useParams } from 'react-router-dom';

const EventExplain = () => {
  const {id} = useParams();
  let title = "";
  let mainImage = null;
  // /event/explain

  switch (id) {
    case "1":
      title = "루프탑 갤러리";
      mainImage = MainImage1;
      break;
    case "2":
      title = "롯데월드 x 세풋보";
      mainImage = MainImage2;
      break;
    case "3":
      title = "	롯데월드 유튜브 NEW시리즈 <꽃밭캐스트>";
      mainImage = MainImage3;
      break;
    case "4":
      title = "봄꽃 인증샷 이벤트";
      mainImage = MainImage4;
      break;
    case "5":
      title = "봄 속에서 '솜' 찾기";
      mainImage = MainImage5;
      break;
    case "6":
      title = "판다월드 카페 오픈 이벤트";
      mainImage = MainImage6;
      break;
    case "7":
      title = "플라워즈 페스티벌";
      mainImage = MainImage7;
      break;
    case "8":
      title = "로드쇼, 플라워즈 업!";
      mainImage = MainImage8;
      break;
    case "9":
      title = "로맨틱 가든";
      mainImage = MainImage9;
      break;
    default:
      title = "이벤트 설명"; // id 값이 없을 경우 기본 제목 설정
  }
  return (
    <div>
      <S.Container>
        <S.head>공지</S.head>
        <S.title>{title}</S.title>
        <S.date>2024.02.12</S.date>
      </S.Container>
      {mainImage && <S.Mainimage src={mainImage} alt="main" />}
      

    </div>
  );
};

export default EventExplain;