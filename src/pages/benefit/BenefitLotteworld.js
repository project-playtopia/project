import React from 'react';
import { NavLink } from 'react-router-dom';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const BenefitLotteworld = () => {
  return (
    <div>
      {/* 롯데월드 이달의혜택 */}
      <h1>이 달의 혜택</h1> 
      <S.NavParkSelector>
        <NavLink to={"/benefit/lotteworld"}>롯데월드</NavLink>
        <span>|</span>
        <NavLink to={"/benefit/everland"}>에버랜드</NavLink>
        <span>|</span>
        <NavLink to={"/benefit/seoulland"}>서울랜드</NavLink>
      </S.NavParkSelector>
      <S.NavTypeSelector>
        <S.NavContainer>
          <S.BtnTypeSelector>전체</S.BtnTypeSelector>
          <S.BtnTypeSelector>일반혜택</S.BtnTypeSelector>
          <S.BtnTypeSelector>카드혜택</S.BtnTypeSelector>
          <S.BtnTypeSelector>간편결제/멤버십혜택</S.BtnTypeSelector>
        </S.NavContainer>
        <S.SearchWrapper>
          <S.SearchInput></S.SearchInput>
          <S.SearchBtn><FontAwesomeIcon icon={faSearch} size="2x" color="#1FB1D9" /></S.SearchBtn>
        </S.SearchWrapper>
      </S.NavTypeSelector>
      <S.OrderSelector>
        최저가순 | 
        할인율순
      </S.OrderSelector>
      <div>
        grid
      </div>
    </div>
  );
};

export default BenefitLotteworld;