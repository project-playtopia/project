import React from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';

const CourseLotteworld = () => {
  return (
    <div>
        <S.NavParkSelector>
        <NavLink to={"/basiccost/lotteworld"}>
          <p>롯데월드</p>
        </NavLink>
        <span>|</span>
        <NavLink to={"/basiccost/everland"}>
            <p>에버랜드</p>
        </NavLink>
        <span>|</span>
        <NavLink to={"/basiccost/seoulland"}>
          <p>서울랜드</p>
        </NavLink>
      </S.NavParkSelector>
    </div>
  );
};

export default CourseLotteworld;