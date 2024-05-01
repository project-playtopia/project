import React from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';
import Lotteworldmap from './Lotteworldmap.jsx';

const GuidemapLotteworld = () => {
  return (
    <S.Background>
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
      <NavLink to={"/guidemap/seoulland"}>
       <p>서울랜드</p>
      </NavLink>
     </S.NavParkSelector>
     <S.H3>운영시간</S.H3>
     <S.BusinessHour>
      <p>10:00 - 22:00</p>
     </S.BusinessHour>

      <Lotteworldmap />

     <S.H3>운휴시설</S.H3>
      <S.H3>주차 안내</S.H3>
    <S.StyledTable>
        <S.parkboxtop>
          <p>롯데월드 어드벤처 이용 시</p>
        </S.parkboxtop>
      <tbody>
        <tr>
          <S.StyledTd width="25%" rowSpan={2} >
            <p className='buyticket'>종합이용권 및 파크이용권 <br />구매시</p>
          </S.StyledTd>
          <S.StyledTd width="15%"><p>~3시간</p></S.StyledTd>
          <S.StyledTd width="45%"><p>무료</p></S.StyledTd>
        </tr>
        <tr>
          <S.StyledTd width="15%" height="200px"><p>3시간~</p></S.StyledTd>
          <S.StyledTd width="45%" height="200px">
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




     
    </S.Background>
  );
};

export default GuidemapLotteworld;