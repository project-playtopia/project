import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import BenefitItem from './BenefitItem.jsx';


const BenefitLotteworld = () => {
  const [filter, setFilter] =  useState("all");
  const [orderBy, setOrderBy] = useState("");
  const [benefitList, setBenefitList] = useState([]);
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  // 필터링 버튼을 클릭하면
  // -> filter state 변경
  // -> 그에 따라 버튼색과 랜더링된 리스트를 변경
  // 리스트도 리랜더링 대상
  // 배열로 저장되었다고 가정할 때 배열이 변하면 리스트도 변해야한다.
  // -> useState, useEffect를 사용한다.

  useEffect(()=>{
    fetch(`http://localhost:8000/benefit/list/?company=lotteworld&filter=${filter}`)
      .then((res)=>res.json())
      .then((data)=>{
        // console.log(data);
        setBenefitList(data);
      })
    ;
    document.getElementById('nav-container').children.forEach((btn)=>{
      if(btn.id === filter){
        btn.classList.add('active');
      }else{
        btn.classList.remove('active');
      }
    });
  }, [filter]);

  useEffect(()=>{
    console.log(orderBy);
    if(orderBy === 'cost'){
      setBenefitList(benefitList.map((el)=>el).sort((a, b)=>{
        if(a.price > b.price){ return 1; }
        else if (a.price < b.price){ return -1; }
        else{ return 0; }
      }));
    }else if(orderBy === 'new'){
      setBenefitList(benefitList.map((el)=>el).sort((a,b)=>{
        if (a.start_at < b.start_at){ return 1; }
        else if (a.start_at > b.start_at){ return -1; }
        else{
          if (a.end_at < b.end_at){ return 1; }
          else if (a.end_at > b.end_at){ return -1; }
          else{ return 0; }
        }
      }))
    }
    document.getElementById('order-selector').children.forEach((btn=>{
      if(btn.id === orderBy){
        btn.classList.add('active');
      }else{
        btn.classList.remove('active');
      }
    }))
  }, [orderBy]);
  
  const onClickToSearch = () => {
    const keyword = document.getElementById('search-input').value.trim();
    if(keyword === ''){
      alert('검색어를 입력해주세요');
    }else{
      const temp = benefitList.filter((el, i)=>el.title.includes(keyword));
      if (temp.length === 0){
        alert('검색 결과가 없습니다')
      }else{
        setBenefitList(temp);
      }
    }
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
          <S.SearchInput id='search-input'></S.SearchInput>
          <S.SearchBtn onClick={onClickToSearch}><FontAwesomeIcon icon={faSearch} size="2x" color="#1FB1D9" /></S.SearchBtn>
        </S.SearchWrapper>
      </S.NavTypeSelector>
      <S.OrderSelector id='order-selector'>
        <S.OrderBtn id='cost' onClick={()=>{setOrderBy('cost')}}>최저가순</S.OrderBtn>
        | 
        <S.OrderBtn id='new' onClick={()=>{setOrderBy('new')}} >최신순</S.OrderBtn>
      </S.OrderSelector>
      <S.GridWrapper>
        {
          benefitList.map((item)=>(
            <BenefitItem
              itemId={item._id} title={item.title}
              startAt={item.start_at} endAt={item.end_at} price={item.price}
              img={item.img}
            />
          ))
        }
      </S.GridWrapper>
    </div>
  );
};

export default BenefitLotteworld;