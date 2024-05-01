import React from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';

const GuidemapSeoulland = () => {
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
     
    </S.Background>
  );
};

export default GuidemapSeoulland;