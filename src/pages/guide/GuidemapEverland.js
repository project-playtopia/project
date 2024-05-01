import React from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';

const GuidemapEverland = () => {
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
    </S.Background>
  );
};

export default GuidemapEverland;