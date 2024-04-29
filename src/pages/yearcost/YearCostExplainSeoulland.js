import React from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';

const YearCostExplainSeoulland = () => {
  return (
    <div className='notosanskr'>
      {/* 연간회원권 상세정보 서울랜드 */}
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
          <NavLink to={'/yearcost/explain/seoulland'} className='explain'>이용권 안내</NavLink>
          <NavLink to={'/yearcost/benefit/seoland'} className='benefit'>할인 정보</NavLink>
        </S.TypeSelector>
        <S.CostExplainContainer>
          <S.CostExplainName>서울랜드 연간이용권 {"("}서울랜드 + 코끼리열차{")"}</S.CostExplainName>
          <S.CostExplainName>신규 가입</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>어른/청소년 <span>{"("}만 13세 ~ 만 64세{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>200,000원</S.CostExplainPrice>
            <S.CostExplainTitle>주니어 <span>{"("}60개월 이상 ~ 만 12세{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>160,000원</S.CostExplainPrice>
            <S.CostExplainTitle>실버 <span>{"("}만 65세 ~{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>125,000원</S.CostExplainPrice>
            <S.CostExplainTitle>키즈 <span>{"("}36개월 이상 ~60개월 미만{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>125,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
          <S.CostExplainName>재가입 1회</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>어른/청소년 <span>{"("}만 13세 ~ 만 64세{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>150,000원</S.CostExplainPrice>
            <S.CostExplainTitle>주니어 <span>{"("}60개월 이상 ~ 만 12세{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>135,000원</S.CostExplainPrice>
            <S.CostExplainTitle>실버 <span>{"("}만 65세 ~{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>115,000원</S.CostExplainPrice>
            <S.CostExplainTitle>키즈 <span>{"("}36개월 이상 ~60개월 미만{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>115,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
          <S.CostExplainName>재가입 2회</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>어른/청소년 <span>{"("}만 13세 ~ 만 64세{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>130,000원</S.CostExplainPrice>
            <S.CostExplainTitle>주니어 <span>{"("}60개월 이상 ~ 만 12세{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>115,000원</S.CostExplainPrice>
            <S.CostExplainTitle>실버 <span>{"("}만 65세 ~{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>115,000원</S.CostExplainPrice>
            <S.CostExplainTitle>키즈 <span>{"("}36개월 이상 ~60개월 미만{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>115,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
          <S.CostExplainName>재가입 3회</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>어른/청소년 <span>{"("}만 13세 ~ 만 64세{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>110,000원</S.CostExplainPrice>
            <S.CostExplainTitle>주니어 <span>{"("}60개월 이상 ~ 만 12세{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>100,000원</S.CostExplainPrice>
            <S.CostExplainTitle>실버 <span>{"("}만 65세 ~{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>100,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
        </S.CostExplainContainer>
        <S.CostExplainContainer>
          <S.CostExplainName>둘모아 연간이용권 {"("}서울랜드 + 서울동물원 + 스카이리프트 + 코끼리열차{")"}</S.CostExplainName>
          <S.CostExplainName>신규가입</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>어른/청소년<span>{"("}만 13세 이상{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>255,000원</S.CostExplainPrice>
            <S.CostExplainTitle>주니어<span>{"("}60개월 이상 ~ 만 12세{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>200,000원</S.CostExplainPrice>
            <S.CostExplainTitle>키즈<span>{"("}36개월 이상 ~ 60개월 미만{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>175,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
          <S.CostExplainName>재가입</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>어른/청소년<span>{"("}만 13세 이상{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>220,000원</S.CostExplainPrice>
            <S.CostExplainTitle>주니어<span>{"("}60개월 이상 ~ 만 12세{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>160,000원</S.CostExplainPrice>
            <S.CostExplainTitle>키즈<span>{"("}36개월 이상 ~ 60개월 미만{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>160,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
        </S.CostExplainContainer>
        <S.CostExplainContainer>
          <S.CostExplainName>다모아 연간이용권 {"("}서울랜드 + 서울동물원 + 스카이리프트 + 국립과천과학관 + 코끼리열차 + 대공원역 유료주차장{")"}</S.CostExplainName>
          <S.CostExplainName>신규가입</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>어른/청소년<span>{"("}만 13세 이상{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>300,000원</S.CostExplainPrice>
            <S.CostExplainTitle>주니어<span>{"("}60개월 이상 ~ 만 12세{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>260,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
          <S.CostExplainName>재가입</S.CostExplainName>
          <S.CostExplainGrid>
            <S.CostExplainTitle>어른/청소년<span>{"("}만 13세 이상{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>270,000원</S.CostExplainPrice>
            <S.CostExplainTitle>주니어<span>{"("}60개월 이상 ~ 만 12세{")"}</span></S.CostExplainTitle>
            <S.Dotted></S.Dotted>
            <S.CostExplainPrice>235,000원</S.CostExplainPrice>
          </S.CostExplainGrid>
        </S.CostExplainContainer>
      </S.Container>
    </div>
  );
};

export default YearCostExplainSeoulland;