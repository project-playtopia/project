import React, { useEffect, useState } from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';
import GiftshopItem from './GiftshopItem.jsx';

const GiftshopSeoulland = () => {
  const [location, setLocation] = useState("all");
  const [giftshopList, setGiftshopList] = useState([]);
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  const getDatas = async () => {
    const response = await fetch(`http://localhost:8000/giftshop/list/?company=seoulland&location=${location}`);
    const datas = await response.json();
    return datas;
  };

  useEffect(()=>{
    getDatas()
    .then((datas)=>{setGiftshopList(datas)})
    ;
  },[]);

  useEffect(()=>{
    getDatas()
    .then((datas)=>{setGiftshopList(datas)})
    ;
    document.getElementById('nav-container').children.forEach((btn)=>{
      if(btn.id === location){
        btn.classList.add('active');
      }else{
        btn.classList.remove('active');
      }
    });
  },[location]);
  
  return (
    <div className='notosanskr'>
      <S.Container>
        <S.Header1>기프트샵</S.Header1>
        <S.NavParkSelector>
          <NavLink to={"/giftshop/lotteworld"}>롯데월드</NavLink>
          <span>|</span>
          <NavLink to={"/giftshop/everland"}>에버랜드</NavLink>
          <span>|</span>
          <NavLink to={"/giftshop/seoulland"}>서울랜드</NavLink>
        </S.NavParkSelector>
        <S.NavLocationSelector id='nav-container' childAmount={5}>
          <S.BtnLocationSelector id="all" onClick={()=>{setLocation('all')}}>전체</S.BtnLocationSelector>
          <S.BtnLocationSelector id="세계의광장" onClick={()=>{setLocation('세계의광장')}}>세계의광장</S.BtnLocationSelector>
          <S.BtnLocationSelector id="모험의나라" onClick={()=>{setLocation('모험의나라')}}>모험의나라</S.BtnLocationSelector>
          <S.BtnLocationSelector id="미래의나라" onClick={()=>{setLocation('미래의나라')}}>미래의나라</S.BtnLocationSelector>
          <S.BtnLocationSelector id="캐릭터타운" onClick={()=>{setLocation('캐릭터타운')}}>캐릭터타운</S.BtnLocationSelector>
        </S.NavLocationSelector>
        <S.GridWrapper>
          {
            giftshopList.map((item)=>(
              <GiftshopItem
                itemId={item._id} img={item.img}
                title={item.name}
                location={item.location}
                description={item.description} 
              />
            ))
          }
        </S.GridWrapper>
      </S.Container>
    </div>
  );
};

export default GiftshopSeoulland;