import React, { useEffect, useState } from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';
import Everlandmap from './Everlandmap.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faSnowflake, faScrewdriverWrench, faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const GuidemapEverland = () => {
  const [attract, setAttract] = useState([])
  const now = new Date().getDate()

  const randomData = (now * 7 % 10)
 
  useEffect(()=>{
    const getAttract = async () => {
        try {
            const response = await fetch(`http://localhost:8000/guide/guideMap/${randomData}`)
            const datas = await response.json()
            return datas;
        } catch (error) {
            console.error("데이터를 찾지 못함", error);
        }
    }
    getAttract().then(data => {
        if (data) {
            setAttract(data);
        }
    })
}, [])

  
  return (
    <S.Background className='notosanskr'>
      <S.H1>가이드맵</S.H1>
      <S.NavParkSelector>
        <NavLink to={"/guidemap/lotteworld"}>
           <p>롯데월드</p>
        </NavLink>
        <span>|</span>
       <NavLink to={"/guidemap/everland"}>
          <p>에버랜드</p>
       </NavLink>
      <span>|</span>
      <NavLink to={"/course/seoulland"}>
       <p>서울랜드</p>
      </NavLink>
     </S.NavParkSelector>
     <S.H3>운영시간</S.H3>
     <S.BusinessHour>
      {attract.startTime && attract.endTime && (
      <p>{attract.startTime} - {attract.endTime}</p>
        )}
      </S.BusinessHour>
      <S.MapContainter>
        <Everlandmap />
      </S.MapContainter>
      <S.H3>운휴시설</S.H3>
     <S.Facility>
     <S.line></S.line>
     {attract.attraction && attract.attraction.length > 0 && (
  <>
    <h1 style={{ display: 'flex', alignItems: 'center' }}>
      {attract.attraction[0].content === "동계운휴" && (
        <S.Icon icon={faSnowflake}/>
      )}
      {attract.attraction[0].content === "정기 점검" && (
        <S.Icon icon={faScrewdriverWrench}/>
      )}
      {attract.attraction[0].content === "정기 운휴" && (
        <S.Icon icon={faCircleXmark}/>
      )}
      {attract.attraction[0].content === "우천 운휴" && (
        <S.Icon icon={faCloudRain} />
      )}
       <p>{attract.attraction[0].title}</p>
      <div className='facilityContent'> {attract.attraction[0].content}</div>
    </h1>
  </>
)}
<S.line></S.line>
{attract.attraction && attract.attraction.length > 0 && (
  <>
    <h1 style={{ display: 'flex', alignItems: 'center' }}>
      {attract.attraction[1].content === "동계운휴" && (
        <S.Icon icon={faSnowflake} />
      )}
      {attract.attraction[1].content === "정기 점검" && (
        <S.Icon icon={faScrewdriverWrench}/>
      )}
      {attract.attraction[1].content === "정기 운휴" && (
        <S.Icon icon={faCircleXmark}/>
      )}
      {attract.attraction[1].content === "우천 운휴" && (
        <S.Icon icon={faCloudRain}/>
      )}
      <p>{attract.attraction[1].title}</p>
      <div className='facilityContent'> {attract.attraction[1].content}</div>
    </h1>
  </>
)}
<S.line></S.line>
</S.Facility>
<S.H3>주차 안내</S.H3>
    <S.StyledTable>
        <S.parkboxtop>
          <p>에버랜드 이용 시</p>
        </S.parkboxtop>
      <tbody>
        <tr>
          <S.StyledTd width="25%" rowSpan={2}>
            <p className='buyticket'>종합이용권 및 파크이용권 <br />구매시</p>
          </S.StyledTd>
          <S.StyledTd width="15%"><p>~3시간</p></S.StyledTd>
          <S.StyledTd width="45%"><p>무료</p></S.StyledTd>
        </tr>
        <tr>
          <S.StyledTd width="15%" height="200px"><p>3시간~</p></S.StyledTd>
          <S.StyledTd width="45%" height="200px" >
            <p className='parkhour'>
            1,000원/10분 최대 3,000원<br />
            예시) 3시간 10분: 1,000원<br />
            3시간 20분: 2,000원<br />
            3시간 30분~: 3,000원
            </p>
          </S.StyledTd>
        </tr>
      </tbody>
    </S.StyledTable>

    <S.footerP>
      ※ 에버랜드 내ㆍ외 레스토랑/ 기프트샵 이용시 이용 금액에 따라 최대 3시간까지 무료 주차 가능합니다.
      <br />3만원 이상 ~ 5만원 미만 1시간 /5만원 이상 ~ 7만원 미만 2시간 /7만원 이상 3시간 
    </S.footerP>


    </S.Background>
  );
};

export default GuidemapEverland;