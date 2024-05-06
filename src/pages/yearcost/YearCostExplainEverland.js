import React from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';

const YearCostExplainEverland = () => {
  return (
    <div className='notosanskr'>
      {/* 에버랜드 연간회원권 상세정보 */}
      <S.Container>
        <S.Header1>연간이용권</S.Header1>
        <S.NavParkSelector>
          <NavLink to={'/yearcost/explain/lotteworld'}>롯데월드</NavLink>
          <span>|</span>
          <NavLink to={'/yearcost/explain/everland'}>에버랜드</NavLink>
          <span>|</span>
          <NavLink to={'/yearcost/explain/seoulland'}>서울랜드</NavLink>
        </S.NavParkSelector>
        <S.CostExplainContainer>
          <S.CostExplainName>365 스탠다드</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>신규 구입 대인</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>290,000원</S.CostExplainPrice>
            <S.CostExplainTitle>신규 구입 소인</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>230,000원</S.CostExplainPrice>
            <S.CostExplainTitle>재 구입 대인</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>240,000원</S.CostExplainPrice>
            <S.CostExplainTitle>재 구입 소인</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>180,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
        </S.CostExplainContainer>
        <S.CostExplainContainer>
          <S.CostExplainName>350 스탠다드 {'('}극 성수기 제외 약 350일{')'} </S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>신규 구입 대인</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>240,000원</S.CostExplainPrice>
            <S.CostExplainTitle>신규 구입 소인</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>190,000원</S.CostExplainPrice>
            <S.CostExplainTitle>재 구입 대인</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>190,000원</S.CostExplainPrice>
            <S.CostExplainTitle>재 구입 소인</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>140,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
        </S.CostExplainContainer>
        <S.CostExplainContainer>
          <S.CostExplainName>320 셀렉트 {'('}성수기 제외 약 320일{')'}</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>신규 구입 대인</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>190,000원</S.CostExplainPrice>
            <S.CostExplainTitle>신규 구입 소인</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>150,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
        </S.CostExplainContainer>
        <S.CostExplainContainer>
          <S.CostExplainName>250 위크데이 {'('}1년 중 주말 공휴일 제외한 평일 약 250일{')'}</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>신규 구입 대인</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>140,000원</S.CostExplainPrice>
            <S.CostExplainTitle>신규 구입 소인</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>110,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
        </S.CostExplainContainer>
        <S.CostExplainContainer>
          <S.CostExplainName>365 시니어 {'('}1년 365일, 만 60세 이상{')'}</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>신규 구입</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>130,000원</S.CostExplainPrice>
            <S.CostExplainTitle>재 구입</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>130,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
        </S.CostExplainContainer>
        <S.CostExplainContainer>
          <S.CostExplainName>365 베이비 {'('}1년 365일, 24개월~35개월{')'}</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>신규 구입</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>90,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
        </S.CostExplainContainer>
        <S.CostExplainContainer>
          <S.CostExplainName>6개월권 {'('}180일{')'}</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>신규 구입</S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>판매 시 공지</S.CostExplainPrice>
          </S.CostExplainGrid>
        </S.CostExplainContainer>
      </S.Container>
    </div>
  );
};

export default YearCostExplainEverland;