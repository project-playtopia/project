import React from 'react';
import { useParams } from 'react-router-dom';
import S from './style.js';
import BasicButton from '../../components/button/BasicButton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBan, faCircleExclamation, faHeartPulse, faMartiniGlass, faPersonPregnant, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const attractions = {
  1: {
    name: "슬릭스튜디오",
    description: "슬릭스튜디오에서 미디어 아트를 통해 가장 매력적인 나를 발견해보세요. ertertet",
    image: "/AttractionsImage/lotte/ex1.jpg",
  },

  2: {
    name: "배틀그라운드 월드 에이전트",
    description: "배틀그라운드 전장 속에서 살아남기 위해, 적들에 맞서 이 섬을 탈출해라!",
    image: "/AttractionsImage/lotte/ex2.jpg",
  },

  3: {
    name: "카트라이더 레이싱월드",
    description: "게임 속에서만 즐기던 카트라이더를 이젠 롯데월드에서 직접 타면서 즐겨보세요!",
    image: "/AttractionsImage/lotte/ex3.jpg",
  },

  4: {
    name: "월드 모노레일",
    description: "깜찍한 로티, 로리로 변신한 열차! 새로워진 월드모노레일을 만나보세요.",
    image: "/AttractionsImage/lotte/ex4.jpg",
    location: "매직 아일랜드",
  },

  5: {
    name: "자이로드롭",
    description: "구름이 맞닿을 듯한 높이까지 올라갔다 한 순간에 떨어지는 스릴만점 어트랙션입니다.",
    image: "/AttractionsImage/lotte/ex5.jpg"
  },

  6: {
    name: "자이로스윙",
    description: "40여명이 둘러앉은 거대한 회전기구가 시계추처럼 움직여 새로운 공포를 느낄 수 있습니다.",
    image: "/AttractionsImage/lotte/ex6.jpg"
  },

  7: {
    name: "자이로스핀",
    description: "아시아 최초 저소음 무진동 회전 어트랙션! 입이 쩍~ 벌어지는 놀라운 스피드를 경험해 보세요!",
    image: "/AttractionsImage/lotte/ex7.jpg"
  },

  8: {
    name: "아트란티스",
    description: "최고 스릴 어트랙션! 시속 72km로 출발하는 보트를 타고 미스터리 신전 속으로 여행을 떠나보세요!",
    image: "/AttractionsImage/lotte/ex8.jpg"
  },

  9: {
    name: "혜성특급",
    description: "좌우로 회전하는 롤러코스터를 타고 떠나는 어둠 속 스펙터클 우주여행 !",
    image: "/AttractionsImage/lotte/ex9.jpg"
  },

  10: {
    name: "번지드롭",
    description: "높이 38m의 짜릿함과 시속 90km로 추락 할 때의 스릴! 끝났구나 하고 안심하는 순간 한번 더~ 30초간 반복되는 번지드롭!",
    image: "/AttractionsImage/lotte/ex10.jpg"
  },

  11: {
    name: "회전그네",
    description: "나뭇잎 의자에 앉아 4.5m 상공에서 시속 50km의 빠른 속도로 빙글빙글 도는 회전 그네!" ,
    image: "/AttractionsImage/lotte/ex11.jpg",
  },

  12: {
    name: " 머킹의 회전목마",
    description: "머킹 왕실의 해마와 바다 생물들을 타며 즐기는 축제 한 마당",
    image: "/AttractionsImage/lotte/ex12.jpg",
  }
};

const LotteworldAttractionExplain = () => {
  const { id } = useParams();
  const attraction = attractions[id];

  return (
   <>
      <S.Container >
      <h2>{attraction.name}</h2> 
     <div className='description'>{attraction.description}</div> 
      <img className='mainImage' src={attraction.image} alt='#' /> 

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
      <NavLink to ="/attraction/lotteworld">
       <BasicButton shape={"default"} variant={"main"} size={"medium"} color={"white"} >
        뒤로가기
       </BasicButton>
      </NavLink>
     </S.ButtonContainer>
    
   </S.Container>
    </>  

  );
};

export default LotteworldAttractionExplain;
