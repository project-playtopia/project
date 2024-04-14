import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { MongoClient } from "mongodb";
// import connect from './connect';
// import BenefitLotteworldSchema from './benefit_lotte_schma.js';
// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';


const BenefitLotteworld = () => {
  const [filter, setFilter] =  useState("all");
  const [benefitList, setBenefitList] = useState([]);
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  // 필터링 버튼을 클릭하면
  // -> filter state 변경
  // -> 그에 따라 버튼색과 랜더링된 리스트를 변경
  // 리스트도 리랜더링 대상
  // 배열로 저장되었다고 가정할 때 배열이 변하면 리스트도 변해야한다.
  // -> useState, useEffect를 사용한다.

  
  useEffect(()=>{
    document.getElementById('nav-container').children.forEach((btn)=>{
      if(btn.id === filter){
        btn.classList.add('active');
      }else{
        btn.classList.remove('active');
      }
    });
  }, [filter]);
  
  useEffect(()=>{},[benefitList]);

  const onClickToSearch = () => {
    // console.log("clicked")
  }

  return (
    <div className='notosanskr'>
      {/* 롯데월드 이달의혜택 */}
      <S.Header1>이 달의 혜택</S.Header1> 
      <S.NavParkSelector>
        <NavLink to={"/benefit/lotteworld"}>롯데월드</NavLink>
        <span>|</span>
        <NavLink to={"/benefit/everland"}>에버랜드</NavLink>
        <span>|</span>
        <NavLink to={"/benefit/seoulland"}>서울랜드</NavLink>
      </S.NavParkSelector>
      <S.NavTypeSelector>
        <S.NavContainer id='nav-container'>
          <S.BtnTypeSelector id='all' onClick={()=>{setFilter('all')}}>전체</S.BtnTypeSelector>
          <S.BtnTypeSelector id='normal' onClick={()=>{setFilter('normal')}} >일반혜택</S.BtnTypeSelector>
          <S.BtnTypeSelector id='card' onClick={()=>{setFilter('card')}} >카드혜택</S.BtnTypeSelector>
          <S.BtnTypeSelector id='membership' onClick={()=>{setFilter('membership')}} >간편결제/멤버십혜택</S.BtnTypeSelector>
        </S.NavContainer>
        <S.SearchWrapper>
          <S.SearchInput></S.SearchInput>
          <S.SearchBtn onClick={onClickToSearch}><FontAwesomeIcon icon={faSearch} size="2x" color="#1FB1D9" /></S.SearchBtn>
        </S.SearchWrapper>
      </S.NavTypeSelector>
      <S.OrderSelector>
        <S.OrderBtn>최저가순</S.OrderBtn> | <S.OrderBtn>할인율순</S.OrderBtn>
      </S.OrderSelector>
      <S.GridWrapper>
        {
          benefitList.map(()=>{})
        }
      </S.GridWrapper>
    </div>
  );
};

export default BenefitLotteworld;