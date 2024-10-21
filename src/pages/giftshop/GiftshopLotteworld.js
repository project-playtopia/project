import React, { useEffect, useState } from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';
import GiftshopItem from './GiftshopItem.jsx';

const GiftshopLotteworld = () => {
  const [location, setLocation] = useState("all");
  const [giftshopList, setGiftshopList] = useState([]);
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  const getDatas = async () => {
    const response = await fetch(`https://port-0-playtopia-rccln2llw1nwqng.sel5.cloudtype.app/giftshop/list/?company=lotteworld&location=${location}`,{
      headers : {
        'Content-Type': 'application/json',
      },
    });
    const datas = await response.json();
    return await datas;
  }

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
        <S.NavLocationSelector id='nav-container' childAmount={6}>
          <S.BtnLocationSelector id="all" onClick={()=>{setLocation('all')}}>전체</S.BtnLocationSelector>
          <S.BtnLocationSelector id="B1F" onClick={()=>{setLocation('B1F')}}>B1층</S.BtnLocationSelector>
          <S.BtnLocationSelector id="1F" onClick={()=>{setLocation('1F')}}>1층</S.BtnLocationSelector>
          <S.BtnLocationSelector id="2F" onClick={()=>{setLocation('2F')}}>2층</S.BtnLocationSelector>
          <S.BtnLocationSelector id="4F" onClick={()=>{setLocation('4F')}}>4층</S.BtnLocationSelector>
          <S.BtnLocationSelector id="magic" onClick={()=>{setLocation('magic')}}>매직아일랜드</S.BtnLocationSelector>
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

export default GiftshopLotteworld;