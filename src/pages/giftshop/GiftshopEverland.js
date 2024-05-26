import React, { useEffect, useState } from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';
import GiftshopItem from './GiftshopItem.jsx';

const GiftshopEverland = () => {
  const [giftshopList, setGiftshopList] = useState([]);
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  const getDatas = async () => {
    const response = await fetch(`http://localhost:8000/giftshop/list/?company=everland`);
    const datas = await response.json();
    return datas;
  }

  useEffect(()=>{
    getDatas()
    .then((datas)=>{setGiftshopList(datas)})
    ;
  },[]);
  
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

export default GiftshopEverland;