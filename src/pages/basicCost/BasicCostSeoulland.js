import React from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';

const BasicCostSeoulland = () => {
  return (
    <S.Background>
    <S.H1>종합이용권</S.H1>
    <S.NavParkSelector>
      <NavLink to={"/basiccost/lotteworld"}>
        <p>롯데월드</p>
      </NavLink>
      <span>|</span>
      <NavLink to={"/basiccost/everland"}>
          <p>에버랜드</p>
      </NavLink>
      <span>|</span>
      <NavLink to={"/basiccost/seoulland"}>
        <p>서울랜드</p>
      </NavLink>
    </S.NavParkSelector>
    <S.CostWrapper>
<S.costboxtop>
  <S.line></S.line>
  <S.PalldayTitle>1Day</S.PalldayTitle>
  <S.PalldayContent top="45" left="3">어른</S.PalldayContent>
  <S.dashedLine top="47" left = "10"></S.dashedLine>
  <S.PalldayContent top="45" left="30">52,000원</S.PalldayContent>

  <S.PalldayContent top="58" left="3">청소년</S.PalldayContent>
  <S.dashedLine top="60" left = "10"></S.dashedLine>
  <S.PalldayContent top="58" left="30">46,000원</S.PalldayContent>

  <S.PalldayContent top="69" left="3">어린이</S.PalldayContent>
  <S.dashedLine top="72" left = "10"></S.dashedLine>
  <S.PalldayContent top="69" left="30">43,000원</S.PalldayContent>

  <S.PalldayContent top="81" left="3">베이비</S.PalldayContent>
  <S.dashedLine top="83" left = "10"></S.dashedLine>
  <S.PalldayContent top="81" left="30">무료입장</S.PalldayContent>
  
  <S.Pafter04Title>After04</S.Pafter04Title>
   <S.PalldayContent top="45" left="55">어른</S.PalldayContent>
  <S.dashedLine top="47" left = "62"></S.dashedLine>
  <S.PalldayContent top="45" left="82">45,000원</S.PalldayContent>
  <S.PalldayContent top="58" left="55">청소년</S.PalldayContent>
  <S.dashedLine top="60" left = "62"></S.dashedLine>
  <S.PalldayContent top="58" left="82">39,000원</S.PalldayContent>

  <S.PalldayContent top="69" left="55">어린이</S.PalldayContent>
  <S.dashedLine top="72" left = "62"></S.dashedLine>
  <S.PalldayContent top="69" left="82">36,000원</S.PalldayContent>

  <S.PalldayContent top="81" left="55">베이비</S.PalldayContent>
  <S.dashedLine top="83" left = "62"></S.dashedLine>
  <S.PalldayContent top="81" left="82">무료입장</S.PalldayContent>

</S.costboxtop>
</S.CostWrapper>
  </S.Background>
);
};

export default BasicCostSeoulland;