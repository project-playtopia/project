import React from 'react';
import { Link } from 'react-router-dom';

const BenefitEverland = () => {
  return (
    <div>
      {/* 에버랜드 이달의 혜택 */}
      <h1>이달의 혜택</h1>
      <div>
        <Link to={"/benefit/lotteworld"}>롯데월드</Link>|
        <Link to={"/benefit/everland"}>에버랜드</Link>|
        <Link to={"/benefit/seoulland"}>서울랜드</Link>
      </div>
    </div>
  );
};

export default BenefitEverland;