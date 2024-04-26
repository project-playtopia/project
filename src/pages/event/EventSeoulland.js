import React from 'react';
import { Link } from 'react-router-dom';
import mainimage from './image/mainimage.png';
import seoullandimage1 from './image/seoullandimage1.png';
import seoullandimage2 from './image/seoullandimage2.png';
import seoullandimage3 from './image/seoullandimage3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import S from './style.js';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

const EventSeoulland = () => {
  return (
    <div>
    <S.H1>이벤트 공지사항</S.H1>
    <S.title>
    <Link to={"/event/lotteworld"} ><S.lotteworld>롯데월드</S.lotteworld></Link>
      <Link to={"/event/everland"} ><S.everland >에버랜드</S.everland ></Link>
      <S.seoulland color='#1FB1D9'>서울랜드</S.seoulland>
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
      <S.ContentImage  src={seoullandimage1} alt="seoullandimage1"></S.ContentImage >
      <S.contenttitle>
      <Link to={`/event/explain/${7}`}><S.subtitle>플라워즈 페스티벌</S.subtitle></Link>
      <S.subcontent >화려한 색채를 뽐내는 꽃들의 향현 봄기운 가득한 꽃들과 신나는 음악을 즐기자!</S.subcontent >
      </S.contenttitle>
    </S.content >

    <S.content>
      <S.ContentImage   src={seoullandimage2} alt="seoullandimage2"></S.ContentImage >
      <S.contenttitle >  
      <Link to={`/event/explain/${8}`}><S.subtitle>로드쇼, 플라워즈 업!</S.subtitle></Link>
      <S.subcontent >라이브 음악과 댄스, 다채로운 볼거리의 플라워 로드쇼!</S.subcontent >
      </S.contenttitle >
    </S.content>

    <S.content>
      <S.ContentImage   src={seoullandimage3} alt="seoullandimage3"></S.ContentImage >
      <S.contenttitle >
      <Link to={`/event/explain/${9}`}><S.subtitle>로맨틱 가든</S.subtitle></Link>
      <S.subcontent >알록달록 봄꽃들로 가득한 포토 공간! 플라워즈 정원 속 봄 꽃 나들이</S.subcontent >
      </S.contenttitle >
    </S.content>
    
  </div>
  );
};

export default EventSeoulland;