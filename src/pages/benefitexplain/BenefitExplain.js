import React, { useEffect, useState } from 'react';
import S from './style.js';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import BenefitExplainTable from './BenefitExplainTable.jsx';

const BenefitExplain = () => {
  const [ searchParams ] = useSearchParams();
  const itemId = searchParams.get('itemId');
  const [explainInfo, setExplainInfo] = useState([]);
  const [period, setPeriod] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const onClickToPay = () => {
    navigate('/pay', {
      state: {
        itemId: itemId,
        period: period,
        explainInfo: explainInfo,
      }
    })
  }

  const getExplainInfo = async () => {
    try{
      const response = await fetch(`http://localhost:8000/benefitExplain/?benefitId=${itemId}`);
      const datas = await response.json();
      setTitle(await datas.title);
      setPeriod(await datas.start_at + " ~ " + datas.end_at);
      setExplainInfo(await datas.contents);
      setDescription(await datas?.description);
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    getExplainInfo();
  }, []);
  

  return (
    <div className='notosanskr'>
      {/* 이달의 혜택 상세페이지 */}
      <S.Container>

      <S.Header1>{title}</S.Header1>
      <S.EventPeriod>{period}</S.EventPeriod>
      <S.TableWrapper>
        <S.TableHeader>
          <tr>
            <td>파크 이용권</td>
            <td>정상가</td>
            <td>본인 우대가</td>
            <td>동반인 우대가</td>
          </tr>  
        </S.TableHeader>
          {
            explainInfo.map((rows)=>(
              <BenefitExplainTable rows={rows} />
            ))
          }
        </S.TableWrapper>
        {
          description && (
            <S.Description>{description}</S.Description>
          )
        }
        <S.BtnContainer>
          <Link to={'/benefit/lotteworld'} className='to-list'>목록으로</Link>
          {/* <Link to={'/pay'} className='to-pay'>결제하기</Link> */}
          <button onClick={onClickToPay} className='to-pay'>결제하기</button>
        </S.BtnContainer>
      </S.Container>
    </div>
  );
};

export default BenefitExplain;