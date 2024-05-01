import React from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';

const YearCostExplainLotteworld = () => {
  return (
    <div className='notosanskr'>
      <S.Container>
        <S.Header1>연간이용권</S.Header1>
        <S.NavParkSelector>
          <NavLink to={'/yearcost/explain/lotteworld'}>롯데월드</NavLink>
          <span>|</span>
          <NavLink to={'/yearcost/explain/everland'}>에버랜드</NavLink>
          <span>|</span>
          <NavLink to={'/yearcost/explain/seoulland'}>서울랜드</NavLink>
        </S.NavParkSelector>
        <S.TypeSelector>
          <NavLink to={'/yearcost/explain/lotteworld'} className='explain'>이용권 안내</NavLink>
          <NavLink to={'/yearcost/benefit/lotteworld'} className='benefit'>할인 정보</NavLink>
        </S.TypeSelector>
        <S.CostExplainContainer>
          <S.CostExplainName>
            골드권
          </S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>전 대상</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>290,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
        </S.CostExplainContainer>
        <S.CostExplainContainer>
          <S.CostExplainName>
            그린권
          </S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>어른 / 청소년 <span>{"("}만13세 이상{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>290,000원</S.CostExplainPrice>
            <S.CostExplainTitle>어린이 <span>{"("}36개월 이상 ~ 만 12세 이하{')'}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>180,000원</S.CostExplainPrice>
            <S.CostExplainTitle>베이비 <span>{"("}12개월 이상 ~ 만 36개월 이하{')'}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>110,000원</S.CostExplainPrice>
            <S.CostExplainTitle>시니어 <span>{"("}만 65세 이상{')'}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>170,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
        </S.CostExplainContainer>
      </S.Container>      
    </div>
  );
};

export default YearCostExplainLotteworld;