import React, { useEffect, useState } from 'react';
import S from './style.js';
import { Link, useSearchParams } from 'react-router-dom';

const YearcostBenefitExplain = () => {
  const [ searchParams ] = useSearchParams();
  const itemId = searchParams.get('itemId');

  // const [yearcostBenefit, setYearcostBenefit] = useState({});
  // const [yearcostBenefitExplain, setYearcostBenefitExplain] = useState({});
  const [explainContents, setExplainContents] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  

  const getYearcostBenefit = async () => {
    const res = await fetch(`https://port-0-playtopia-rccln2llw1nwqng.sel5.cloudtype.app/yearcost/find/?itemId=${itemId}`);
    const data = await res.json();
    setTitle(await data.title);
  }

  const getYearcostBenefitExplain = async () => {
    const res = await fetch(`https://port-0-playtopia-rccln2llw1nwqng.sel5.cloudtype.app/yearcostBenefitExplain/find/?itemId=${itemId}`);
    const data = await res.json();
    setExplainContents(await data.contents);
    setDescription(await data.description);
  }
  useEffect(()=>{
    getYearcostBenefit()
      .then(()=>{getYearcostBenefitExplain();})
    ;
  },[])
  return (
    <div className='notosanskr'>
      <S.Container>
        <S.Header1>연간 이용권</S.Header1>
        <S.Header4>{title}</S.Header4>
        <S.Description>{description}</S.Description>
        <S.TableWrapper>
          <S.TableHeader>
            <tr>
              <td>구분</td>
              <td>정상가</td>
              <td>우대가</td>
            </tr>
          </S.TableHeader>
          <S.Table>
            {
              explainContents.map((e)=>(
                <tr>
                  <td>{e.title}</td>
                  <td><span className="subcolor">{e.original_price}</span></td>
                  <td><span className="subcolor">{e.discounted_price}</span></td>
                </tr>
              ))
            }
          </S.Table>
          <S.LinkWrapper>
            <Link to={'/yearcost/benefit/lotteworld'}>목록으로</Link>
          </S.LinkWrapper>
        </S.TableWrapper>
      </S.Container>
    </div>
  );
};

export default YearcostBenefitExplain;