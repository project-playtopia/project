import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import BenefitItem from './BenefitItem.jsx';

const BenefitEverland = () => {
  const [filter, setFilter] =  useState("all");
  const [orderBy, setOrderBy] = useState("");
  const [benefitList, setBenefitList] = useState([]);
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  useEffect(()=>{
    fetch(`http://localhost:8000/benefit/list/?company=everland&filter=${filter}`)
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
    // console.log("clicked")
  }

  return (
    <div className='notosanskr'>
      {/* 에버랜드 이달의혜택 */}
      <S.Container>
        <S.Header1>이 달의 혜택</S.Header1> 
        <S.NavParkSelector>
          <NavLink to={"/benefit/lotteworld"}>롯데월드</NavLink>
          <span>|</span>
          <NavLink to={"/benefit/everland"}>에버랜드</NavLink>
          <span>|</span>
          <NavLink to={"/benefit/seoulland"}>서울랜드</NavLink>
        </S.NavParkSelector>
        <S.NavTypeSelector id='nav-container'>
            <S.BtnTypeSelector id='all' onClick={()=>{setFilter('all')}}>전체</S.BtnTypeSelector>
            <S.BtnTypeSelector id='normal' onClick={()=>{setFilter('normal')}} >일반혜택</S.BtnTypeSelector>
            <S.BtnTypeSelector id='card' onClick={()=>{setFilter('card')}} >카드혜택</S.BtnTypeSelector>
            <S.BtnTypeSelector id='membership' onClick={()=>{setFilter('membership')}} >간편결제/멤버십혜택</S.BtnTypeSelector>
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
      </S.Container>
    </div>
  );
};

export default BenefitEverland;