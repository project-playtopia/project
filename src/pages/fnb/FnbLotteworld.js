import React, { useEffect, useState } from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FnbItem from './FnbItem.jsx';

const FnbLotteworld = () => {
  const [type, setType] = useState("restaurant");
  const [showFnbList, setShowFnbList] = useState([]);
  const [allFnbList, setAllFnbList] = useState([]);
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  const getDatas = async () => {
    const response = await fetch(`http://localhost:8000/fnb/list/?company=lotteworld&fnb_type=${type}`);
    const datas = await response.json();
    return datas;
  }

  const onClickToSearch = () => {
    const keyword = document.getElementById('search-input').value.trim();
    if(keyword === ''){
      alert('검색어를 입력해주세요');
    }else{
      const temp = allFnbList.filter((el, i)=>el.name.includes(keyword));
      if (temp.length === 0){
        alert('검색 결과가 없습니다')
      }else{
        setShowFnbList(temp);
      }
    }
  }

  useEffect(()=>{
    getDatas()
    .then((datas)=>{setAllFnbList(datas)})
    ;
    document.getElementById('nav-container').children.forEach((btn)=>{
      if(btn.id === type){
        btn.classList.add('active');
      }else{
        btn.classList.remove('active');
      }
    });
  },[type]);

  useEffect(()=>{
    getDatas()
    .then((datas)=>{setAllFnbList(datas)})
    // .then(()=>{console.log(fnbList)})
    ;
  },[]);

  useEffect(()=>{
    setShowFnbList(allFnbList);
  },[allFnbList]);

  return (
    <div className='notosanskr'>
      <S.Container>
        <S.Header1>FnB</S.Header1>
        <S.NavParkSelector>
          <NavLink to={"/fnb/lotteworld"}>롯데월드</NavLink>
          <span>|</span>
          <NavLink to={"/fnb/everland"}>에버랜드</NavLink>
          <span>|</span>
          <NavLink to={"/fnb/seoulland"}>서울랜드</NavLink>
        </S.NavParkSelector>
        <S.NavTypeSelector childAmount={3} id='nav-container'>
          <S.BtnTypeSelector id='restaurant' onClick={()=>{setType('restaurant')}} >음식점</S.BtnTypeSelector>
          <S.BtnTypeSelector id='cafe' onClick={()=>{setType('cafe')}} >카페</S.BtnTypeSelector>
          <S.BtnTypeSelector id='snack' onClick={()=>{setType('snack')}} >스낵</S.BtnTypeSelector>
          <S.SearchWrapper childAmount={3}>
            <S.SearchInput id='search-input'></S.SearchInput>
            <S.SearchBtn onClick={onClickToSearch}><FontAwesomeIcon icon={faSearch} size="2x" color="#1FB1D9" /></S.SearchBtn>
          </S.SearchWrapper>
        </S.NavTypeSelector>
        <S.GridWrapper>
          {
            showFnbList.map((item)=>(
              <FnbItem 
                itemId={item._id} img={item.img}
                title={item.name}
                description={item.description}
                location={item.location}
              />
            ))
          }
        </S.GridWrapper>
      </S.Container>
    </div>
  );
};

export default FnbLotteworld;