import React, { useEffect } from 'react';
import S from './style';

const YearcostBenefitExplain = () => {
  const [yearcostBenefit, setYearcostBenefit] = useState({});
  const getYearcostBenefit = async () => {
    // const res = await fetch(`http://localhost:8000/yearcostBenefit/explain/?itemId=${}`);
  }
  useEffect(()=>{

  },[])
  return (
    <div className='notosanskr'>
      <S.Container>
        <S.Header1>연간 이용권</S.Header1>

      </S.Container>
    </div>
  );
};

export default YearcostBenefitExplain;