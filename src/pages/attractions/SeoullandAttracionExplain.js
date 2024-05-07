import React from 'react';
import { useParams } from 'react-router-dom';
import S from './style.js';
import BasicButton from '../../components/button/BasicButton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBan, faCircleExclamation, faHeartPulse, faMartiniGlass, faPersonPregnant, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


const attractions = {
  1: {
    name: "둥실 비행선",
    description: "파스텔톤 비행선을 타고 둥실~ 둥실~ 바람 따라 구름 따라 여행을 떠나요. ",
    image:"/AttractionsImage/seoulland/ex1.jpg",
  },

  2: {
    name: "빅 회전목마",
    description: "놀이공원의 절대적 상징물 '회전목마' 온 가족이 음악에 맞춰 함께 떠나는 환상적인 여행!",
    image: "/AttractionsImage/seoulland/ex2.jpg",
  },

  3: {
    name: "월드컵",
    description: " 10개의 축구공 모양의 접시가 하늘로 치솟아 빙글빙글 돌면서 연인과 친구들에게 아찔한 시간을 제공합니다!",
    image: "/AttractionsImage/seoulland/ex3.jpg",
  },

 4: {
    name:"도깨비 바람",
    description: "놀이기구가 엄청난 속도로 자전과 공전을 한다고?? 공중에서 사람들을 마구 떨어뜨려 버릴 것 같은 무시무시한 도깨비바람! ",
    image:  "/AttractionsImage/seoulland/ex3.jpg",
    location: "매직 아일랜드",
  },

  5: {
    name: "쥬라기랜드",
    description: "공룡 연구소를 테마로 만들어진 초대형 실내 공룡 체험관! 2억년 전, 공룡들이 살아 숨쉬던 시대를 생생하게 만나보세요!",
    image:  "/AttractionsImage/seoulland/ex3.jpg",
  },

  6: {
    name: "킹바이킹",
    description: "  더 이상 말이 필요 없는 국민적인 놀이기구!",
    image:  "/AttractionsImage/seoulland/ex3.jpg",
  },

  7: {
    name: "블랙홀 2000",
    description: "트위스트 2번! 초특급 우주열차! 은하계의 블랙홀을 통과하는 초특급 우주열차! ",
    image: "/AttractionsImage/seoulland/ex3.jpg",
  },

  8: {
    name: "라바 트위스터",
    description: "하늘을 나는 라바를 타고 우리 둘이~ 시원한 바람을 가르며 계절의 변화를 느껴보세요.",
    image:  "/AttractionsImage/seoulland/ex3.jpg",
  },

  9: {
    name: "은하열차 888",
    description: "수직하강과 원형레일을 반복! 두 바퀴 연속 회전은 스릴 짱! 서울랜드 또 하나의 대표적인 롤러코스터!",
    image: "/AttractionsImage/seoulland/ex3.jpg",
  },

  10: {
    name: "베스트 키즈",
    description: "아이들이 마음껏 뛰놀 수 있는 베스트키즈!",
    image:  "/AttractionsImage/seoulland/ex3.jpg",
  },

  11: {
    name: "시티패럿",
    description: "귀여운 앵무새와 따뜻한 교감을 나눠보아요!",
    image:  "/AttractionsImage/seoulland/ex3.jpg",
  },

  12: {
    name: " 급류타기",
    description: "통나무 배에 몸을 싣고 물따라 길따라 여행을 떠나 보자고요~ ",
    image:  "/AttractionsImage/seoulland/ex3.jpg",
  }

 
};

const SeoullandAttractionExplain = () => {
  const { id } = useParams();
  const attraction = attractions[id];

  return (
   <>
      <S.Container >
      <h2>{attraction.name}</h2> 
     <div className='description'>{attraction.description}</div> 
      <img  className='mainImage' src={attraction.image} alt='#' /> 

      <div className='iconWrapper'>
        <div className='icon1'>
          <p><img src='/AttractionsImage/at_icon1.png' alt='#' /></p>
          <p>탑승 인원</p>
          <p>n명</p>
        </div>

        <div className='icon2'>
        <p> <img src='/AttractionsImage/at_icon2.png' alt='#' /> </p>
         <p>이용 정보</p>
         <p>110cm ~ 190cm</p>
        </div>
      </div>

      <p className='limit'> 
       <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>  탑승 제한</p>   <div className='limitWrapper'>

     <S.BigContainer>
     <S.IconContainer>
      <FontAwesomeIcon icon={faMartiniGlass} style={{fontSize:"100px"}} color='#000000'/> 
      <S.IconText>음주</S.IconText>
     </S.IconContainer>
     <S.IconContainer>
      <FontAwesomeIcon icon={faHeartPulse} style={{fontSize:"100px"}} color='#000000'/>
     <S.IconText>심장질환</S.IconText>
    </S.IconContainer>
     <S.IconContainer>
     <FontAwesomeIcon icon={faPersonPregnant} style={{fontSize:"100px"}} color='#000000'/>
     <S.IconText>임산부</S.IconText>
     </S.IconContainer>
     <S.IconContainer>
     <FontAwesomeIcon icon={faWheelchair} style={{fontSize:"100px"}} color='#000000'/>
     <S.IconText>휠체어</S.IconText>
     </S.IconContainer>
      </S.BigContainer>
      </div>


      <p className='notice'> 
        <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon> 
        유의 사항</p>
      <div className='pBorder'>
        <p >
           마감 시간과 입장 가능 시간이 다를 수 있으니 양지해 주시기 바랍니다.
        </p>
      </div>


     <p className='location'>위치 정보</p>
     {/* 지도 */}
      

      <S.ButtonContainer>
      <NavLink to ="/attraction/everland">
       <BasicButton shape={"default"} variant={"main"} size={"medium"} color={"white"} >
        뒤로가기
       </BasicButton>
      </NavLink>
       </S.ButtonContainer>
    
      </S.Container>
    </>  

  );
};

export default SeoullandAttractionExplain;



