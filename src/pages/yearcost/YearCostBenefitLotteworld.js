import React, { useEffect, useState } from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';
import YearCostBenefitItem from './YearCostBenefitItem.jsx';

const YearCostBenefitLotteworld = () => {

  const [ yearcostList, setYearcostList ] = useState([]);

  const getYearcost = async () => {
    const res = await fetch('http://localhost:8000/yearcost/list/?company=lotteworld')
    const datas = await res.json();
    setYearcostList(datas);
  }

  useEffect(()=>{
    getYearcost();
  },[]);
  
  return (
    <div className='notosanskr'>
      <S.Container>
        {/* 롯데월드 연간회원권 할인혜택 */}
        <S.Header1>연간 이용권</S.Header1>
        <S.NavParkSelector>
          <NavLink to={'/yearcost/benefit/lotteworld'}>롯데월드</NavLink>
          <span>|</span>
          <NavLink to={'/yearcost/explain/everland'}>에버랜드</NavLink>
          <span>|</span>
          <NavLink to={'/yearcost/explain/seoulland'}>서울랜드</NavLink>
        </S.NavParkSelector>
        <S.TypeSelector>
          <NavLink to={'/yearcost/explain/lotteworld'} className='explain'>이용권 안내</NavLink>
          <NavLink to={'/yearcost/benefit/lotteworld'} className='benefit'>할인 정보</NavLink>
        </S.TypeSelector>
        <S.GridWrapper>
            {
              yearcostList.map((item)=>(
                <YearCostBenefitItem 
                  itemId={item._id} title={item.title}
                  startAt={item.start_at} endAt={item.end_at}
                  img={item.img}
                />
              ))
            }
        </S.GridWrapper>
      </S.Container>
    </div>
  );
};

export default YearCostBenefitLotteworld;