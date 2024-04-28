import React from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';

const YearCostBenefitLotteworld = () => {
  
  return (
    <div className='notosanskr'>
      {/* 롯데월드 연간회원권 할인혜택 */}
      <S.Header1>연간 이용권</S.Header1>
      <S.NavParkSelector>
        <NavLink to={'/yearcost/benefit/lotteworld'}>롯데월드</NavLink>
        <span>|</span>
        <NavLink to={'/yearcost/benefit/everland'}>에버랜드</NavLink>
        <span>|</span>
        <NavLink to={'/yearcost/benefit/seoulland'}>서울랜드</NavLink>
      </S.NavParkSelector>
      <S.TypeSelector>
        <NavLink to={'/yearcost/explain/lotteworld'} className='explain'>이용권 안내</NavLink>
        <NavLink to={'/yearcost/benefit/lotteworld'} className='benefit'>할인 정보</NavLink>
      </S.TypeSelector>
      <S.GridWrapper>
          
      </S.GridWrapper>
    </div>
  );
};

export default YearCostBenefitLotteworld;