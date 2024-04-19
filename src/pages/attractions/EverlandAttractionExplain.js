import React from 'react';
import { useParams } from 'react-router-dom';
import S from './style';
import BasicButton from '../../components/button/BasicButton.jsx';

const attractions = {
  1: {
    name: "아마존 익스프레스",
    description: " 많은 탐험가들이 호수 속에 잠들어 있는 황금을 차지하기 위해 보트 위에 몸을 맡겼다!  " ,
    image: "/AttractionsImage/everland/ex1.jpg"
  },
  2: {
    name: "썬더 폴스",
    description: "20미터의 국내 최고 낙하높이! 45도의 국내 최대 낙하각도! 국내 최초로 도입된 뒤로 떨어지는 백워드 드롭!",
    image: "/AttractionsImage/everland/ex2.jpg",
  },
  3: {
    name: "롤링 엑스트레인",
    description: "꽈배기처럼 꼬인 스크류 회전과 360도의 찌릿찌릿 공중회전이 두 번씩! 정신을 차릴 수 없는 롤러코스터의 정석,롤링 엑스 트레인!",
    image:  "/AttractionsImage/everland/ex3.jpg",
  },
  4: {
    name: "허리케인",
    description: "미국 서부 시대 한 마을을 덮친 허리케인...오늘 초대형 폭풍 허리케인과 함께 하나가 된다!19미터 높이에서 회전하는 메가톤급 회오리 속에 몸을 맡겨 보는거야!",
    image: "/AttractionsImage/everland/ex4.jpg",
  },
  5: {
    name: "키즈 빌리지",
    description: "테마 별 체험을 통한 신체, 정서, 창의발달 프로그램을 4가지 테마로 경험하는 신개념 놀이터!",
    image: "/AttractionsImage/everland/ex5.jpg",
  },
  6: {
    name: "매직 쿠키 하우스",
    description: "과자 집 콘셉트의 체험 공간 속에서 직접 몸으로 배우며 경험해요!",
    image: "/AttractionsImage/everland/ex5.jpg",
  },
  7: {
    name: "로얄 쥬빌리 캐로셀",
    description: "백마 탄 왕자와 공주가 만난 중세 유럽 무도회장의 분위기는 어떨까? 무도회장 행 회전목마가 여러분을 기다립니다.  환상의 꿈결 같은 동화 속 주인공이 되어보세요",
    image: "/AttractionsImage/everland/ex5.jpg",
  },
  8: {
    name: "자동차 왕국",
    description: "구불구불 신나는 언덕길 드라이브! 꼬마 운전사들에게 그야말로 자동차 왕국이네요~",
    image: "/AttractionsImage/everland/ex5.jpg",
  },
 9: {
    name: "플래쉬 팡팡",
    description: "흐르는 음악과 함께 위로 아래로 동화속 엄지 공주가 되어 통통 튀는 의자에 앉아 신나게 놀아 보자구요!",
    image: "/AttractionsImage/everland/ex5.jpg",
  },
  10: {
    name: "피터팬",
    description: "번쩍번쩍 불빛이 빛나는 탐험선을 타고 뒤쫓아오는 무서운 후크 선장을 따돌려라!신나게 돌고도는 피터팬의 대모험이 이제 시작됩니다!",
    image: "/AttractionsImage/everland/ex5.jpg",
  },
  11: {
    name: "나는 코끼리",
    description: "분홍색, 하늘색 귀여운 생김새로 하늘을 나는 코끼리를 타고 빙글빙글~   하늘을 날고 싶은 코끼리의 소원을 이뤄주세요!",
    image: "/AttractionsImage/everland/ex5.jpg",
  },
  12: {
    name: "범퍼카",
    description: "어트랙션의 원조!누구든 멋진 레이서가 될 수 있어 항상 사랑받는 우리의 범퍼카~ ",
    image: "/AttractionsImage/everland/ex5.jpg",
  },
  
}


const EverlandAttractionExplain = () => {

  const { id } = useParams();
  const attraction = attractions[id];

  return (
    <>
    <S.Container >
    <h2>{attraction.name}</h2> 
   <div className='description'>{attraction.description}</div> 
    <img className='mainImage'  src={attraction.image} alt='#' /> 

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

    <p className='limit'>탑승 제한</p>
    <div className='limitWrapper'>
     <div className='limitIcons'>
    <img className='icon' src='/AttractionsImage/limitIcon1.png' alt='#' />
    <img className='icon' src='/AttractionsImage/limitIcon2.png' alt='#' />
    <img className='icon' src='/AttractionsImage/limitIcon3.png' alt='#' />
    <img className='icon' src='/AttractionsImage/limitIcon4.png' alt='#' />
     </div>
    </div>

    <p>유의 사항</p>
    <div className='pBorder'>
      <p> 마감 시간과 입장 가능 시간이 다를 수 있으니 양지해 주시기 바랍니다.</p>
    </div>

   <p>위치 정보</p>
   {/* 지도 */}


     <BasicButton/>

    </S.Container>
  </>  
  );
};

export default EverlandAttractionExplain;