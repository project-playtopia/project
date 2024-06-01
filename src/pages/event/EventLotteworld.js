import React from 'react';
import { Link } from 'react-router-dom';
import mainimage from './image/mainimage.png';
import lotteworldimage1 from './image/lotteworldimage1.jpg';
import lotteworldimage2 from './image/lotteworldimage2.png';
import lotteworldimage3 from './image/lotteworldimage3.png';
import S from './style.js';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const EventLotteworld = () => {
  return (
    <div>
      <S.H1>이벤트 공지사항</S.H1>
      <S.title>
        <S.lotteworld color='#1FB1D9'>롯데월드</S.lotteworld>
        <Link to={"/event/everland"} ><S.everland >에버랜드</S.everland ></Link>
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
        <S.ContentImage  src={lotteworldimage1} alt="lotteworldimage1"></S.ContentImage >
        <S.contenttitle>
        <Link to={`/event/explain/${1}`}><S.subtitle>루프탑 갤러리</S.subtitle></Link>
        <S.subcontent >롯데월드 어드벤처의 상상력이 가장 높은 곳! 어드벤처 4층에 위치한 루프탑 갤러리에서 작가들의 개성 넘치는 작품과 굿즈를 구경하고 재밌는 캐리커쳐도 체험 해보세요!</S.subcontent >
        </S.contenttitle>
      </S.content >
    
      <S.content>
        <S.ContentImage   src={lotteworldimage2} alt="lotteworldimage2"></S.ContentImage >
        <S.contenttitle >  
        <Link to={`/event/explain/${2}`}><S.subtitle>롯데월드 x 세풋보</S.subtitle></Link>
        <S.subcontent >철이와 미애 만나러 롯데월드로! 
              네이버웹툰 인기작 세기말 풋사과 보습학원이
              웹툰을 뚫고 롯데월드에 옵니다!</S.subcontent >
        </S.contenttitle >
      </S.content>
      

      <S.content>
        <S.ContentImage   src={lotteworldimage3} alt="lotteworldimage3"></S.ContentImage >
        <S.contenttitle >
        <Link to={`/event/explain/${3}`}><S.subtitle>	롯데월드 유튜브 NEW시리즈 &lt;꽃밭캐스트&gt;</S.subtitle></Link>
        <S.subcontent >꽃밭캐스트 Lotte World X 지예은 SNL에서 해맑은 꽃밭 캐릭터 지예은!
          나 롯데월드에서 부르길래 놀러온 줄 알았는데...
        </S.subcontent >
        </S.contenttitle >
      </S.content>
      
    </div>
  );
};

export default EventLotteworld;
