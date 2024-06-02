import React from 'react';
import { Link } from 'react-router-dom';
import mainimage from './image/mainimage.png';
import everlandimage1 from './image/everlandimage1.jpg';
import everlandimage2  from './image/everlandimage2.png';
import everlandimage3 from './image/everlandimage3.png';
import S from './style.js';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EventEverland = () => {
  return (
    <div className='notosanskr'>
      <S.H1>이벤트 공지사항</S.H1>
      <S.title>
      <Link to={"/event/lotteworld"} ><S.lotteworld>롯데월드</S.lotteworld></Link>
        <S.everland color='#1FB1D9'>에버랜드</S.everland >
        <Link to={"/event/seoulland"}><S.seoulland>서울랜드</S.seoulland></Link>
      </S.title>
    
        <S.MainImagediv><S.MainImage src={mainimage} alt="Main" />
        </S.MainImagediv>

        <S.SideBardiv>
        <S.SideBar>
          <S.icon >
         <FontAwesomeIcon icon={faBullhorn} className='bullhorn' />
         </S.icon>
            <div>
            주요공지사항  
            </div>              
          
        </S.SideBar>
        </S.SideBardiv>
 
      <S.content >
        <S.ContentImage  src={everlandimage1 } alt="everlandimage1 "></S.ContentImage >
        <S.contenttitle>
        <Link to={`/event/explain/${4}`}><S.subtitle>봄꽃 인증샷 이벤트</S.subtitle></Link>
        <S.subcontent >하늘정원길, 튤립 가든 등 에버랜드 곳곳에 피어있는 예븐 봄꽃과 함께 사진 찍어 인스타그램 업로드 해주세요!
          함께 촬영한 꽃 종류별로 추첨을 통해 선물을 드립니다.
        </S.subcontent >
        </S.contenttitle>
      </S.content >

      <S.content>
        <S.ContentImage   src={everlandimage2} alt="everlandimage2"></S.ContentImage >
        <S.contenttitle >  
        <Link to={`/event/explain/${5}`}><S.subtitle>봄 속에서 '솜' 찾기</S.subtitle></Link>
        <S.subcontent >아래 이미지에서 "솜"을 찾아 눌러주세요 최대 50,000솜(포인트)을 받으실 수 있는 룰렛
          이벤트에 참여하실 수 있어요!
        </S.subcontent >
        </S.contenttitle >
      </S.content>

      <S.content>
        <S.ContentImage   src={everlandimage3} alt="everlandimage3"></S.ContentImage >
        <S.contenttitle >
        <Link to={`/event/explain/${6}`}><S.subtitle>판다월드 카페 오픈 이벤트</S.subtitle></Link>
        <S.subcontent >판다월드 최고의 노릇노릇 빵 굽기 마스터!
          사육사 아부지로부터 전수받은 시크릿 레시피에 아셰프 만의 노하우를 더하다!
        </S.subcontent >
        </S.contenttitle >
      </S.content>
      
    </div>
  );
};

export default EventEverland;