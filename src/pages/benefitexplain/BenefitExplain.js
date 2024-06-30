import React, { useEffect, useState } from 'react';
import S from './style.js';
import { useSearchParams } from 'react-router-dom';

const BenefitExplain = () => {
  const [ searchParams ] = useSearchParams();
  const itemId = searchParams.get('itemId');
  const [benefitInfo, setBenefitInfo] = useState({});
  const [explainInfo, setExplainInfo] = useState({});

  const [period, setPeriod] = useState("");

  const getBenefitInfo = async ()=>{
    try{
      const response = await fetch(`http://localhost:8000/benefit/find/?benefitId=${itemId}`);
      const datas = await response.json();
      setBenefitInfo(datas);
    }catch(e){
      console.log(e);
    }
  }

  const getExplainInfo = async () => {
    try{
      const response = await fetch(`http://localhost:8000/benefitExplain/?benefitId=${itemId}`);
      const datas = response.json();
      setExplainInfo(datas);
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    getBenefitInfo()
      .then(()=>{
        setPeriod(benefitInfo.start_at?.slice(0,10) +" ~ "+ benefitInfo.end_at?.slice(0,10))
      })
      .then(()=>{
        getExplainInfo();
      })
    ;
    // 어째서인지 fetch로 데이터 불러오는 것이 안된다..
    // 속도 이슈로 데이터가 랜더링 되지 않는 것 같다. (창을 최소화 했다가 다시 열면 데이터가 들어와있다.)
  }, []);
  

  return (
    <div className='notosanskr'>
      {/* 이달의 혜택 상세페이지 */}
      <S.Header1>{benefitInfo.title}</S.Header1>
      <S.EventPeriod>{period}</S.EventPeriod>
      <S.TableWrapper>
        <S.TableHeader>
          <tr>
            <th>파크 이용권</th>
            <th>정가</th>
            <th>할인가</th>
            <th>동반 1인가</th>
          </tr>  
        </S.TableHeader>
        {/* {
          explainInfo.map((e)=>(<div>{e}</div>))
        } */}
      
      </S.TableWrapper>
    </div>
  );
};

export default BenefitExplain;